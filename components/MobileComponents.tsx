
import React from 'react';
import { Sparkles } from 'lucide-react';
import { AVATARS, SCRIPT_HOOKS } from '../constants';
import { CampaignContext } from '../types';

// --- ICONS ---
const IconHome = ({ active }: { active: boolean }) => <svg className={`w-6 h-6 ${active ? 'text-yellow-600' : 'text-zinc-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
const IconPlay = ({ active }: { active: boolean }) => <svg className={`w-6 h-6 ${active ? 'text-yellow-600' : 'text-zinc-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const IconGallery = ({ active }: { active: boolean }) => <svg className={`w-6 h-6 ${active ? 'text-yellow-600' : 'text-zinc-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IconProfile = ({ active }: { active: boolean }) => <svg className={`w-6 h-6 ${active ? 'text-yellow-600' : 'text-zinc-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>;
const IconBolt = () => <svg className="w-4 h-4 text-black fill-current" viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;

// --- APP SHELL ---
export const AppHeader: React.FC<{ title: string; userInitial: string }> = ({ title, userInitial }) => (
  <header className="fixed top-0 left-0 right-0 h-16 bg-white/90 backdrop-blur-md border-b border-zinc-200 z-50 flex items-center justify-between px-6">
    <h1 className="text-2xl font-black text-zinc-900 tracking-tight">{title}</h1>
    <div className="flex items-center space-x-3">
      <div className="flex items-center bg-yellow-400 dark:bg-yellow-500 rounded-full px-3 py-1.5 space-x-1 shadow-sm">
        <IconBolt />
        <span className="text-black font-bold text-sm">450</span>
      </div>
      <div className="w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 flex items-center justify-center text-zinc-900 font-bold">
        {userInitial}
      </div>
    </div>
  </header>
);

export const BottomNav: React.FC<{ activeTab: string; onTabChange: (t: string) => void }> = ({ activeTab, onTabChange }) => (
  <nav className="fixed bottom-0 left-0 right-0 h-24 bg-white/95 backdrop-blur-xl border-t border-zinc-200 flex justify-around items-start pt-4 z-50">
    <button onClick={() => onTabChange('home')} className="flex flex-col items-center space-y-1 w-16">
      <IconHome active={activeTab === 'home'} />
      <span className={`text-[10px] font-bold ${activeTab === 'home' ? 'text-yellow-600' : 'text-zinc-400'}`}>Home</span>
    </button>
    <button onClick={() => onTabChange('videos')} className="flex flex-col items-center space-y-1 w-16">
      <IconPlay active={activeTab === 'videos'} />
      <span className={`text-[10px] font-bold ${activeTab === 'videos' ? 'text-yellow-600' : 'text-zinc-400'}`}>Videos</span>
    </button>
    <button onClick={() => onTabChange('assets')} className="flex flex-col items-center space-y-1 w-16">
      <IconGallery active={activeTab === 'assets'} />
      <span className={`text-[10px] font-bold ${activeTab === 'assets' ? 'text-yellow-600' : 'text-zinc-400'}`}>Assets</span>
    </button>
    <button onClick={() => onTabChange('profile')} className="flex flex-col items-center space-y-1 w-16">
      <IconProfile active={activeTab === 'profile'} />
      <span className={`text-[10px] font-bold ${activeTab === 'profile' ? 'text-yellow-600' : 'text-zinc-400'}`}>Profile</span>
    </button>
  </nav>
);

// --- HOME COMPONENTS ---
export const HomeGrid: React.FC<{ onCreateClick: () => void }> = ({ onCreateClick }) => (
  <div className="grid grid-cols-2 gap-4 mt-6">
    <div 
      onClick={onCreateClick}
      className="bg-white aspect-square rounded-3xl p-5 border border-zinc-200 relative overflow-hidden group active:scale-95 transition-all cursor-pointer shadow-sm"
    >
      <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center">
        <svg className="w-4 h-4 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </div>
      <div className="absolute bottom-5 left-5">
        <div className="flex -space-x-2 mb-3">
          {AVATARS.slice(0,3).map((a, i) => (
             <img key={i} src={a.imageUrl} className="w-8 h-8 rounded-full border-2 border-white object-cover" />
          ))}
        </div>
        <h3 className="text-zinc-900 font-bold text-lg leading-tight">Create AI<br/>Video</h3>
      </div>
    </div>

    <div className="bg-white aspect-square rounded-3xl p-5 border border-zinc-200 relative overflow-hidden group active:scale-95 transition-all shadow-sm">
       <div className="absolute bottom-5 left-5">
        <div className="w-10 h-10 rounded-xl bg-zinc-50 mb-3 flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-yellow-500" />
        </div>
        <h3 className="text-zinc-900 font-bold text-lg leading-tight">Generate<br/>Assets</h3>
      </div>
    </div>

    <div className="bg-white aspect-[4/3] col-span-2 rounded-3xl p-6 border border-zinc-200 flex items-center justify-between active:scale-95 transition-all shadow-sm">
        <div>
            <h3 className="text-zinc-900 font-bold text-lg">Run Meta Campaign</h3>
            <p className="text-zinc-500 text-sm mt-1">Connect ad account</p>
        </div>
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z"/></svg>
        </div>
    </div>
  </div>
);

// --- WIZARD STEPS ---

// Step 1: Assets
export const WizardStepAssets: React.FC<{ 
  image: string | null; 
  context: CampaignContext;
  onUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onContextChange: (ctx: CampaignContext) => void;
}> = ({ image, context, onUpload, onContextChange }) => (
  <div className="space-y-8 animate-fade-in-up">
    <div>
      <h2 className="text-2xl font-black text-zinc-900 mb-2">Create an Asset</h2>
      <p className="text-zinc-500">Upload your product photo to get started.</p>
    </div>

    <div className="grid grid-cols-3 gap-3">
      <label className="aspect-square rounded-3xl border-2 border-dashed border-zinc-300 hover:border-yellow-400 bg-zinc-50 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative transition-colors">
        <input type="file" className="hidden" accept="image/*" onChange={onUpload} />
        {image ? (
          <img src={image} className="w-full h-full object-cover" />
        ) : (
          <svg className="w-8 h-8 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
        )}
      </label>
      {[1,2,3,4,5].map(i => (
        <div key={i} className="aspect-square rounded-3xl border border-zinc-200 bg-white shadow-sm"></div>
      ))}
    </div>

    <div className="space-y-5">
      <div className="space-y-2">
        <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">What are you advertising?</label>
        <input 
          type="text" 
          value={context.collectionName}
          onChange={(e) => onContextChange({...context, collectionName: e.target.value})}
          placeholder="e.g. Summer Skincare Set"
          className="w-full bg-white border border-zinc-200 rounded-2xl p-4 text-zinc-900 placeholder-zinc-400 focus:border-yellow-400 outline-none font-medium shadow-sm"
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Add a few more details</label>
        <textarea 
          value={context.details}
          onChange={(e) => onContextChange({...context, details: e.target.value})}
          placeholder="It helps with glowing skin, organic ingredients..."
          rows={3}
          className="w-full bg-white border border-zinc-200 rounded-2xl p-4 text-zinc-900 placeholder-zinc-400 focus:border-yellow-400 outline-none font-medium resize-none shadow-sm"
        />
      </div>
    </div>
  </div>
);

// Step 2: Avatar
export const WizardStepAvatar: React.FC<{
  selectedId: string | null;
  onSelect: (id: string) => void;
}> = ({ selectedId, onSelect }) => (
  <div className="space-y-6 animate-fade-in-up h-full flex flex-col">
    <div>
      <h2 className="text-2xl font-black text-zinc-900 mb-2">Choose an Avatar</h2>
      <p className="text-zinc-500">Select the persona that fits your brand.</p>
    </div>

    <div className="grid grid-cols-2 gap-4 pb-32">
      {AVATARS.map((avatar) => (
        <div 
          key={avatar.id}
          onClick={() => onSelect(avatar.id)}
          className={`aspect-[3/4] relative rounded-3xl overflow-hidden cursor-pointer transition-all shadow-sm ${selectedId === avatar.id ? 'ring-4 ring-yellow-400' : ''}`}
        >
          <img src={avatar.imageUrl} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
          
          <div className="absolute top-3 right-3 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
             {selectedId === avatar.id && <div className="w-3 h-3 bg-yellow-400 dark:bg-yellow-500 rounded-full"></div>}
          </div>

          <div className="absolute bottom-4 left-4">
            <p className="text-white font-bold text-lg">{avatar.name}</p>
            <p className="text-zinc-300 text-xs">{avatar.gender}, {avatar.age}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// Step 3: Script
export const WizardStepScript: React.FC<{
  script: string;
  selectedScriptId: string | null;
  onSelectScript: (id: string, text: string) => void;
}> = ({ script, selectedScriptId, onSelectScript }) => (
  <div className="space-y-6 animate-fade-in-up">
    <div>
      <h2 className="text-2xl font-black text-zinc-900 mb-2">Review Script</h2>
      <p className="text-zinc-500">AI generated the following hook based on your inputs.</p>
    </div>

    <div className="bg-white border border-zinc-200 rounded-3xl p-6 relative shadow-sm">
       <div className="absolute top-4 right-4 text-zinc-400">
         <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
       </div>
       <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-3">Current Script</p>
       <p className="text-zinc-900 text-lg font-medium leading-relaxed">"{script}"</p>
    </div>

    <div className="space-y-3">
        <p className="text-zinc-400 text-xs font-bold uppercase tracking-widest">Alternative Hooks</p>
        {SCRIPT_HOOKS.map((hook) => (
            <div 
              key={hook.id}
              onClick={() => onSelectScript(hook.id, hook.text)}
              className={`p-4 rounded-2xl border cursor-pointer transition-all shadow-sm ${
                  selectedScriptId === hook.id 
                  ? 'bg-yellow-50 border-yellow-400 text-zinc-900' 
                  : 'bg-white border-zinc-200 text-zinc-500 hover:bg-zinc-50'
              }`}
            >
                <div className="flex justify-between items-center mb-1">
                    <span className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-full ${selectedScriptId === hook.id ? 'bg-yellow-400 dark:bg-yellow-500 text-black' : 'bg-zinc-100'}`}>
                        {hook.type}
                    </span>
                </div>
                <p className="text-sm font-medium">"{hook.text}"</p>
            </div>
        ))}
    </div>
  </div>
);

