import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { ChessKnight } from '../icons/CustomIcons';

const Navbar = ({ darkMode, setDarkMode, scrollToSection }) => (
    <nav className="fixed w-full top-0 z-50 bg-[#faf9f6]/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <button
                onClick={() => scrollToSection('home')}
                className="flex items-center gap-2 font-medium tracking-tight hover:opacity-80 transition-opacity"
            >
                <ChessKnight size={20} className="text-gray-600 dark:text-gray-400" />
                <span className="font-semibold tracking-tight">zhnuksyh</span>
            </button>

            <div className="flex items-center gap-6">
                {/* Desktop Navigation Links */}
                <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-500 dark:text-gray-400">
                    <button onClick={() => scrollToSection('about')} className="hover:text-black dark:hover:text-white transition-colors">About</button>
                    <button onClick={() => scrollToSection('experience')} className="hover:text-black dark:hover:text-white transition-colors">Experience</button>
                    <button onClick={() => scrollToSection('projects')} className="hover:text-black dark:hover:text-white transition-colors">Projects</button>
                    <button onClick={() => scrollToSection('skills')} className="hover:text-black dark:hover:text-white transition-colors">Skills</button>
                    <button onClick={() => scrollToSection('collab')} className="hover:text-black dark:hover:text-white transition-colors">Collab</button>

                    <button
                        onClick={() => scrollToSection('contact')}
                        className="px-4 py-1.5 bg-black dark:bg-white text-white dark:text-black rounded-full hover:opacity-80 transition-opacity"
                    >
                        Contact
                    </button>
                </div>

                <div className="w-px h-6 bg-gray-200 dark:bg-gray-700 hidden md:block"></div>

                {/* Dark Mode Toggle */}
                <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="relative w-12 h-6 bg-gray-200 dark:bg-gray-700 rounded-full transition-colors flex items-center px-1"
                >
                    <span className={`absolute left-1 transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}>
                        <div className="w-4 h-4 bg-white rounded-full shadow-sm flex items-center justify-center">
                            {darkMode ? <Moon size={10} className="text-gray-800" /> : <Sun size={10} className="text-yellow-500" />}
                        </div>
                    </span>
                </button>
            </div>
        </div>
    </nav>
);

export default Navbar;
