
export const VEO_MODEL = 'veo-3.1-fast-generate-preview';
export const IMAGE_MODEL = 'gemini-2.5-flash-image';

export const VIDEO_MODELS = [
  { id: 'veo-3.1-fast-generate-preview', name: 'Veo Fast', tag: 'Best Price' },
  { id: 'veo-3.1-generate-preview', name: 'Veo Pro', tag: 'Expensive' },
  { id: 'veo-2-preview', name: 'Veo 2.0', tag: 'Cheap' }
];

export const VIBES = [
  { id: 'urban', label: 'Urban', name: 'Urban', description: 'Gritty, authentic street style.' },
  { id: 'luxury', label: 'Luxury', name: 'Luxury', description: 'Sophisticated high-end elegance.' },
  { id: 'studio', label: 'Studio', name: 'Studio', description: 'Clean, controlled professional lighting.' },
  { id: 'nature', label: 'Nature', name: 'Nature', description: 'Organic, outdoor, fresh.' },
  { id: 'cyberpunk', label: 'Cyberpunk', name: 'Cyberpunk', description: 'Neon, futuristic, tech-heavy.' }
];

export const DEMOGRAPHICS = [
  { id: 'female', label: 'Female' },
  { id: 'male', label: 'Male' },
  { id: 'diverse', label: 'Diverse' },
  { id: 'gen-z', label: 'Gen Z' }
];

export const AVATARS = [
  { id: 'lana', name: 'Lana', age: 23, gender: 'Female', imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=300&h=500' },
  { id: 'marcus', name: 'Marcus', age: 28, gender: 'Male', imageUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=300&h=500' },
  { id: 'sophia', name: 'Sophia', age: 21, gender: 'Female', imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300&h=500' },
  { id: 'alex', name: 'Alex', age: 25, gender: 'Male', imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=500' }
];

export const SCRIPT_HOOKS = [
  { id: 'h1', type: 'Hook', text: "Stop scrolling! You won't believe what I just found." },
  { id: 'h2', type: 'Question', text: "Tired of wasting money on products that don't work?" },
  { id: 'h3', type: 'Statement', text: "This is the only thing you need to upgrade your style this summer." },
  { id: 'h4', type: 'Hook', text: "I tried this for 7 days and the results were insane." }
];

export const LOADING_MESSAGES = [
  "Analyzing product geometry...",
  "Synthesizing photorealistic models...",
  "Applying lighting and texture...",
  "Rendering final concepts..."
];

export const VIDEO_LOADING_MESSAGES = [
  "Initializing physics engine...",
  "Generating motion vectors...",
  "Stitching frames...",
  "Polishing final render..."
];
