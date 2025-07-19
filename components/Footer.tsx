import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      className="border-t border-gray-200"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-8 sm:flex-row max-w-5xl px-4 md:px-6">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Gokul E R. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <motion.a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-gray-900 transition-colors" whileHover={{ scale: 1.2 }}>
            <FaGithub className="h-6 w-6" />
          </motion.a>
          <motion.a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-gray-900 transition-colors" whileHover={{ scale: 1.2 }}>
            <FaLinkedin className="h-6 w-6" />
          </motion.a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;