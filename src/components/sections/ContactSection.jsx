import React from 'react';
import { Send } from 'lucide-react';

const ContactSection = () => (
    <section id="contact" className="mb-20 grid md:grid-cols-2 gap-12 items-stretch">

        {/* Philosophy Side */}
        <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm p-8 rounded-xl border border-gray-200 dark:border-gray-800 flex flex-col justify-between">
            <div>
                <h3 className="font-semibold mb-4 text-lg">My Philosophy</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed italic mb-6">
                    "In chess, as in engineering, the most beautiful moves are often the most quiet ones.
                    I strive for code that is robust, scalable, and silent. Complexity should be managed, not flaunted."
                </p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-500">
                <div className="h-px bg-gray-300 w-8"></div>
                <span>GM of my own repo</span>
            </div>
        </div>

        {/* Contact Form */}
        <div>
            <h2 className="text-xl font-semibold mb-6">Get in Touch</h2>
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
                <button className="flex items-center gap-2 px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-md text-sm font-medium hover:opacity-90 transition-opacity">
                    Send Message <Send size={14} />
                </button>
            </form>
        </div>
    </section>
);

export default ContactSection;
