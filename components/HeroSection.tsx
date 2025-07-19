"use client";
import React from 'react';
import { motion } from 'framer-motion';
import { FaFileDownload } from 'react-icons/fa';
import { Spotlight } from './ui/spotlight';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

const ShimmerButton = ({ 
    href, 
    children, 
    download,
    onClick,
}: { 
    href: string; 
    children: React.ReactNode; 
    download?: boolean | string;
    onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}) => {
    return (
        <a
            href={href}
            download={download || undefined}
            onClick={onClick}
            className="inline-flex h-12 animate-[shimmer_3s_infinite] items-center justify-center rounded-md border border-slate-300 bg-[linear-gradient(110deg,#f5f5f5,45%,#e5e5e5,55%,#f5f5f5)] bg-[length:200%_100%] px-6 font-medium text-slate-600 transition-colors hover:scale-105 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
            {children}
        </a>
    );
};

const HeroSection: React.FC<{ id: string; }> = ({ id }) => {

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
    <section
      id={id}
      className="group relative flex h-full w-full flex-col items-center justify-center overflow-hidden antialiased"
    >
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill={"#1f2937"}
      />
      <motion.div 
        className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 text-center md:pt-0"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1 
            className="bg-opacity-50 bg-clip-text text-4xl font-bold text-transparent bg-gradient-to-b from-neutral-800 to-neutral-500 md:text-7xl"
            variants={itemVariants}
        >
          Gokul E R
        </motion.h1>

        <motion.p 
            className="mx-auto mt-4 max-w-lg font-normal text-base text-neutral-600"
            variants={itemVariants}
        >
          Full Stack Developer specializing in AI and Machine Learning. Passionate about building intelligent, user-friendly web applications.
        </motion.p>
        
        <motion.div variants={itemVariants} className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <ShimmerButton href="/resume.pdf" download="Gokul_ER_Resume.pdf">
                <FaFileDownload className="mr-2 h-4 w-4" /> Download Resume
            </ShimmerButton>
            <ShimmerButton href="#projects" onClick={(e) => handleScroll(e, '#projects')}>
                View Projects
            </ShimmerButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;