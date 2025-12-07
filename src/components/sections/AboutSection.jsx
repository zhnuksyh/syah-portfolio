import React from 'react';
import { Coffee } from 'lucide-react';
import { ChessKnight } from '../icons/CustomIcons';

const AboutSection = () => (
    <section id="about" className="mb-32">
        <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">

            {/* Background Icon Watermark */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <ChessKnight size={120} className="text-black dark:text-white" />
            </div>

            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Coffee size={22} className="text-gray-500" />
                The Backstory
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-gray-600 dark:text-gray-300 leading-relaxed">
                <div className="space-y-4">
                    <p>
                        My journey began not with code, but with a fascination for patterns. As a kid, I was obsessed with chess—how a finite set of rules could generate infinite complexities.
                    </p>
                    <p>
                        When I discovered programming, it felt like discovering a new board, one where I could write the rules myself. I started with simple scripts to automate my daily tasks, but soon fell down the rabbit hole of data structures and algorithms.
                    </p>
                </div>
                <div className="space-y-4">
                    <p>
                        The pivot to AI happened during my university years. I realized that traditional coding was about telling a computer <i>what</i> to do, but Machine Learning was about teaching it <i>how</i> to learn.
                    </p>
                    <p>
                        Today, I build systems that find signal in the noise. I believe that the best AI isn't just accurate—it's interpretable, efficient, and seamlessly integrated into human workflows.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
