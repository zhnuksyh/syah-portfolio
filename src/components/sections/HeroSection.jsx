import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import Badge from '../ui/Badge';
import { XIcon, ChessPawn } from '../icons/CustomIcons';
import { COLLABORATION_STATUS } from '../../data/constants';
import profileImage from '../../assets/profile.jpg';

const HeroSection = ({ scrollToSection }) => (
    <section id="home" className="mb-32 flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
        >
            {/* Dynamic Status Badge */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <Badge color={COLLABORATION_STATUS.includes("Open") ? "green" : "gray"}>
                    {COLLABORATION_STATUS}
                </Badge>
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-4xl sm:text-5xl font-semibold leading-tight mb-6 mt-4"
            >
                I'm Zahin Ukasyah
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-lg leading-relaxed max-w-md text-gray-500 dark:text-gray-400 mb-8"
            >
                {/* Software Engineering student at UTM. Specializing in <strong className="font-medium text-gray-900 dark:text-gray-100">AI and NLP</strong>, building scalable full-stack applications. */}
                AI/ML Engineer at MIMOS and former ML Research Assistant at UTM, a Maybank Scholar, a former member of the Student Representative Council, and a former President of the Software Engineering Association UTM.
            </motion.p>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
            >
                <button onClick={() => scrollToSection('contact')} className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-lg font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg shadow-black/5 dark:shadow-white/5">
                    Contact Me <ArrowRight size={16} />
                </button>

                <div className="flex gap-2">
                    {/* Helper function to generate standardized social button classes */}
                    {[
                        { Icon: Github, color: "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white", href: "https://github.com/zhnuksyh" },
                        { Icon: Linkedin, color: "text-gray-600 dark:text-gray-400 hover:text-blue-500", href: "https://linkedin.com/in/zhnuksyh" },
                        { Icon: Mail, color: "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white", href: "mailto:zhnuksyh03@gmail.com" },
                    ].map(({ Icon, color, href }, i) => (
                        <a
                            key={i}
                            href={href}
                            target={href.startsWith('http') ? "_blank" : "_self"}
                            rel={href.startsWith('http') ? "noopener noreferrer" : ""}
                            className={`flex items-center justify-center w-11 h-11 transition-colors bg-white dark:bg-[#202020] border border-gray-100 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 rounded-lg ${color}`}
                        >
                            <Icon size={20} className={i === 3 ? "fill-current" : ""} />
                        </a>
                    ))}
                </div>
            </motion.div>
        </motion.div>

        {/* Profile Picture with Double-Offset Frame Effect */}
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
            className="relative shrink-0 group"
        >
            <div className="absolute -inset-4 border border-gray-200 dark:border-gray-700 rounded-2xl z-0 pointer-events-none group-hover:scale-105 transition-transform duration-500"></div>
            <div className="absolute -inset-4 rotate-3 border border-gray-100 dark:border-gray-800 rounded-2xl z-0 pointer-events-none group-hover:rotate-0 transition-transform duration-500"></div>

            <div className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-xl bg-gray-200 dark:bg-gray-800 overflow-hidden shadow-2xl">
                {/* Placeholder for user profile image. User should replace this. */}
                <img src={profileImage} alt="Zahin Ukasyah" className="w-full h-full object-cover" onError={(e) => e.target.src = 'https://api.dicebear.com/7.x/initials/svg?seed=ZU'} />
            </div>
        </motion.div>
    </section>
);

export default HeroSection;
