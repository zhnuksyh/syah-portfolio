import React from 'react';
import { Send, MapPin, Phone, Mail, MessageSquare } from 'lucide-react';
import SectionWrapper from '../ui/SectionWrapper';

const ContactSection = () => (
    <section id="contact" className="mb-20">
        <SectionWrapper className="grid md:grid-cols-2 gap-12 items-stretch">

            {/* Philosophy Side */}
            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
                <div>
                    <h3 className="font-semibold mb-4 text-lg">Contact Information</h3>
                    <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400">
                        <div className="flex items-center gap-3">
                            <MapPin size={18} className="text-gray-400" />
                            <span>Maluri, Kuala Lumpur</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-gray-400" />
                            <a href="mailto:zhnuksyh03@gmail.com" className="hover:text-black dark:hover:text-white transition-colors">zhnuksyh03@gmail.com</a>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic mb-6">
                        "In chess, as in engineering, the most beautiful moves are often the most quiet ones.
                        I strive for code that is elegant. Complexity should be managed, not flaunted."
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                        <div className="h-px bg-gray-300 w-8"></div>
                        <span>Zahin Ukasyah</span>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div>
                <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                    <MessageSquare size={20} className="text-gray-400" />
                    Get in Touch
                </h2>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm"
                        />
                    </div>
                    <textarea
                        rows="4"
                        placeholder="Your message..."
                        className="w-full p-3 bg-white dark:bg-[#1a1a1a] border border-gray-200 dark:border-gray-800 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-400 text-sm resize-none"
                    ></textarea>
                    <div className="flex gap-4">
                        <a href="mailto:zhnuksyh03@gmail.com?subject=Portfolio Inquiry" className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                            Send Message <Send size={14} />
                        </a>
                        <a href="/syah-portfolio/Zahin Ukasyah CV 2025-1.pdf" download className="flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-sm font-medium hover:bg-gray-50 dark:hover:bg-[#202020] transition-colors">
                            Download My CV
                        </a>
                    </div>
                </form>
            </div>
        </SectionWrapper>
    </section>
);

export default ContactSection;
