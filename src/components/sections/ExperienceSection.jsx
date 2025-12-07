import React from 'react';
import { Briefcase, BookOpen } from 'lucide-react';

const ExperienceSection = () => (
    <section id="experience" className="mb-32 grid md:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div>
            <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Briefcase size={20} className="text-gray-400" />
                Experience
            </h2>
            <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-10">

                {/* Item 1 */}
                <div className="pl-8 relative">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-black dark:bg-white ring-4 ring-white dark:ring-[#191919]"></span>
                    {/* <span className="text-xs text-gray-400 block mb-1">Date not specified</span> */}
                    <h3 className="font-medium text-lg">AI/NLP Engineer Intern (R&D)</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">MIMOS Berhad, MOSTI</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Project: Malaysia Mental Health Mobile Application.
                        <ul className="list-disc ml-4 mt-2 space-y-1">
                            <li>Accelerated real-time conversational flow by reducing LLM inference latency by 3.5x via vLLM migration.</li>
                            <li>Reduced core model memory footprint by 60% with 4-bit quantization.</li>
                            <li>Integrated multi-document RAG pipeline for factual therapeutic guidance.</li>
                            <li>Reduced hallucinated responses by 40% using confidence-scoring mechanisms.</li>
                        </ul>
                    </p>
                </div>

                {/* Item 2 */}
                <div className="pl-8 relative">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-[#191919]"></span>
                    {/* <span className="text-xs text-gray-400 block mb-1">Date not specified</span> */}
                    <h3 className="font-medium text-lg">Research Assistant</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Universiti Teknologi Malaysia</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Project: CNN+LSTM for AI-Powered Deepfake Detection.
                        <ul className="list-disc ml-4 mt-2 space-y-1">
                            <li>Reduced testing time by 40% by automating deep learning evaluation scripts.</li>
                            <li>Validated hybrid architectures (CNN+LSTM) against deepfake datasets.</li>
                            <li>Conducted systematic literature reviews on temporal sequence modeling.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>

        {/* Education Column */}
        <div>
            <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <BookOpen size={20} className="text-gray-400" />
                Education
            </h2>
            <div className="space-y-6">
                <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-gray-100">Bachelor in Software Engineering</h3>
                        {/* <span className="text-xs text-gray-400">Date</span> */}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Universiti Teknologi Malaysia</p>
                    {/* <div className="text-xs text-gray-400">
                        <span>CGPA: 3.8</span>
                    </div> */}
                </div>
            </div>

        </div>
    </section>
);

export default ExperienceSection;
