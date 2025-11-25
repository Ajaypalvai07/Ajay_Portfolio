export enum Role {
  USER = 'user',
  MODEL = 'model',
}

export interface ChatMessage {
  role: Role;
  text: string;
  timestamp: Date;
  isError?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: 'NLP' | 'CV' | 'Generative AI' | 'Automation';
  description: string;
  techStack: string[];
  repoUrl?: string;
  demoUrl?: string;
  aiInsights?: {
    child?: string;
    engineer?: string;
    ceo?: string;
  };
  stats: {
    accuracy?: string;
    latency?: string;
    users?: number;
  };
}

export interface SkillData {
  subject: string;
  A: number; // Competency
  fullMark: number;
}

export interface AIConfig {
  temperature: number;
  model: string;
}
