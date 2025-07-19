import React from 'react';
import { motion } from 'framer-motion';
import { SKILLS_DATA } from '../constants';
import { SkillCategory as SkillCategoryType } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
        {children}
    </h2>
);

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const skillBadgeVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const SkillCategory: React.FC<{ category: SkillCategoryType }> = ({ category }) => (
  <motion.div 
    className="rounded-xl border border-gray-200 bg-white/50 p-6 shadow-sm"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.4 }}
  >
    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
    <motion.div 
      className="mt-4 flex flex-wrap gap-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      {category.skills.map((skill) => (
        <motion.span 
          key={skill.name} 
          className="rounded-full bg-indigo-100 px-3 py-1 text-sm font-medium text-indigo-800"
          variants={skillBadgeVariants}
          whileHover={{ scale: 1.1 }}
        >
          {skill.name}
        </motion.span>
      ))}
    </motion.div>
  </motion.div>
);

const Skills: React.FC = () => {
  return (
    <div>
      <SectionTitle>Technical Skills</SectionTitle>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-600 md:text-lg">
        A collection of technologies and tools I'm proficient with, ranging from programming languages to AI frameworks.
      </p>
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {SKILLS_DATA.map((category) => (
          <SkillCategory key={category.title} category={category} />
        ))}
      </div>
    </div>
  );
};

export default Skills;