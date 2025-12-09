import React, { useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import SkillsSection from '../components/sections/SkillsSection';
import CollabSection from '../components/sections/CollabSection';
import ArticlesSection from '../components/sections/ArticlesSection';
import ContactSection from '../components/sections/ContactSection';

const Home = ({ darkMode, setDarkMode, scrollToSection }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300;
            scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <>
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} scrollToSection={scrollToSection} />
            <main className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-20">
                <HeroSection scrollToSection={scrollToSection} />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection scrollRef={scrollRef} scroll={scroll} />
                <SkillsSection />
                <ArticlesSection />
                <CollabSection />
                <ContactSection />

                {/* Footer */}
                <footer className="border-t border-gray-200 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
                    <div className="mb-4 md:mb-0">
                        <p>© 2025 Zahin Ukasyah. Kuala Lumpur.</p>
                    </div>
                    <div className="flex gap-6">
                        <a href="/syah-portfolio/Zahin Ukasyah CV 2025-1.pdf" download className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">CV</a>
                        <a href="https://linkedin.com/in/zhnuksyh" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">LinkedIn</a>
                        <a href="mailto:zhnuksyh03@gmail.com" className="hover:text-gray-600 dark:hover:text-gray-200 transition-colors">Email</a>
                    </div>
                </footer>
            </main>
        </>
    );
};

export default Home;
