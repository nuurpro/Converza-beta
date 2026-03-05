import React from 'react';
import { MarketingMetrics } from '../types';

interface MarketingMetricsFormProps {
  metrics: MarketingMetrics;
  onChange: (metrics: MarketingMetrics) => void;
  disabled?: boolean;
  isCollapsed?: boolean;
}

const PLATFORMS = ['TikTok', 'Instagram', 'YouTube Shorts'] as const;

const MarketingMetricsForm: React.FC<MarketingMetricsFormProps> = ({ metrics, onChange, disabled, isCollapsed }) => {
  const handleChange = (field: keyof MarketingMetrics, value: string) => {
    onChange({ ...metrics, [field]: value });
  };

  const IconGlobe = () => <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" /></svg>;

  if (isCollapsed) {
    return (
      <div className="flex justify-center py-4 text-zinc-600">
        <IconGlobe />
      </div>
    );
  }

  return (
    <div className="space-y-4 px-4 py-6 border-t border-zinc-800/50">
      <div className="flex items-center space-x-2 mb-2">
        <div className="p-1.5 bg-yellow-400/10 rounded-lg text-yellow-400">
          <IconGlobe />
        </div>
        <h3 className="text-[10px] font-black uppercase tracking-widest text-zinc-500">My Page Data</h3>
      </div>

      <div className="space-y-3">
        {/* Platform Selection */}
        <div className="flex flex-col space-y-1.5">
          <div className="flex bg-zinc-900 p-0.5 rounded-lg border border-zinc-800">
            {PLATFORMS.map((p) => (
              <button
                key={p}
                type="button"
                disabled={disabled}
                onClick={() => handleChange('platform', p)}
                className={`flex-1 py-1.5 rounded-md text-[8px] font-black uppercase tracking-tight transition-all ${
                  metrics.platform === p ? 'bg-zinc-800 text-yellow-400 shadow-sm' : 'text-zinc-600 hover:text-zinc-400'
                }`}
              >
                {p === 'YouTube Shorts' ? 'Shorts' : p}
              </button>
            ))}
          </div>
        </div>

        {/* Followers & Views Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col space-y-1">
            <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Followers</label>
            <input
              type="text"
              disabled={disabled}
              value={metrics.followers}
              onChange={(e) => handleChange('followers', e.target.value)}
              placeholder="50k"
              className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] text-white focus:border-yellow-400/30 outline-none transition-all placeholder:text-zinc-800"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Avg. Views</label>
            <input
              type="text"
              disabled={disabled}
              value={metrics.avgViews}
              onChange={(e) => handleChange('avgViews', e.target.value)}
              placeholder="120k"
              className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] text-white focus:border-yellow-400/30 outline-none transition-all placeholder:text-zinc-800"
            />
          </div>
        </div>

        {/* Engagement & Retention Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="flex flex-col space-y-1">
            <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Engagement</label>
            <input
              type="text"
              disabled={disabled}
              value={metrics.engagementRate}
              onChange={(e) => handleChange('engagementRate', e.target.value)}
              placeholder="4.2%"
              className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] text-white focus:border-yellow-400/30 outline-none transition-all placeholder:text-zinc-800"
            />
          </div>
          <div className="flex flex-col space-y-1">
            <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Dropoff</label>
            <input
              type="text"
              disabled={disabled}
              value={metrics.retentionDropoff}
              onChange={(e) => handleChange('retentionDropoff', e.target.value)}
              placeholder="3s"
              className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] text-white focus:border-yellow-400/30 outline-none transition-all placeholder:text-zinc-800"
            />
          </div>
        </div>

        {/* Demographic */}
        <div className="flex flex-col space-y-1">
          <label className="text-[8px] font-black text-zinc-600 uppercase tracking-widest ml-1">Top Demographic</label>
          <input
            type="text"
            disabled={disabled}
            value={metrics.topDemographic}
            onChange={(e) => handleChange('topDemographic', e.target.value)}
            placeholder="Gen Z, USA"
            className="w-full px-2 py-2 bg-zinc-900 border border-zinc-800 rounded-lg text-[10px] text-white focus:border-yellow-400/30 outline-none transition-all placeholder:text-zinc-800"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketingMetricsForm;