/**
 * PROJECT: Neural Portfolio (Zahin Ukasyah)
 * VERSION: 3.0 (Routing & CMS Features)
 */

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import GridBackground from './components/layout/GridBackground';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import ArticleDetail from './pages/ArticleDetail';
import AllProjects from './pages/AllProjects';
import AllArticles from './pages/AllArticles';
import Admin from './pages/Admin';
import ScrollToTop from './components/ui/ScrollToTop';

// Wrapper to handle scroll reset and dark mode inheritance
const AppContent = () => {
    const [darkMode, setDarkMode] = useState(true);
    const location = useLocation();

    // LOGIC: Handles the HTML class switching for Tailwind Dark Mode
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    // LOGIC: Smooth Scroll with Offset for Fixed Header (extracted for reuse)
    const scrollToSection = (id) => {
        // If not on home page, we can't scroll to section immediately. 
        // In a real app we might redirect to home then scroll, but for now we pass this prop only to Home.
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

            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} setDarkMode={setDarkMode} scrollToSection={scrollToSection} />} />
                <Route path="/project/:id" element={<ProjectDetail />} />
                <Route path="/projects" element={<AllProjects />} />
                <Route path="/article/:id" element={<ArticleDetail />} />
                <Route path="/articles" element={<AllArticles />} />
                <Route path="/admin" element={<Admin />} />
            </Routes>
            <ScrollToTop />
        </div>
    );
};

export default function App() {
    return (
        <Router basename="/syah-portfolio">
            <AppContent />
        </Router>
    );
}