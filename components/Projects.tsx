import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS_DATA } from '../constants';
import { Project } from '../types';
import { FiExternalLink } from 'react-icons/fi';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
        {children}
    </h2>
);

const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
};

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => (
    <motion.div 
        className="flex h-full flex-col rounded-xl border border-gray-200 bg-white/50 p-6 shadow-sm"
        variants={cardVariants}
        whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", borderColor: 'rgba(99, 102, 241, 0.5)' }}
        transition={{ duration: 0.3 }}
    >
        <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
        <p className="mt-2 text-sm text-gray-600 flex-grow">{project.description}</p>
        
        <div className="my-4">
            <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                {project.summaryPoints.map((point, index) => <li key={index}>{point}</li>)}
            </ul>
        </div>
        
        <div className="mt-auto pt-4">
            <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map(tech => (
                    <span key={tech} className="rounded bg-gray-200 px-2 py-1 text-xs font-semibold text-gray-700">
                        {tech}
                    </span>
                ))}
            </div>
            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-medium text-indigo-600 hover:underline">
                Live Link <FiExternalLink className="ml-1 h-4 w-4" />
            </a>
        </div>
    </motion.div>
);

const Projects: React.FC = () => {
  return (
    <div>
      <SectionTitle>Projects</SectionTitle>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-600 md:text-lg">
        Here are some of the projects I've worked on, showcasing my skills in building real-world applications.
      </p>
      <motion.div 
        className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.title} project={project} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;