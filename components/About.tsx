import React from 'react';
import { motion } from 'framer-motion';
import { FaUniversity, FaGraduationCap } from "react-icons/fa";

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
        {children}
    </h2>
);

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const About: React.FC = () => {
  return (
    <div>
      <SectionTitle>About Me</SectionTitle>
       <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-600 md:text-lg">
        A brief overview of my academic background, highlighting a strong foundation in AI, Machine Learning, and pre-university education.
      </p>
      <motion.div 
        className="mt-12 grid gap-8 md:grid-cols-2"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        transition={{ staggerChildren: 0.2 }}
      >
        <motion.div 
            className="rounded-xl border border-gray-200 bg-white/50 p-6 shadow-sm"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.2 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <FaUniversity className="h-6 w-6 text-indigo-600"/>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">B.E. in AI & Machine Learning</h3>
                <p className="mt-1 text-sm text-gray-600">New Horizon College of Engineering, Bengaluru (2026)</p>
                <p className="mt-2 text-sm font-medium text-indigo-600">CGPA: 9.35</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
            className="rounded-xl border border-gray-200 bg-white/50 p-6 shadow-sm"
            variants={cardVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
            transition={{ duration: 0.2 }}
        >
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100">
                <FaGraduationCap className="h-6 w-6 text-indigo-600"/>
            </div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">XII (Pre-University Education)</h3>
                <p className="mt-1 text-sm text-gray-600">NARAYANA JR COLLEGE (2021)</p>
                <p className="mt-2 text-sm font-medium text-indigo-600">Secured 93%</p>
            </div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
};

export default About;