import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO_DATA } from '../constants';

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <h2 className="text-3xl font-bold tracking-tight text-center text-gray-900 sm:text-4xl">
        {children}
    </h2>
);

const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
}

const Contact: React.FC = () => {
  return (
    <div>
      <SectionTitle>Get In Touch</SectionTitle>
      <p className="mx-auto mt-4 max-w-3xl text-center text-base text-gray-600 md:text-lg">
        I'm currently open to new opportunities and collaborations. Feel free to reach out.
      </p>
      <motion.div 
        className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        transition={{ staggerChildren: 0.2 }}
      >
        {CONTACT_INFO_DATA.map((item) => (
            <motion.a 
              key={item.title} 
              href={item.href} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="group block rounded-xl border border-gray-200 bg-white/50 p-6 shadow-sm"
              variants={cardVariants}
              whileHover={{ y: -5, boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" }}
              transition={{ duration: 0.2 }}
            >
                <div className="flex flex-col items-center text-center">
                    <motion.div 
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-100 transition-colors group-hover:bg-indigo-200"
                        whileHover={{ scale: 1.15 }}
                    >
                       {item.icon}
                    </motion.div>
                    <h3 className="mt-4 text-lg font-medium text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm text-gray-600 group-hover:text-indigo-600 transition-colors">{item.value}</p>
                </div>
            </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Contact;