import React from 'react';
import { FaTrophy, FaCode, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Project, Achievement, SkillCategory, NavLink, ContactInfo } from './types';

export const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [{ name: 'Java' }, { name: 'JavaScript' }, { name: 'Python' }],
  },
  {
    title: 'Frameworks & Tools',
    skills: [{ name: 'React' }, { name: 'Next.js' }, { name: 'Vite' }, { name: 'Gemini AI' }, { name: 'Google Places API' }, { name: 'Stable Baselines3' }, { name: 'Drizzle ORM' }],
  },
  {
    title: 'Data Science & Machine Learning',
    skills: [{ name: 'Data Science' }, { name: 'Machine Learning' }, { name: 'Artificial Intelligence' }],
  },
  {
    title: 'Databases',
    skills: [{ name: 'Firebase' }, { name: 'PostgreSQL' }, { name: 'NeonDB' }, { name: 'DBMS' }],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    title: 'Coursedeck',
    description: 'A full-stack application for creating personalized career roadmaps leveraging Gemini AI capabilities.',
    techStack: ['React', 'Vite', 'Gemini AI', 'Clerk', 'Tailwind CSS'],
    liveLink: 'https://coursedeck.vercel.app/',
    summaryPoints: [
      'Leverages Gemini AI for personalized content.',
      'Secure user authentication with Clerk.',
      'Interactive dashboards with React & Tailwind UI.',
    ],
  },
  {
    title: 'AI Trip Planner',
    description: "A React-based AI trip planner for customized travel experiences using Google's AI.",
    techStack: ['React', 'Firebase', 'Google Places API', "Google's AI (Gemini)"],
    liveLink: 'https://ai-trip-planner-tau-silk.vercel.app/',
    summaryPoints: [
      'Advanced AI algorithms for itinerary creation.',
      'Robust data storage with Firebase.',
      'Customized travel experiences based on user input.',
    ],
  },
  {
    title: 'VirtuSelect - Online Interview Platform',
    description: 'An innovative online interview platform to enhance interview process efficiency in a robust virtual environment.',
    techStack: ['Next.js', 'NeonDB', 'Drizzle ORM', 'PostgreSQL'],
    liveLink: 'https://virtu-select.vercel.app/',
    summaryPoints: [
      'Robust virtual environment for interviews.',
      'Optimized database interactions with Drizzle ORM.',
      'Scalable and reliable data storage solutions.',
    ],
  },
];

export const ACHIEVEMENTS_DATA: Achievement[] = [
  {
    icon: <FaTrophy className="h-8 w-8 text-amber-400" />,
    title: 'Smart India Hackathon (SIH)',
    description: 'Excelled by employing advanced algorithmic thinking and teamwork skills, highlighting strong innovation capabilities.',
  },
  {
    icon: <FaCode className="h-8 w-8 text-cyan-400" />,
    title: 'CyberCode SR 2024',
    description: 'Achieved 41st place, demonstrating exceptional problem-solving skills and proficiency in data structures and algorithms.',
  },
];

export const CONTACT_INFO_DATA: ContactInfo[] = [
    {
        icon: <FaEnvelope className="h-6 w-6 text-indigo-600" />,
        title: "Email",
        value: "gokuler8197@gmail.com",
        href: "mailto:gokuler8197@gmail.com"
    },
    {
        icon: <FaPhone className="h-6 w-6 text-indigo-600" />,
        title: "Phone",
        value: "+91 8197812736",
        href: "tel:+918197812736"
    },
    {
        icon: <FaMapMarkerAlt className="h-6 w-6 text-indigo-600" />,
        title: "Location",
        value: "Bengaluru, Karnataka",
        href: "https://www.google.com/maps/search/?api=1&query=Bengaluru,Karnataka"
    }
];