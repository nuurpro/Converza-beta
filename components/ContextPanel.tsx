
import React from 'react';
import { CampaignContext } from '../types';
import { VIBES, DEMOGRAPHICS } from '../constants';

interface ContextPanelProps {
  context: CampaignContext;
  onChange: (ctx: CampaignContext) => void;
  disabled: boolean;
  className?: string;
  renderAction?: React.ReactNode;
}

const ContextPanel: React.FC<ContextPanelProps> = ({ context, onChange, disabled, className = "", renderAction }) => {
  const handleChange = (key: keyof CampaignContext, value: string) => {
    onChange({ ...context, [key]: value });
  };

  return (
    <div className={`flex flex-col h-full overflow-y-auto custom-scrollbar p-6 ${className}`}>
      <div className="space-y-8 flex-1">
        {/* Campaign Name */}
        <div className="space-y-3">
          <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Collection Name</label>
          <input 
            type="text" 
            value={context.collectionName}
            onChange={(e) => handleChange('collectionName', e.target.value)}
            placeholder="e.g. Summer Drop '25"
            disabled={disabled}
            className="w-full bg-zinc-900 border border-zinc-800 rounded-xl p-4 text-sm text-white placeholder-zinc-600 focus:border-yellow-400/50 focus:outline-none focus:ring-1 focus:ring-yellow-400/20 transition-all font-medium"
          />
        </div>

        {/* Vibe Selection */}
        <div className="space-y-3">
          <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Vibe</label>
          <div className="flex flex-wrap gap-2">
            {VIBES.map((v) => (
              <button
                key={v.id}
                onClick={() => handleChange('vibe', v.label)}
                disabled={disabled}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all transform active:scale-95 ${
                  context.vibe === v.label 
                    ? 'bg-yellow-400 text-black border border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
                    : 'bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demographic Selection */}
        <div className="space-y-3">
          <label className="text-xs font-black text-zinc-500 uppercase tracking-widest">Model</label>
          <div className="flex flex-wrap gap-2">
            {DEMOGRAPHICS.map((d) => (
              <button
                key={d.id}
                onClick={() => handleChange('demographic', d.label)}
                disabled={disabled}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all transform active:scale-95 ${
                  context.demographic === d.label 
                    ? 'bg-yellow-400 text-black border border-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.3)]' 
                    : 'bg-transparent text-zinc-400 border border-zinc-800 hover:border-zinc-600 hover:text-zinc-200'
                }`}
              >
                {d.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      
      {/* Desktop Action Area (rendered via prop to allow flexibility) */}
      {renderAction && (
        <div className="mt-8 pt-6 border-t border-zinc-800">
          {renderAction}
        </div>
      )}
    </div>
  );
};

export default ContextPanel;
