export type Page = 'home' | 'vault' | 'contact';

export interface Project {
  id: string;
  title: string;
  description: string;
  threatLevel: 'Low' | 'Medium' | 'High' | 'Critical';
  tags: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  verified: boolean;
}