// --- LOADING SCREEN ---
export const LoadingScreen: React.FC = () => (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-8 text-center">
        <div className="relative w-48 h-80 border-4 border-zinc-200 rounded-[2.5rem] bg-zinc-50 overflow-hidden mb-12 flex items-center justify-center shadow-lg">
             {/* Scanning Animation */}
             <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400 dark:bg-yellow-500 shadow-[0_0_20px_rgba(250,204,21,0.5)] z-10 animate-[scan_2s_ease-in-out_infinite]"></div>
             <div className="w-32 h-32 rounded-full border border-zinc-200 flex items-center justify-center animate-pulse bg-white">
                <svg className="w-12 h-12 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /></svg>
             </div>
        </div>

        <h2 className="text-2xl font-black text-zinc-900 mb-2">Generating Video...</h2>
        <p className="text-zinc-500 max-w-xs mx-auto mb-8">We'll notify you once the video is done. <span className="text-yellow-600">Don't close the app.</span></p>

        <div className="w-full max-w-xs bg-zinc-200 rounded-full h-2 overflow-hidden">
             <div className="h-full bg-yellow-400 dark:bg-yellow-500 w-[45%] rounded-full animate-[progress_10s_ease-out_forwards]"></div>
        </div>
        <p className="text-xs text-zinc-400 mt-4 font-mono">RENDERING_PHYSICS_ENGINE_V3</p>
    </div>
);
