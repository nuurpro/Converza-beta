
declare global {
  interface AIStudio {
    hasSelectedApiKey: () => Promise<boolean>;
    openSelectKey: () => Promise<void>;
  }

  interface Window {
    FFMPEG?: {
      createFFmpeg: (options: any) => any;
    };
    aistudio?: AIStudio;
  }
}

export type WorkflowStage = 'home' | 'wizard' | 'processing' | 'result';
export type DashboardView = 'explore' | 'products' | 'projects' | 'chatbot' | 'calendar' | 'image-studio' | 'video-studio' | 'campaigns' | 'analytics' | 'settings';
export type WizardStep = 1 | 2 | 3;
export type ProductionStatus = 'idle' | 'selecting-agent' | 'planning' | 'review' | 'generating' | 'stitching' | 'finished' | 'error';
export type Theme = 'light' | 'dark';

export interface CampaignContext {
  collectionName: string;
  audience: string;
  vibe: string;
  demographic: string;
  details: string;
  selectedAvatarId: string | null;
  selectedScriptId: string | null;
}

export interface Avatar {
  id: string;
  name: string;
  age: number;
  gender: string;
  imageUrl: string;
}

export interface ScriptHook {
  id: string;
  text: string;
  type: 'Question' | 'Statement' | 'Hook';
}

export interface GeneratedConcept {
  id: string;
  imageUrl: string;
}

export interface AppState {
  stage: WorkflowStage;
  wizardStep: WizardStep;
  isProcessing: boolean;
  error: string | null;
}

export interface Scene {
  sceneNumber: number;
  script: string;
  status: 'pending' | 'generating' | 'completed' | 'failed';
  errorMessage?: string;
}

export interface Plan {
  scenes: Scene[];
}

export interface MarketingMetrics {
  platform: 'TikTok' | 'Instagram' | 'YouTube Shorts';
  followers: string;
  avgViews: string;
  engagementRate: string;
  retentionDropoff: string;
  topDemographic: string;
}
