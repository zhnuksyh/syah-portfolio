import React from 'react';
import { Coffee } from 'lucide-react';
import { ChessKnight } from '../icons/CustomIcons';
import SectionWrapper from '../ui/SectionWrapper';

const AboutSection = () => (
    <section id="about" className="mb-32">
        <SectionWrapper className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-2xl p-8 md:p-12 relative overflow-hidden">

            {/* Background Icon Watermark */}
            <div className="absolute top-0 right-0 p-8 opacity-5">
                <ChessKnight size={120} className="text-black dark:text-white" />
            </div>

            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                <Coffee size={22} className="text-gray-500" />
                About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-gray-600 dark:text-gray-300 leading-relaxed">
                <div className="space-y-4">
                    <p>
                        Hi, I’m Zahin Ukasyah. I am an ML/AI Engineer obsessed with optimizing how machines learn and interact.
                    </p>
                    <p>
                        Currently, I am applying this passion as an AI/ML Engineer at MIMOS and an ML Research Assistant at UTM, where I dive deep into technical frontiers like Software Design & Architecture, Multi-Agent RAG, Quantization, Vector Embedding, Semantic Search and Fine-Tuning.
                    </p>
                </div>
                <div className="space-y-4">
                    <p>
                        I’m usually building some kind of side project just to test out new ideas. When I'm not coding, I'm probably at the gym, playing chess, or just trying to keep a clear head.
                    </p>
                    <p>
                        I am constantly venturing into new side projects to push the boundaries of what I can build. I love connecting with other developers and am open for collaboration on interesting AI challenges & Research Projects.
                    </p>
                </div>
            </div>
        </SectionWrapper>
    </section>
);

export default AboutSection;
