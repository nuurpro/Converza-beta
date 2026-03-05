import React, { useState, useRef, useEffect } from 'react';
import { VIBES } from '../constants';

interface VibeSelectorProps {
  selectedVibe: typeof VIBES[0];
  onSelect: (vibe: typeof VIBES[0]) => void;
  disabled?: boolean;
}

const VibeSelector: React.FC<VibeSelectorProps> = ({ selectedVibe, onSelect, disabled }) => {
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
        <div className="flex flex-col items-start text-left">
          <span className="text-sm font-bold text-white">{selectedVibe.name}</span>
          <span className="text-[10px] text-zinc-500 uppercase font-black tracking-widest mt-0.5 truncate max-w-[200px]">
            {selectedVibe.description}
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
          <div className="p-2 space-y-1 max-h-[300px] overflow-y-auto custom-scrollbar">
            {VIBES.map((v) => (
              <button
                key={v.id}
                onClick={() => {
                  onSelect(v);
                  setIsOpen(false);
                }}
                className={`w-full flex flex-col items-start px-4 py-3 rounded-xl transition-all ${
                  selectedVibe.id === v.id
                    ? 'bg-zinc-800/50 text-white'
                    : 'text-zinc-400 hover:bg-zinc-800 hover:text-white'
                }`}
              >
                <span className="text-sm font-bold">{v.name}</span>
                <span className="text-[10px] opacity-70 mt-0.5">{v.description}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default VibeSelector;