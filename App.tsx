
import React, { useState, useEffect } from 'react';
import { useAuth } from './hooks/useAuth';
import { useWallet } from './hooks/useWallet';
import LoginPage from './components/LoginPage';
import BillingModal from './components/BillingModal';
import ApiKeySelector from './components/ApiKeySelector';
import Sidebar from './components/Sidebar';
import { 
 ExploreView, 
 VideoStudioView, 
 ProductsView, 
 SettingsView,
 CampaignsView,
 AnalyticsView,
 ChatbotView,
 CalendarView,
 ImageStudioView,
 ProjectsView
} from './components/DashboardViews';
import { WizardStepAssets, WizardStepAvatar, WizardStepScript, LoadingScreen } from './components/MobileComponents';
import { DashboardView, WizardStep, CampaignContext, WorkflowStage, Theme } from './types';
import { generateConcepts, animateConcept } from './services/geminiService';
import { AVATARS } from './constants';

const App: React.FC = () => {
 const { isAuthenticated, login, userEmail } = useAuth();
 const { balance, addFunds, charge } = useWallet();
 const [apiKeySet, setApiKeySet] = useState(false);
 
 // Theme State
 const [theme, setTheme] = useState<Theme>('light');

 // Navigation State
 const [currentView, setCurrentView] = useState<DashboardView>('explore');
 const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

 // Wizard/Creation State
 const [stage, setStage] = useState<WorkflowStage>('home'); // 'home' means Dashboard View
 const [wizardStep, setWizardStep] = useState<WizardStep>(1);
 const [isProcessing, setIsProcessing] = useState(false);
 const [error, setError] = useState<string | null>(null);

 // Data
 const [inputImage, setInputImage] = useState<{ url: string; base64: string; mimeType: string } | null>(null);
 const [generatedConcepts, setGeneratedConcepts] = useState<string[]>([]);
 const [resultVideoUrl, setResultVideoUrl] = useState<string | null>(null);
 const [context, setContext] = useState<CampaignContext>({
 collectionName: '',
 audience: 'General',
 vibe: 'Urban',
 demographic: 'Gen Z',
 details: '',
 selectedAvatarId: AVATARS[0].id,
 selectedScriptId: null
 });
 const [script, setScript] = useState<string>("Wait! Don't scroll past this. I just found the ultimate hack for your daily routine.");
 const [isBillingOpen, setIsBillingOpen] = useState(false);

 useEffect(() => {
 if (theme === 'dark') {
 document.documentElement.classList.add('dark');
 } else {
 document.documentElement.classList.remove('dark');
 }
 }, [theme]);

 // --- WIZARD HANDLERS ---
 const handleStartWizard = () => {
 setStage('wizard');
 setWizardStep(1);
 setError(null);
 };

 const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
 const file = e.target.files?.[0];
 if (file) {
 const reader = new FileReader();
 reader.onload = () => {
 const base64 = (reader.result as string).split(',')[1];
 setInputImage({ url: URL.createObjectURL(file), base64, mimeType: file.type });
 };
 reader.readAsDataURL(file);
 }
 };

 const handleNextStep = async () => {
 if (wizardStep === 1) {
 if (!inputImage) { setError("Please upload an image first."); return; }
 if (!context.collectionName) { setError("Please enter a product name."); return; }
 setWizardStep(2);
 setError(null);
 } else if (wizardStep === 2) {
 setWizardStep(3);
 } else if (wizardStep === 3) {
 handleGenerate();
 }
 };

 const handleGenerate = async () => {
 if (!inputImage) return;
 if (!(await charge(3.0))) { setIsBillingOpen(true); return; }

 setStage('processing');
 setIsProcessing(true);

 try {
 const concepts = await generateConcepts(inputImage.base64, inputImage.mimeType, context);
 setGeneratedConcepts(concepts);
 const videoUrl = await animateConcept(concepts[0]);
 setResultVideoUrl(videoUrl);
 setStage('result');
 } catch (err: any) {
 setError(err.message || "Generation failed");
 setStage('home');
 } finally {
 setIsProcessing(false);
 }
 };

 const handleFinish = () => {
 setStage('home');
 setWizardStep(1);
 setInputImage(null);
 setResultVideoUrl(null);
 };

 if (!isAuthenticated) return <LoginPage onLogin={login} />;
 if (!apiKeySet) return <ApiKeySelector onKeySelected={() => setApiKeySet(true)} />;

 return (
 <div className={`flex h-screen bg-zinc-50 dark:bg-[#0A0A0A] text-zinc-900 dark:text-white/80 font-sans overflow-hidden ${theme === 'dark' ? 'dark' : ''}`}>
 <BillingModal isOpen={isBillingOpen} onClose={() => setIsBillingOpen(false)} balance={balance} onAddFunds={addFunds} />
 
 {/* Sidebar */}
 <Sidebar 
 currentView={currentView} 
 onChangeView={setCurrentView}
 isOpenMobile={isMobileSidebarOpen}
 onCloseMobile={() => setIsMobileSidebarOpen(false)}
 userEmail={userEmail}
 balance={balance}
 onOpenBilling={() => setIsBillingOpen(true)}
 />

 {/* Main Content Area */}
 <main className="flex-1 flex flex-col min-w-0 bg-zinc-50 dark:bg-[#0A0A0A] relative">
 {/* Top Bar / Header */}
 <header className="h-16 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between px-6 bg-white/80 dark:bg-[#0A0A0A]/80 backdrop-blur-md sticky top-0 z-30">
 <div className="flex items-center">
 <button 
 onClick={() => setIsMobileSidebarOpen(true)}
 className="md:hidden mr-4 text-zinc-500 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white/90"
 >
 <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
 </button>
 </div>
 </header>

 {/* Dashboard Content */}
 {stage === 'home' && (
 <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-8">
 {currentView === 'explore' && <ExploreView onCreateClick={handleStartWizard} />}
 {currentView === 'video-studio' && <VideoStudioView onCreateClick={handleStartWizard} />}
 {currentView === 'products' && <ProductsView onCreateClick={handleStartWizard} />}
 {currentView === 'projects' && <ProjectsView onCreateClick={handleStartWizard} />}
 {currentView === 'chatbot' && <ChatbotView onCreateClick={handleStartWizard} />}
 {currentView === 'calendar' && <CalendarView onCreateClick={handleStartWizard} />}
 {currentView === 'image-studio' && <ImageStudioView onCreateClick={handleStartWizard} />}
 {currentView === 'campaigns' && <CampaignsView onCreateClick={handleStartWizard} />}
 {currentView === 'analytics' && <AnalyticsView onCreateClick={handleStartWizard} />}
 {currentView === 'settings' && (
 <SettingsView 
 onCreateClick={handleStartWizard} 
 onOpenBilling={() => setIsBillingOpen(true)} 
 userEmail={userEmail}
 theme={theme}
 onThemeChange={setTheme}
 />
 )}
 </div>
 )}

 {/* Wizard Overlay (Modal-like Experience) */}
 {stage === 'wizard' && (
 <div className="absolute inset-0 bg-zinc-50 dark:bg-[#0A0A0A] z-40 flex flex-col animate-fade-in-up">
 <div className="flex items-center justify-between p-6 border-b border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141414]">
 <button onClick={() => setStage('home')} className="text-zinc-500 hover:text-zinc-900 dark:text-white/60 dark:hover:text-white/90 flex items-center text-sm font-bold">
 <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
 Back to Dashboard
 </button>
 <div className="flex space-x-2">
 {[1, 2, 3].map(s => <div key={s} className={`h-1.5 w-8 rounded-full ${s <= wizardStep ? 'bg-yellow-400 dark:bg-yellow-500' : 'bg-zinc-200 dark:bg-white/10'}`} />)}
 </div>
 </div>
 
 <div className="flex-1 overflow-y-auto custom-scrollbar p-6 md:p-12 max-w-3xl mx-auto w-full">
 {wizardStep === 1 && <WizardStepAssets image={inputImage?.url || null} context={context} onUpload={handleImageUpload} onContextChange={setContext} />}
 {wizardStep === 2 && <WizardStepAvatar selectedId={context.selectedAvatarId} onSelect={(id) => setContext({...context, selectedAvatarId: id})} />}
 {wizardStep === 3 && <WizardStepScript script={script} selectedScriptId={context.selectedScriptId} onSelectScript={(id, text) => { setContext({...context, selectedScriptId: id}); setScript(text); }} />}
 </div>

 <div className="p-6 border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141414] flex justify-end">
 <button 
 onClick={handleNextStep}
 className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-black font-black text-sm rounded-xl transition-transform active:scale-95 "
 >
 {wizardStep === 3 ? 'Generate Video' : 'Continue'}
 </button>
 </div>
 </div>
 )}

 {/* Processing & Result States */}
 {stage === 'processing' && <LoadingScreen />}
 
 {stage === 'result' && resultVideoUrl && (
 <div className="absolute inset-0 bg-zinc-50 dark:bg-[#0A0A0A] z-40 flex flex-col items-center justify-center p-8 animate-fade-in-up">
 <h2 className="text-3xl font-black text-zinc-900 dark:text-white/90 mb-8">Campaign Ready!</h2>
 <div className="relative h-[60vh] aspect-[9/16] bg-black rounded-3xl overflow-hidden border-2 border-zinc-200 dark:border-white/10 mb-8">
 <video src={resultVideoUrl} autoPlay loop controls className="w-full h-full object-cover" />
 </div>
 <div className="flex space-x-4">
 <button onClick={handleFinish} className="px-8 py-3 bg-zinc-200 dark:bg-white/5 text-zinc-900 dark:text-white/90 font-bold rounded-xl hover:bg-zinc-300 dark:hover:bg-white/10">Back to Dashboard</button>
 <a href={resultVideoUrl} download="ad.mp4" className="px-8 py-3 bg-yellow-400 dark:bg-yellow-500 text-black font-bold rounded-xl hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600">Download Video</a>
 </div>
 </div>
 )}

 {/* Error Toast */}
 {error && (
 <div className="absolute top-20 right-8 z-[60] bg-red-100 border border-red-200 text-red-600 px-6 py-4 rounded-xl backdrop-blur-md text-sm font-bold flex items-center animate-fade-in-up ">
 <svg className="w-5 h-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
 {error}
 </div>
 )}
 </main>
 </div>
 );
};

export default App;
