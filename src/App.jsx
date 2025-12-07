/**
 * PROJECT: Neural Portfolio (zhnuksyh)
 * VERSION: 2.1 (Refactored)
 */

import React, { useState, useEffect, useRef } from 'react';
import GridBackground from './components/layout/GridBackground';
import Navbar from './components/layout/Navbar';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import CollabSection from './components/sections/CollabSection';
import ArticlesSection from './components/sections/ArticlesSection';
import ContactSection from './components/sections/ContactSection';

export default function App() {
    const [darkMode, setDarkMode] = useState(false);
    const scrollRef = useRef(null);

    // LOGIC: Handles the HTML class switching for Tailwind Dark Mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // LOGIC: Horizontal Scroll Handler for Project Carousel
    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    // LOGIC: Smooth Scroll with Offset for Fixed Header
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className={`min-h-screen transition-colors duration-500 selection:bg-gray-800 selection:text-white dark:selection:bg-white dark:selection:text-black font-sans ${darkMode ? 'bg-[#121212] text-[#d4d4d4]' : 'bg-[#faf9f6] text-[#2d2d2d]'}`}>

            <GridBackground />

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        body { font-family: 'Poppins', sans-serif; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

            {/* Main Orchestrator */}
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} scrollToSection={scrollToSection} />

            <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
                <HeroSection scrollToSection={scrollToSection} />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection scrollRef={scrollRef} scroll={scroll} />
                <SkillsSection />
                <CollabSection />
                <ArticlesSection />
                <ContactSection />

                {/* Footer (Simple enough to keep inline or extract to Footer.jsx) */}
                <footer className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <div className="mb-4 md:mb-0">
                        <p>© 2024 zhnuksyh. Kuala Lumpur.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Resume</a>
                        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Chess.com</a>
                        <a href="#" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Email</a>
                    </div>
                </footer>
            </main>
        </div>
    );
}