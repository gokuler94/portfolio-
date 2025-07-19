import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackgroundBeamsWithCollision } from './components/backgrounds/BackgroundBeams';

const Section: React.FC<{ children: React.ReactNode; id: string; }> = ({ children, id }) => (
    <motion.section
      id={id}
      className="py-16 md:py-24"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.section>
  );


const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const sections = [
    { id: 'about', component: <About /> },
    { id: 'skills', component: <Skills /> },
    { id: 'projects', component: <Projects /> },
    { id: 'achievements', component: <Achievements /> },
    { id: 'contact', component: <Contact /> },
  ];

  return (
    <div className="min-h-screen text-gray-800 font-sans antialiased selection:bg-indigo-500/20">
      <Header activeSection={activeSection} />
      
      <motion.div onViewportEnter={() => setActiveSection('home')} viewport={{ amount: 0.5 }}>
        <BackgroundBeamsWithCollision>
          <HeroSection id="home" />
        </BackgroundBeamsWithCollision>
      </motion.div>
      
      <main className="container mx-auto max-w-5xl px-4 md:px-6">
        {sections.map(({id, component}) => (
          <motion.div key={id} onViewportEnter={() => setActiveSection(id)} viewport={{ amount: 0.5, margin: "-40% 0px -40% 0px" }}>
            <Section id={id}>
              {component}
            </Section>
          </motion.div>
        ))}
      </main>
      
      <Footer />
    </div>
  );
};

export default App;