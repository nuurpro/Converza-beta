
import React, { useState } from 'react';
import { AVATARS, VIDEO_MODELS } from '../constants';
import ModelSelector from './ModelSelector';
import { Theme } from '../types';
import { 
  Video, 
  Mic, 
  ImagePlay, 
  Sparkles, 
  Plus, 
  Play, 
  Send, 
  Bot, 
  Download, 
  ChevronDown,
  ChevronRight,
  MoreVertical,
  Instagram,
  Linkedin,
  Rocket,
  Activity,
  Zap
} from 'lucide-react';

interface DashboardViewProps {
  onCreateClick: () => void;
  onOpenBilling?: () => void;
  userEmail?: string | null;
  theme?: Theme;
  onThemeChange?: (theme: Theme) => void;
}

// --- EXPLORE VIEW ---
export const ExploreView: React.FC<DashboardViewProps> = ({ onCreateClick }) => {
  const [expandedItem, setExpandedItem] = useState<number>(0);

  const accordionItems = [
    { 
      title: "Add your first product", 
      description: "Upload product photos to train your AI agent.",
      actionLabel: "Add Product",
      action: onCreateClick
    },
    { 
      title: "Create a video with AI influencer", 
      description: "Generate viral content with our digital avatars.",
      actionLabel: "Create Video",
      action: onCreateClick
    },
    { 
      title: "Generate a static ad", 
      description: "High converting static visuals for Meta ads.",
      actionLabel: "Create Ad",
      action: onCreateClick
    }
  ];

  const tools = [
    { title: "Marketing Video Ad", icon: <Video className="w-5 h-5" /> },
    { title: "Text to Speech", icon: <Mic className="w-5 h-5" /> },
    { title: "Image to Video", icon: <ImagePlay className="w-5 h-5" /> },
    { title: "Sora 2 Video Ad", icon: <Sparkles className="w-5 h-5" />, badge: "NEW" },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white/90 mb-2">Explore</h1>
        <p className="text-zinc-500 dark:text-white/60 text-sm">Getting started with AutonomHub</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-10">
        <div className="lg:col-span-3 bg-white dark:bg-[#141414] rounded-2xl border border-zinc-200 dark:border-white/10 p-6 ">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-zinc-900 dark:text-white/90">Setup Checklist</h2>
            <div className="flex items-center space-x-2 px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full">
              <Rocket className="w-3 h-3 text-yellow-500" />
              <span className="text-[10px] font-bold text-yellow-600 dark:text-yellow-400 uppercase tracking-widest">Boost Sales</span>
            </div>
          </div>
          <div className="space-y-3">
            {accordionItems.map((item, index) => (
              <div key={index} className={`border border-zinc-200 dark:border-white/10 rounded-xl overflow-hidden transition-all ${expandedItem === index ? 'bg-zinc-50 dark:bg-white/5' : 'bg-white dark:bg-[#141414]'}`}>
                <button 
                  onClick={() => setExpandedItem(index)}
                  className="w-full flex items-center justify-between p-3 text-left"
                >
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${expandedItem === index ? 'bg-yellow-400 dark:bg-yellow-500 text-black' : 'bg-zinc-100 dark:bg-white/5 text-zinc-500 dark:text-white/60'}`}>
                      {index + 1}
                    </div>
                    <span className={`text-sm font-medium ${expandedItem === index ? 'text-zinc-900 dark:text-white/90' : 'text-zinc-500 dark:text-white/60'}`}>{item.title}</span>
                  </div>
                  <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform ${expandedItem === index ? 'rotate-180' : ''}`} />
                </button>
                {expandedItem === index && (
                  <div className="px-3 pb-3 pl-11">
                    <p className="text-xs text-zinc-500 dark:text-white/60 mb-3">{item.description}</p>
                    <button 
                      onClick={item.action}
                      className="px-4 py-1.5 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-black font-bold text-[10px] uppercase tracking-wider rounded-lg transition-colors"
                    >
                      {item.actionLabel}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:flex flex-col space-y-4">
          <div className="bg-white dark:bg-[#141414] rounded-2xl border border-zinc-200 dark:border-white/10 p-5 flex flex-col items-center justify-center text-center group hover:border-yellow-400/30 transition-all">
            <div className="w-12 h-12 bg-zinc-50 dark:bg-white/5 rounded-xl mb-3 flex items-center justify-center text-zinc-900 dark:text-white/90 group-hover:scale-110 transition-transform">
              <Rocket className="w-6 h-6 text-yellow-500" />
            </div>
            <h3 className="text-zinc-900 dark:text-white/90 font-bold text-sm">Launch Campaign</h3>
            <p className="text-[10px] text-zinc-500 dark:text-white/60 mt-1 uppercase tracking-widest">Boost Sales Now</p>
            <button onClick={onCreateClick} className="mt-4 w-full py-2 bg-zinc-900 dark:bg-white text-white dark:text-black text-[10px] font-bold uppercase tracking-widest rounded-lg">Start</button>
          </div>
          
          <div className="bg-zinc-900 dark:bg-white/5 rounded-2xl p-5 border border-white/10 flex flex-col justify-between h-full">
            <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest">Usage</p>
            <div className="mt-4">
              <div className="flex justify-between text-[10px] text-white/60 mb-1 font-mono">
                <span>Credits</span>
                <span>85%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-1">
                <div className="bg-yellow-400 h-full rounded-full w-[85%]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-xs font-black text-zinc-400 dark:text-white/40 uppercase tracking-[0.2em] mb-6">AI Production Suite</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool, idx) => (
          <div key={idx} onClick={onCreateClick} className="bg-white dark:bg-[#141414] hover:bg-zinc-50 dark:hover:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl p-5 cursor-pointer transition-all group relative h-36 flex flex-col justify-between">
            {tool.badge && (
              <span className="absolute top-4 right-4 bg-yellow-400 dark:bg-yellow-500 text-black text-[8px] font-black px-1.5 py-0.5 rounded uppercase tracking-tighter">{tool.badge}</span>
            )}
            <div className="text-zinc-400 group-hover:text-yellow-500 transition-colors">
              {tool.icon}
            </div>
            <h3 className="text-zinc-900 dark:text-white/90 font-bold text-[11px] uppercase tracking-widest leading-tight">{tool.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- VIDEO STUDIO VIEW ---
export const VideoStudioView: React.FC<DashboardViewProps> = ({ onCreateClick }) => {
  const templates = ["Sora 2", "Marketing Video", "UGC", "Product Showcase", "Tutorial", "Review"];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white/90 mb-2">Video Studio</h1>
        <p className="text-zinc-500 dark:text-white/60 text-sm">Create professional videos with AI avatars</p>
      </header>

      <div className="mb-8 overflow-x-auto custom-scrollbar pb-2">
        <div className="flex space-x-3">
          {templates.map((t, i) => (
            <button key={i} className="px-5 py-2.5 bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 hover:border-zinc-400 dark:hover:border-white/20 rounded-xl text-xs font-bold uppercase tracking-widest text-zinc-700 dark:text-white/60 whitespace-nowrap transition-all ">
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {AVATARS.map((avatar) => (
          <div 
            key={avatar.id} 
            onClick={onCreateClick}
            className="group relative aspect-[9/16] bg-white dark:bg-[#141414] rounded-2xl overflow-hidden cursor-pointer border border-zinc-200 dark:border-white/10 hover:border-yellow-400 transition-all "
          >
            <img src={avatar.imageUrl} alt={avatar.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-90"></div>
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-bold text-lg">{avatar.name}</p>
              <p className="text-zinc-200 text-[10px] font-bold uppercase tracking-widest opacity-60">{avatar.age} years • {avatar.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// --- PRODUCTS VIEW ---
export const ProductsView: React.FC<DashboardViewProps> = ({ onCreateClick }) => {
  const products = [
    { id: 1, name: "Summer Skincare Set", price: "$49.00", status: "Active", image: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&q=80&w=300&h=300" },
    { id: 2, name: "Urban Street Hoodie", price: "$85.00", status: "Draft", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=300&h=300" },
    { id: 3, name: "Minimalist Watch", price: "$120.00", status: "Active", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300&h=300" },
    { id: 4, name: "Organic Coffee Bean", price: "$24.00", status: "Active", image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&q=80&w=300&h=300" }
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up pb-12">
      <header className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white/90 mb-2">Products</h1>
          <p className="text-zinc-500 dark:text-white/60 text-sm">Manage your product inventory for content generation.</p>
        </div>
        <button onClick={onCreateClick} className="px-6 py-2 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-black font-bold text-xs uppercase tracking-widest rounded-xl transition-colors">
          + Add Product
        </button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map(p => (
          <div key={p.id} className="bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden group hover:border-zinc-400 transition-all ">
            <div className="aspect-square bg-zinc-100 relative">
              <img src={p.image} alt={p.name} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" />
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider text-zinc-900 ">
                {p.status}
              </div>
            </div>
            <div className="p-4">
              <h3 className="text-zinc-900 dark:text-white/90 font-bold truncate text-sm">{p.name}</h3>
              <p className="text-zinc-500 dark:text-white/60 text-xs mt-1 font-mono">{p.price}</p>
            </div>
          </div>
        ))}
        <button onClick={onCreateClick} className="border-2 border-dashed border-zinc-300 dark:border-white/10 hover:border-zinc-500 rounded-2xl flex flex-col items-center justify-center p-4 transition-colors group bg-zinc-50 dark:bg-white/5">
          <div className="w-12 h-12 rounded-full bg-white dark:bg-white/10 group-hover:bg-zinc-100 dark:group-hover:bg-white/20 flex items-center justify-center text-zinc-400 group-hover:text-zinc-600 mb-3 transition-colors border border-zinc-200 dark:border-white/10">
            <Plus className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 dark:text-white/60 group-hover:text-zinc-700 dark:group-hover:text-white/90">New Product</span>
        </button>
      </div>
    </div>
  );
};

// --- SETTINGS VIEW ---
export const SettingsView: React.FC<DashboardViewProps> = ({ onOpenBilling, userEmail, theme, onThemeChange }) => {
  const [model, setModel] = useState(VIDEO_MODELS[0]);
  const [formData, setFormData] = useState({
    name: 'Converza Agent',
    contact: userEmail || '',
    website: 'https://converza.ai'
  });

  return (
    <div className="max-w-4xl mx-auto animate-fade-in-up pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white/90 mb-2">Settings</h1>
        <p className="text-zinc-500 dark:text-white/60 text-sm">Manage your agent preferences and integrations.</p>
      </header>
      
      {/* Profile Section */}
      <div className="bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 mb-6 ">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white/90 mb-6">Business Profile</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Business Name</label>
            <input 
              type="text" 
              value={formData.name} 
              onChange={e => setFormData({...formData, name: e.target.value})}
              className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl p-3 text-zinc-900 dark:text-white/90 text-sm focus:border-yellow-400 outline-none"
            />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Email / Phone</label>
            <input 
              type="text" 
              value={formData.contact} 
              onChange={e => setFormData({...formData, contact: e.target.value})}
              className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl p-3 text-zinc-900 dark:text-white/90 text-sm focus:border-yellow-400 outline-none"
            />
          </div>
          <div className="space-y-2 md:col-span-2">
            <label className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Website URL</label>
            <input 
              type="text" 
              value={formData.website} 
              onChange={e => setFormData({...formData, website: e.target.value})}
              className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl p-3 text-zinc-900 dark:text-white/90 text-sm focus:border-yellow-400 outline-none"
            />
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 mb-6 ">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white/90 mb-6">Integrations</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white/90 font-bold">
                <Instagram className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm text-zinc-900 dark:text-white/90">Instagram</span>
            </div>
            <span className="text-[10px] font-bold text-green-600 bg-green-100 dark:bg-green-900/30 px-2 py-1 rounded uppercase tracking-widest">Connected</span>
          </button>
          <button className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white/90 font-bold">
                <Send className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm text-zinc-900 dark:text-white/90">Telegram</span>
            </div>
            <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 dark:bg-white/5 px-2 py-1 rounded uppercase tracking-widest">Connect</span>
          </button>
          <button className="flex items-center justify-between p-4 rounded-xl border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center text-white/90 font-bold">
                <Linkedin className="w-4 h-4" />
              </div>
              <span className="font-bold text-sm text-zinc-900 dark:text-white/90">LinkedIn</span>
            </div>
            <span className="text-[10px] font-bold text-zinc-400 bg-zinc-100 dark:bg-white/5 px-2 py-1 rounded uppercase tracking-widest">Connect</span>
          </button>
        </div>
      </div>

      {/* AI Model */}
      <div className="bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 mb-6 overflow-visible">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white/90 mb-6">AI Model Configuration</h2>
        <div className="max-w-md">
          <ModelSelector selectedModel={model} onSelect={setModel} />
        </div>
      </div>

      {/* Theme */}
      <div className="bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 mb-6 ">
        <h2 className="text-lg font-bold text-zinc-900 dark:text-white/90 mb-6">Appearance</h2>
        <div className="flex items-center space-x-4">
          <button 
            onClick={() => onThemeChange && onThemeChange('light')}
            className={`flex-1 p-4 rounded-xl border-2 transition-all flex flex-col items-center ${theme === 'light' ? 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/20' : 'border-zinc-200 dark:border-white/10 hover:border-zinc-300'}`}
          >
            <div className="w-full h-24 bg-zinc-50 border border-zinc-200 rounded-lg mb-3 overflow-hidden relative">
              <div className="absolute top-2 left-2 w-16 h-4 bg-white rounded "></div>
              <div className="absolute top-8 left-2 w-8 h-8 bg-white rounded "></div>
            </div>
            <span className={`font-bold text-xs uppercase tracking-widest ${theme === 'light' ? 'text-zinc-900 dark:text-white/90' : 'text-zinc-500'}`}>Light Mode</span>
          </button>
          <button 
            onClick={() => onThemeChange && onThemeChange('dark')}
            className={`flex-1 p-4 rounded-xl border-2 transition-all flex flex-col items-center ${theme === 'dark' ? 'border-yellow-400 bg-zinc-800' : 'border-zinc-200 dark:border-white/10 hover:border-zinc-300'}`}
          >
            <div className="w-full h-24 bg-zinc-900 border border-zinc-700 rounded-lg mb-3 overflow-hidden relative">
              <div className="absolute top-2 left-2 w-16 h-4 bg-zinc-800 rounded"></div>
              <div className="absolute top-8 left-2 w-8 h-8 bg-zinc-800 rounded"></div>
            </div>
            <span className={`font-bold text-xs uppercase tracking-widest ${theme === 'dark' ? 'text-white' : 'text-zinc-500'}`}>Dark Mode</span>
          </button>
        </div>
      </div>

      {/* Billing */}
      <div className="bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-white/90">Billing & Subscription</h2>
          <p className="text-zinc-500 dark:text-white/60 text-xs uppercase tracking-tight">Manage your plan and payment methods.</p>
        </div>
        <button 
          onClick={onOpenBilling} 
          className="px-6 py-2.5 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-xl text-[10px] uppercase tracking-widest hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors"
        >
          Manage Billing
        </button>
      </div>
    </div>
  )
}

export const ProjectsView: React.FC<DashboardViewProps> = ({ onCreateClick }) => {
  const projects = [
    { id: 1, title: "Summer Launch Campaign", date: "2 mins ago", thumbnail: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=300&h=500", status: "Processing" },
    { id: 2, title: "Tech Review - Watch", date: "2 hours ago", thumbnail: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=300&h=500", status: "Done" },
    { id: 3, title: "Hoodie Lifestyle Promo", date: "1 day ago", thumbnail: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=300&h=500", status: "Done" },
  ];

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white/90 mb-2">Projects</h1>
        <p className="text-zinc-500 dark:text-white/60 text-sm">Your generated video library.</p>
      </header>

      <div className="overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141414] ">
        <table className="w-full text-left">
          <thead className="bg-zinc-50 dark:bg-white/5 border-b border-zinc-200 dark:border-white/10">
            <tr>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-white/40">Video</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-white/40">Project Name</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-white/40">Date Created</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-white/40">Status</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500 dark:text-white/40 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            {projects.map(p => (
              <tr key={p.id} className="group hover:bg-zinc-50 dark:hover:bg-white/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="w-16 h-24 bg-zinc-200 dark:bg-white/10 rounded-lg overflow-hidden relative ">
                    <img src={p.thumbnail} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 font-bold text-zinc-900 dark:text-white/90 text-sm">{p.title}</td>
                <td className="px-6 py-4 text-zinc-500 dark:text-white/60 text-xs font-mono">{p.date}</td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-[9px] font-bold uppercase tracking-widest ${
                    p.status === 'Done' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-800' : 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 animate-pulse'
                  }`}>
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const CalendarView: React.FC<DashboardViewProps> = ({ onCreateClick }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const renderCalendarGrid = () => {
    const grid = [];
    for(let i=0; i<2; i++) grid.push(<div key={`empty-${i}`} className="bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 h-32"></div>);
    for(let i=1; i<=30; i++) {
      grid.push(
        <div key={i} className="bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 h-32 p-2 relative group hover:bg-zinc-50 dark:hover:bg-white/10 transition-colors">
          <span className="text-zinc-500 dark:text-white/60 text-xs font-bold font-mono">{i}</span>
          {i === 5 && <div className="mt-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-[9px] p-1.5 rounded font-bold border border-blue-200 dark:border-blue-800 truncate uppercase tracking-tighter">Product Launch</div>}
          {i === 12 && <div className="mt-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 text-[9px] p-1.5 rounded font-bold border border-yellow-200 dark:border-yellow-800 truncate uppercase tracking-tighter">Story Promo</div>}
          {i === 24 && <div className="mt-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-[9px] p-1.5 rounded font-bold border border-green-200 dark:border-green-800 truncate uppercase tracking-tighter">UGC Repost</div>}
          
          <button onClick={onCreateClick} className="absolute bottom-2 right-2 text-zinc-400 hover:text-zinc-900 dark:hover:text-white opacity-0 group-hover:opacity-100 transition-opacity">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      )
    }
    return grid;
  }

  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up pb-12">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white/90 mb-2">Content Calendar</h1>
          <p className="text-zinc-500 dark:text-white/60 text-sm">Schedule and manage your upcoming content.</p>
        </div>
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-zinc-100 dark:bg-white/5 text-zinc-900 dark:text-white/90 font-bold rounded-xl text-[10px] uppercase tracking-widest border border-zinc-200 dark:border-white/10">Month</button>
          <button onClick={onCreateClick} className="px-4 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-xl text-[10px] uppercase tracking-widest hover:bg-zinc-700 dark:hover:bg-zinc-200 ">+ New Post</button>
        </div>
      </header>
      <div className="rounded-2xl border border-zinc-200 dark:border-white/10 overflow-hidden ">
        <div className="grid grid-cols-7 bg-zinc-50 dark:bg-white/5 border-b border-zinc-200 dark:border-white/10">
          {days.map(d => <div key={d} className="py-3 text-center text-[10px] font-black text-zinc-400 dark:text-zinc-500 uppercase tracking-[0.2em]">{d}</div>)}
        </div>
        <div className="grid grid-cols-7">
          {renderCalendarGrid()}
        </div>
      </div>
    </div>
  )
}

export const ChatbotView: React.FC<DashboardViewProps> = () => {
  return (
    <div className="h-full flex flex-col animate-fade-in-up">
      <div className="flex-1 flex overflow-hidden rounded-2xl border border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141414] m-6 mb-0 ">
        <div className="w-64 border-r border-zinc-200 dark:border-white/10 bg-zinc-50 dark:bg-[#141414] hidden md:flex flex-col">
          <div className="p-4 border-b border-zinc-200 dark:border-white/10">
            <button className="w-full py-2 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-black font-bold rounded-lg text-[10px] uppercase tracking-widest transition-colors ">+ New Chat</button>
          </div>
          <div className="flex-1 overflow-y-auto p-2 space-y-1">
            {["Campaign Strategy", "Script Brainstorming", "Technical Support", "Billing Question"].map((chat, i) => (
              <div key={i} className={`p-3 rounded-xl cursor-pointer text-xs font-bold uppercase tracking-tight truncate ${i === 0 ? 'bg-white dark:bg-white/5 text-zinc-900 dark:text-white/90 border border-zinc-200 dark:border-white/10' : 'text-zinc-500 dark:text-white/60 hover:bg-zinc-100 dark:hover:bg-white/10 hover:text-zinc-700 dark:hover:text-zinc-200'}`}>
                {chat}
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col bg-white dark:bg-[#141414]">
          <div className="p-4 border-b border-zinc-200 dark:border-white/10 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <Bot className="w-4 h-4" />
              </div>
              <span className="font-bold text-zinc-900 dark:text-white/90 text-sm">Campaign Assistant</span>
            </div>
            <button className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"><MoreVertical className="w-5 h-5" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-zinc-50/50 dark:bg-[#0A0A0A]/50">
            <div className="flex justify-end">
              <div className="bg-zinc-800 dark:bg-white/10 text-white px-4 py-3 rounded-2xl rounded-tr-sm max-w-md text-sm ">
                Help me optimize my summer campaign for Gen Z.
              </div>
            </div>
            <div className="flex justify-start items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex-shrink-0 flex items-center justify-center mt-1 text-blue-600 dark:text-blue-400">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-zinc-700 dark:text-white/60 px-4 py-3 rounded-2xl rounded-tl-sm max-w-md text-sm leading-relaxed ">
                For Gen Z, authenticity is key. I recommend using the "Urban" vibe with shorter, fast-paced edits. 
                <br/><br/>
                Try the "Stop scrolling!" hook. Would you like me to generate 3 video variations with these settings?
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-zinc-200 dark:border-white/10 bg-white dark:bg-[#141414]">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Type a message..." 
                className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl py-3 pl-4 pr-12 text-zinc-900 dark:text-white/90 placeholder-zinc-400 focus:border-yellow-400/50 focus:outline-none text-sm"
              />
              <button className="absolute right-2 top-2 p-1 text-yellow-500 hover:text-yellow-600">
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const ImageStudioView: React.FC<DashboardViewProps> = ({ onCreateClick }) => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white/90 mb-2">Image Studio</h1>
        <p className="text-zinc-500 dark:text-white/60 text-sm">Generate photorealistic product photography.</p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 rounded-2xl p-6 h-fit space-y-6 ">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Prompt</label>
            <textarea className="w-full bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-xl p-3 text-zinc-900 dark:text-white/90 text-sm focus:border-yellow-400 outline-none resize-none h-32" placeholder="Describe the image you want to generate..."></textarea>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black text-zinc-400 uppercase tracking-widest">Aspect Ratio</label>
            <div className="grid grid-cols-3 gap-2">
              <button className="py-2 bg-zinc-100 dark:bg-white/5 rounded-lg text-[10px] font-bold text-zinc-900 dark:text-white/90 border border-yellow-400/50 uppercase tracking-widest">1:1</button>
              <button className="py-2 bg-white dark:bg-[#141414] rounded-lg text-[10px] font-bold text-zinc-500 dark:text-white/60 border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/10 uppercase tracking-widest">16:9</button>
              <button className="py-2 bg-white dark:bg-[#141414] rounded-lg text-[10px] font-bold text-zinc-500 dark:text-white/60 border border-zinc-200 dark:border-white/10 hover:bg-zinc-50 dark:hover:bg-white/10 uppercase tracking-widest">9:16</button>
            </div>
          </div>
          <button onClick={onCreateClick} className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-black font-bold rounded-xl transition-colors text-[10px] uppercase tracking-widest">
            Generate Images (1 Credit)
          </button>
        </div>
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {[1,2,3,4].map(i => (
            <div key={i} className="aspect-square bg-zinc-100 dark:bg-white/5 rounded-xl border border-zinc-200 dark:border-white/10 relative group overflow-hidden">
              <img src={`https://picsum.photos/seed/product${i}/400/400`} className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity" referrerPolicy="no-referrer" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
                <div className="flex justify-end space-x-2">
                  <button className="p-1.5 bg-white/20 backdrop-blur-md rounded-lg text-white hover:bg-white/30"><Download className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export const CampaignsView: React.FC<DashboardViewProps> = ({ onCreateClick }) => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up pb-12">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-zinc-900 dark:text-white/90 mb-2">Campaigns</h1>
          <p className="text-zinc-500 dark:text-white/60 text-sm">Manage your active ad campaigns across platforms.</p>
        </div>
        <button onClick={onCreateClick} className="px-6 py-2 bg-zinc-900 dark:bg-white text-white dark:text-black font-bold rounded-xl text-[10px] uppercase tracking-widest hover:bg-zinc-700 dark:hover:bg-zinc-200">+ New Campaign</button>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl border border-zinc-200 dark:border-white/10 ">
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">Total Spend</p>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white/90 font-mono">$12,450.00</p>
          <div className="mt-2 text-green-600 text-[10px] font-bold uppercase tracking-widest">+12% vs last month</div>
        </div>
        <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl border border-zinc-200 dark:border-white/10 ">
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">Impressions</p>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white/90 font-mono">1.2M</p>
          <div className="mt-2 text-green-600 text-[10px] font-bold uppercase tracking-widest">+5% vs last month</div>
        </div>
        <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl border border-zinc-200 dark:border-white/10 ">
          <p className="text-zinc-400 text-[10px] font-black uppercase tracking-widest mb-1">Avg. ROAS</p>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white/90 font-mono">3.4x</p>
          <div className="mt-2 text-zinc-500 dark:text-white/60 text-[10px] font-bold uppercase tracking-widest">Stable</div>
        </div>
      </div>
      <div className="bg-white dark:bg-[#141414] border border-zinc-200 dark:border-white/10 rounded-2xl overflow-hidden ">
        <table className="w-full text-left">
          <thead className="bg-zinc-50 dark:bg-white/5 border-b border-zinc-200 dark:border-white/10">
            <tr>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Campaign</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Status</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Platform</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">Spend</th>
              <th className="px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-400">ROAS</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
            <tr className="hover:bg-zinc-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-bold text-zinc-900 dark:text-white/90 text-sm">Summer Drop '25</td>
              <td className="px-6 py-4 text-xs uppercase tracking-widest font-bold"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>Active</td>
              <td className="px-6 py-4 text-zinc-500 dark:text-white/60 text-xs uppercase tracking-widest">Instagram</td>
              <td className="px-6 py-4 text-zinc-900 dark:text-white/90 font-mono text-xs">$4,200</td>
              <td className="px-6 py-4 text-zinc-900 dark:text-white/90 font-mono text-xs">4.1x</td>
            </tr>
            <tr className="hover:bg-zinc-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-bold text-zinc-900 dark:text-white/90 text-sm">UGC Retargeting</td>
              <td className="px-6 py-4 text-xs uppercase tracking-widest font-bold"><span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2"></span>Active</td>
              <td className="px-6 py-4 text-zinc-500 dark:text-white/60 text-xs uppercase tracking-widest">TikTok</td>
              <td className="px-6 py-4 text-zinc-900 dark:text-white/90 font-mono text-xs">$2,150</td>
              <td className="px-6 py-4 text-zinc-900 dark:text-white/90 font-mono text-xs">2.8x</td>
            </tr>
            <tr className="hover:bg-zinc-50 dark:hover:bg-white/5">
              <td className="px-6 py-4 font-bold text-zinc-900 dark:text-white/90 text-sm">Brand Awareness Q1</td>
              <td className="px-6 py-4 text-xs uppercase tracking-widest font-bold"><span className="inline-block w-2 h-2 bg-zinc-400 rounded-full mr-2"></span>Paused</td>
              <td className="px-6 py-4 text-zinc-500 dark:text-white/60 text-xs uppercase tracking-widest">YouTube</td>
              <td className="px-6 py-4 text-zinc-900 dark:text-white/90 font-mono text-xs">$6,100</td>
              <td className="px-6 py-4 text-zinc-900 dark:text-white/90 font-mono text-xs">1.9x</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export const AnalyticsView: React.FC<DashboardViewProps> = ({ onCreateClick }) => {
  return (
    <div className="max-w-6xl mx-auto animate-fade-in-up pb-12">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-zinc-900 dark:text-white/90 mb-2">Analytics</h1>
        <p className="text-zinc-500 dark:text-white/60 text-sm">Deep dive into your video performance.</p>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl border border-zinc-200 dark:border-white/10 h-64 flex flex-col ">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-zinc-900 dark:text-white/90 text-sm uppercase tracking-widest">Viewer Retention</h3>
            <select className="bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest rounded-lg px-2 py-1 text-zinc-500 dark:text-white/60 outline-none"><option>Last 30 Days</option></select>
          </div>
          <div className="flex-1 flex items-end justify-between space-x-2">
            {[60, 55, 40, 35, 30, 25, 20, 18, 15, 12, 10, 8].map((h, i) => (
              <div key={i} className="bg-yellow-100 dark:bg-yellow-900/40 hover:bg-yellow-200 dark:hover:bg-yellow-900/60 w-full rounded-t-sm relative group" style={{height: `${h}%`}}>
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] px-1 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">{h}%</div>
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2 text-[10px] text-zinc-400 font-mono">
            <span>0s</span>
            <span>30s</span>
            <span>60s</span>
          </div>
        </div>
        <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl border border-zinc-200 dark:border-white/10 h-64 flex flex-col ">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-zinc-900 dark:text-white/90 text-sm uppercase tracking-widest">Demographics</h3>
            <select className="bg-zinc-50 dark:bg-white/5 border border-zinc-200 dark:border-white/10 text-[10px] font-bold uppercase tracking-widest rounded-lg px-2 py-1 text-zinc-500 dark:text-white/60 outline-none"><option>Age</option></select>
          </div>
          <div className="space-y-4">
            {[
              { label: "18-24", pct: "45%" },
              { label: "25-34", pct: "30%" },
              { label: "35-44", pct: "15%" },
              { label: "45+", pct: "10%" }
            ].map((d, i) => (
              <div key={i}>
                <div className="flex justify-between text-[10px] font-bold text-zinc-500 dark:text-white/60 mb-1 uppercase tracking-widest">
                  <span>{d.label}</span>
                  <span>{d.pct}</span>
                </div>
                <div className="w-full bg-zinc-100 dark:bg-white/5 rounded-full h-1">
                  <div className="bg-zinc-400 h-full rounded-full" style={{width: d.pct}}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-white dark:bg-[#141414] p-6 rounded-2xl border border-zinc-200 dark:border-white/10 ">
        <h3 className="font-bold text-zinc-900 dark:text-white/90 mb-4 text-sm uppercase tracking-widest">Top Performing Assets</h3>
        <div className="space-y-4">
          {[1,2,3].map(i => (
            <div key={i} className="flex items-center space-x-4 p-3 hover:bg-zinc-50 dark:hover:bg-white/10 rounded-xl transition-colors cursor-pointer border border-transparent hover:border-zinc-100 dark:hover:border-white/10">
              <div className="w-12 h-12 bg-zinc-100 dark:bg-white/5 rounded-lg overflow-hidden"><img src={`https://picsum.photos/seed/fashion${i}/100/100`} className="w-full h-full object-cover" referrerPolicy="no-referrer" /></div>
              <div className="flex-1">
                <p className="font-bold text-sm text-zinc-900 dark:text-white/90">Urban Hoodie Promo V{i}</p>
                <p className="text-[10px] text-zinc-500 dark:text-white/60 uppercase tracking-widest">Created 3 days ago</p>
              </div>
              <div className="text-right">
                <p className="font-bold text-sm text-zinc-900 dark:text-white/90 font-mono">{10 + i * 5}.2k Views</p>
                <p className="text-[10px] font-bold text-green-600 dark:text-green-400 uppercase tracking-widest">4.{i}% CTR</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
