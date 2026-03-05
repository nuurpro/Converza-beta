
import React, { useState, useRef, useEffect } from 'react';
import { DashboardView } from '../types';
import { 
  Settings, 
  CreditCard, 
  BarChart3, 
  LogOut, 
  ChevronUp,
  Zap,
  User
} from 'lucide-react';

interface SidebarProps {
  currentView: DashboardView;
  onChangeView: (view: DashboardView) => void;
  isOpenMobile: boolean;
  onCloseMobile: () => void;
  userEmail: string | null;
  balance: number;
  onOpenBilling: () => void;
}

// Icons
const IconGrid = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
const IconTag = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" /></svg>;
const IconFolder = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
const IconImage = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IconVideo = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10z" /></svg>;
const IconMegaphone = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" /></svg>;
const IconChart = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
const IconChat = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>;
const IconCalendar = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const IconCog = () => <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

const ConverzaLogoIcon = () => (
  <svg width="32" height="24" viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="12" width="4" height="4" fill="#FACC15" />
    <rect x="6" y="12" width="4" height="4" fill="#FACC15" />
    <rect x="12" y="12" width="4" height="4" fill="#FACC15" />
    <rect x="18" y="12" width="4" height="4" fill="#FACC15" />
    <rect x="24" y="12" width="4" height="4" fill="#FACC15" />
    <rect x="30" y="12" width="4" height="4" fill="#FACC15" fillOpacity="0.6" />
    <rect x="36" y="12" width="4" height="4" fill="#FACC15" fillOpacity="0.2" />
    <rect x="6" y="6" width="4" height="4" fill="#FACC15" />
    <rect x="12" y="6" width="4" height="4" fill="#FACC15" />
    <rect x="18" y="6" width="4" height="4" fill="#FACC15" />
    <rect x="24" y="6" width="4" height="4" fill="#FACC15" fillOpacity="0.6" />
    <rect x="18" y="0" width="4" height="4" fill="#FACC15" />
    <rect x="6" y="18" width="4" height="4" fill="#FACC15" />
    <rect x="12" y="18" width="4" height="4" fill="#FACC15" />
    <rect x="18" y="18" width="4" height="4" fill="#FACC15" />
    <rect x="24" y="18" width="4" height="4" fill="#FACC15" fillOpacity="0.6" />
    <rect x="18" y="24" width="4" height="4" fill="#FACC15" />
  </svg>
);

