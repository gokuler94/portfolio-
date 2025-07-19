
import { ReactNode } from 'react';

export interface NavLink {
  name: string;
  href: string;
}

export interface Skill {
  name: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  liveLink: string;
  summaryPoints: string[];
}

export interface Achievement {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ContactInfo {
    icon: ReactNode;
    title: string;
    value: string;
    href: string;
}
