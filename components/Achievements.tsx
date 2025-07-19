import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS_DATA } from '../constants';
import { Achievement } from '../types';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
        {children}
    </h2>
);

const cardVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
};

const AchievementCard: React.FC<{ achievement: Achievement }> = ({ achievement }) => (
    <motion.div 
        className="rounded-xl border border-gray-200 bg-white/50 p-6 shadow-sm"
        variants={cardVariants}
        whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
        transition={{ duration: 0.3 }}
    >
        <div className="flex items-center gap-4">
            <motion.div 
              className="flex-shrink-0"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
                {achievement.icon}
            </motion.div>
            <div>
                <h3 className="text-lg font-semibold text-gray-900">{achievement.title}</h3>
                <p className="mt-1 text-sm text-gray-600">{achievement.description}</p>
            </div>
        </div>
    </motion.div>
);

const Achievements: React.FC = () => {
    return (
        <div>
            <SectionTitle>Achievements</SectionTitle>
            <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-600 md:text-lg">
                Recognitions and accomplishments that demonstrate my skills in competitive and innovative environments.
            </p>
            <motion.div 
                className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.3, delayChildren: 0.2 }}
            >
                {ACHIEVEMENTS_DATA.map((item, index) => (
                    <AchievementCard key={index} achievement={item} />
                ))}
            </motion.div>
        </div>
    );
};

export default Achievements;