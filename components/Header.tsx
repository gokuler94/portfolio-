import React from 'react';
import { motion } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import { NavLink } from '../types';
import { cn } from '../lib/utils';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 w-full border-b border-gray-200/40 bg-white/80 backdrop-blur-lg supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto flex h-16 max-w-5xl items-center justify-between px-4 md:px-6">
        <motion.a 
          href="#home" 
          onClick={(e) => handleScroll(e, '#home')}
          className="text-xl font-bold tracking-tight text-gray-900 hover:text-indigo-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Gokul E R
        </motion.a>
        <nav className="hidden md:flex items-center space-x-1">
          {NAV_LINKS.map((link: NavLink) => (
            <motion.a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)} 
              className={cn(
                "px-3 py-2 text-sm font-medium rounded-md transition-colors",
                activeSection === link.href.substring(1)
                  ? "text-indigo-600 font-semibold"
                  : "text-gray-600 hover:text-indigo-600"
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {link.name}
            </motion.a>
          ))}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;