const Sidebar: React.FC<SidebarProps> = ({ 
  currentView, 
  onChangeView, 
  isOpenMobile, 
  onCloseMobile,
  userEmail,
  balance,
  onOpenBilling
}) => {
  const [isAccountMenuOpen, setIsAccountMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsAccountMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  const NavItem = ({ view, label, icon: Icon }: { view: DashboardView; label: string; icon: any }) => (
    <button
      onClick={() => {
        onChangeView(view);
        if (window.innerWidth < 768) onCloseMobile();
      }}
      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-2xl transition-all duration-200 group ${
        currentView === view 
          ? 'bg-zinc-100 text-zinc-900 dark:bg-white/10 dark:text-white/90' 
          : 'text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 dark:text-white/60 dark:hover:text-white/90 dark:hover:bg-white/5'
      }`}
    >
      <div className={`transition-colors ${currentView === view ? 'text-yellow-600' : 'text-zinc-400 group-hover:text-zinc-600 dark:text-white/60 dark:group-hover:text-white/90'}`}>
        <Icon />
      </div>
      <span className="text-sm font-semibold">{label}</span>
    </button>
  );

  const SectionHeader = ({ label }: { label: string }) => (
    <div className="px-4 mt-6 mb-2">
      <h3 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 dark:text-white/60">{label}</h3>
    </div>
  );

  return (
    <>
      {/* Mobile Overlay */}
      {isOpenMobile && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside className={`
        fixed inset-y-0 left-0 z-50 w-[260px] bg-white dark:bg-[#141414] border-r border-zinc-200 dark:border-white/10 flex flex-col transition-transform duration-300 ease-in-out md:translate-x-0 md:static
        ${isOpenMobile ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Logo */}
        <div className="p-6 flex items-center space-x-3">
          <ConverzaLogoIcon />
          <span className="text-xl font-black text-zinc-900 dark:text-white/90 tracking-tighter uppercase">CONVERZA</span>
        </div>

        {/* Navigation */}
        <div className="flex-1 overflow-y-auto px-3 pb-6 custom-scrollbar space-y-1">
          <SectionHeader label="Main" />
          <NavItem view="explore" label="Explore" icon={IconGrid} />
          <NavItem view="products" label="Products" icon={IconTag} />
          <NavItem view="projects" label="Projects" icon={IconFolder} />
          <NavItem view="chatbot" label="Chatbot" icon={IconChat} />
          <NavItem view="calendar" label="Content Calendar" icon={IconCalendar} />

          <SectionHeader label="Creative Tools" />
          <NavItem view="image-studio" label="Image Studio" icon={IconImage} />
          <NavItem view="video-studio" label="Video Studio" icon={IconVideo} />

          <SectionHeader label="Promotion" />
          <NavItem view="campaigns" label="Campaigns" icon={IconMegaphone} />
          <NavItem view="analytics" label="Analytics" icon={IconChart} />
        </div>

        {/* User Profile Footer */}
        <div className="p-4 border-t border-zinc-200 dark:border-white/10 relative bg-white dark:bg-[#141414]">
          {/* Popover Menu */}
          {isAccountMenuOpen && (
            <div 
              ref={menuRef}
              className="absolute bottom-full left-4 right-4 mb-2 bg-white dark:bg-[#18181B] border border-zinc-200 dark:border-white/10 rounded-2xl shadow-xl p-2 animate-fade-in-up z-50"
            >
              <div className="px-3 py-2 mb-2 border-b border-zinc-100 dark:border-white/5">
                <p className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Account</p>
              </div>
              <button 
                onClick={() => { onChangeView('settings'); setIsAccountMenuOpen(false); }}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-zinc-600 dark:text-white/60 hover:bg-zinc-50 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white/90 transition-colors"
              >
                <Settings className="w-4 h-4" />
                <span className="text-sm font-medium">Settings</span>
              </button>
              <button 
                onClick={() => { onOpenBilling(); setIsAccountMenuOpen(false); }}
                className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-zinc-600 dark:text-white/60 hover:bg-zinc-50 dark:hover:bg-white/5 hover:text-zinc-900 dark:hover:text-white/90 transition-colors"
              >
                <CreditCard className="w-4 h-4" />
                <span className="text-sm font-medium">Billing</span>
              </button>
              <div className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-zinc-600 dark:text-white/60">
                <Zap className="w-4 h-4 text-yellow-500" />
                <div className="flex-1 flex justify-between items-center">
                  <span className="text-sm font-medium">Usage</span>
                  <span className="text-xs font-mono font-bold text-zinc-900 dark:text-white/90">${balance.toFixed(2)}</span>
                </div>
              </div>
              <div className="my-1 border-t border-zinc-100 dark:border-white/5"></div>
              <button className="w-full flex items-center space-x-3 px-3 py-2 rounded-xl text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
                <LogOut className="w-4 h-4" />
                <span className="text-sm font-medium">Sign Out</span>
              </button>
            </div>
          )}

          {/* Account Card Trigger */}
          <button 
            onClick={() => setIsAccountMenuOpen(!isAccountMenuOpen)}
            className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-2xl transition-all duration-200 group ${isAccountMenuOpen ? 'bg-zinc-100 dark:bg-white/10' : 'hover:bg-zinc-50 dark:hover:bg-white/5'}`}
          >
            <div className="w-8 h-8 rounded-full bg-yellow-400 dark:bg-yellow-500 flex items-center justify-center text-xs text-black font-bold flex-shrink-0">
              {userEmail?.[0].toUpperCase() || 'U'}
            </div>
            <div className="flex-1 min-w-0 text-left">
              <p className="text-xs font-bold text-zinc-900 dark:text-white/90 truncate">{userEmail || 'User'}</p>
              <p className="text-[10px] text-zinc-500 dark:text-white/60 uppercase tracking-tight">Pro Plan</p>
            </div>
            <ChevronUp className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${isAccountMenuOpen ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
