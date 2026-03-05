
import React from 'react';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  userEmail: string | null;
  onLogout: () => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, userEmail, onLogout }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-md z-[100] flex items-center justify-center p-4 animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-[#121214] w-full max-w-md rounded-3xl border border-zinc-800 shadow-2xl overflow-hidden relative"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-8 border-b border-zinc-800/50">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-white">Profile Settings</h2>
            <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex items-center space-x-4 p-4 bg-zinc-900/50 rounded-2xl border border-zinc-800">
            <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center text-black text-2xl font-black">
              {userEmail?.[0].toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-bold truncate">{userEmail}</p>
              <p className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-1">Status: Active Pro Member</p>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="space-y-4">
            <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">Preferences</h3>
            
            <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-zinc-800 rounded-lg text-zinc-400">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                </div>
                <span className="text-sm font-medium text-zinc-300">Biometric Login</span>
              </div>
              <div className="w-8 h-4 bg-zinc-800 rounded-full relative">
                <div className="absolute left-1 top-1 w-2 h-2 bg-zinc-600 rounded-full"></div>
              </div>
            </div>

            <div className="flex items-center justify-between py-2 border-b border-zinc-800/50">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-zinc-800 rounded-lg text-zinc-400">
                   <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                </div>
                <span className="text-sm font-medium text-zinc-300">Notifications</span>
              </div>
              <div className="w-8 h-4 bg-yellow-400 rounded-full relative">
                <div className="absolute right-1 top-1 w-2 h-2 bg-black rounded-full"></div>
              </div>
            </div>
          </div>

          <button 
            onClick={onLogout}
            className="w-full py-4 bg-red-500/10 hover:bg-red-500/20 text-red-400 font-bold rounded-2xl transition-all border border-red-500/20 flex items-center justify-center space-x-2"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
            <span>Disconnect Session</span>
          </button>
        </div>
        
        <div className="p-6 bg-zinc-900/30 text-center">
          <p className="text-[10px] text-zinc-600 uppercase font-black tracking-widest">CONVERZA v2.5.0-Neural</p>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
