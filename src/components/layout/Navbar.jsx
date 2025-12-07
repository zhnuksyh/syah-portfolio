import React from 'react';
import { Moon, Sun } from 'lucide-react';
import { ChessKnight } from '../icons/CustomIcons';

const Navbar = ({ darkMode, setDarkMode, scrollToSection }) => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <nav className="fixed w-full top-0 z-50 bg-[#faf9f6]/80 dark:bg-[#121212]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <button
                    onClick={() => scrollToSection('home')}
                    className="flex items-center gap-2 font-medium tracking-tight hover:opacity-80 transition-opacity"
                >
                    <ChessKnight size={20} className="text-gray-600 dark:text-gray-400" />
                    <span className="font-semibold tracking-tight">Zahin Ukasyah</span>
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

                    {/* Dark Mode Toggle & Mobile Menu Button */}
                    <div className="flex items-center gap-4">
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

                        {/* Mobile Hamburger */}
                        <button
                            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            <div className="space-y-1.5">
                                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                                <span className={`block w-6 h-0.5 bg-current transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`block w-6 h-0.5 bg-current transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-[#faf9f6] dark:bg-[#121212] border-b border-gray-100 dark:border-gray-800 animate-slide-down shadow-lg">
                    <div className="flex flex-col p-6 gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                        <button onClick={() => { scrollToSection('about'); setIsMenuOpen(false); }} className="text-left hover:text-black dark:hover:text-white">About</button>
                        <button onClick={() => { scrollToSection('experience'); setIsMenuOpen(false); }} className="text-left hover:text-black dark:hover:text-white">Experience</button>
                        <button onClick={() => { scrollToSection('projects'); setIsMenuOpen(false); }} className="text-left hover:text-black dark:hover:text-white">Projects</button>
                        <button onClick={() => { scrollToSection('skills'); setIsMenuOpen(false); }} className="text-left hover:text-black dark:hover:text-white">Skills</button>
                        <button onClick={() => { scrollToSection('collab'); setIsMenuOpen(false); }} className="text-left hover:text-black dark:hover:text-white">Collab</button>
                        <button onClick={() => { scrollToSection('contact'); setIsMenuOpen(false); }} className="text-left hover:text-black dark:hover:text-white font-semibold">Contact</button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
