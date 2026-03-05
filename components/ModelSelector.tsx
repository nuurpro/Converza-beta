import React, { useState, useRef, useEffect } from 'react';
import { VIDEO_MODELS } from '../constants';

interface ModelSelectorProps {
  selectedModel: typeof VIDEO_MODELS[0];
  onSelect: (model: typeof VIDEO_MODELS[0]) => void;
  disabled?: boolean;
}

const ModelSelector: React.FC<ModelSelectorProps> = ({ selectedModel, onSelect, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getTagStyles = (tag: string) => {
    switch (tag) {
      case 'Expensive':
        return 'bg-red-500/10 text-red-400 border-red-500/20';
      case 'Best Price':
        return 'bg-amber-500/10 text-amber-400 border-amber-500/20';
      case 'Cheap':
        return 'bg-green-500/10 text-green-400 border-green-500/20';
      default:
        return 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20';
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        disabled={disabled}
        className={`w-full flex items-center justify-between px-5 py-4 bg-[#18181b] border rounded-2xl transition-all ${
          isOpen ? 'border-yellow-400/50 ring-2 ring-yellow-400/10' : 'border-zinc-800 hover:border-zinc-700'
        } ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
      >
        <div className="flex items-center space-x-3">
          <span className="text-sm font-bold text-white">{selectedModel.name}</span>
          <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${getTagStyles(selectedModel.tag)}`}>
            {selectedModel.tag}
          </span>
        </div>
        <svg
          className={`w-5 h-5 text-zinc-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute z-50 w-full mt-2 bg-[#121214] border border-zinc-800 rounded-2xl shadow-2xl overflow-hidden animate-fade-in-up origin-top">
          <div className="p-2 space-y-1">
            {VIDEO_MODELS.map((model) => (
              <button
                key={model.id}
                onClick={() => {
                  onSelect(model);
                  setIsOpen(false);
                }}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  selectedModel.id === model.id
                    ? 'bg-zinc-800/50 text-white'
                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                <span className="text-sm font-bold">{model.name}</span>
                <span className={`px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-widest border ${getTagStyles(model.tag)}`}>
                  {model.tag}
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ModelSelector;