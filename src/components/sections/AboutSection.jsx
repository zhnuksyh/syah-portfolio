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
                About Me
            </h2>

            <div className="grid md:grid-cols-2 gap-12 text-gray-600 dark:text-gray-300 leading-relaxed">
                <div className="space-y-4">
                    <p>
                        I am a <strong>Software Engineering student</strong> at <strong>Universiti Teknologi Malaysia</strong>, specializing in <strong>AI and NLP</strong>.
                    </p>
                    <p>
                        My passion lies in bridging the gap between theoretical AI models and practical, scalable applications.
                    </p>
                </div>
                <div className="space-y-4">
                    <p>
                        I have a proven ability in <strong>model optimization</strong>, including LLM quantization (GGUF, vLLM) and Agentic RAG pipeline development.
                    </p>
                    <p>
                        Beyond AI, I have a strong foundation in <strong>scalable full-stack development</strong> (React, Next.js), allowing me to deliver high-performance, integrated intelligent applications.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default AboutSection;
