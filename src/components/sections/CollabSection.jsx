import React from 'react';
import { Users, LayoutDashboard, Brain, Mic } from 'lucide-react';

const CollabSection = () => (
    <section id="collab" className="mb-32">
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <Users size={20} className="text-gray-400" />
            Collaboration
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                    <LayoutDashboard size={20} />
                </div>
                <h3 className="font-semibold mb-2">End-to-End System Architecture</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    I can design the foundational software architecture to ensure our application is scalable and robust. Beyond just the backend, I can build custom dashboards that give us real-time visibility into how the system and models are performing.
                </p>
            </div>

            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <Brain size={20} />
                </div>
                <h3 className="font-semibold mb-2">Advanced AI Engineering</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    I handle the "heavy lifting" of the AI models. This means I can fine-tune specific models for our needs, implement complex Agentic RAG systems for better reasoning, and optimize everything to ensure it runs fast and cost-effectively.

                </p>
            </div>

            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4">
                    <Mic size={20} />
                </div>
                <h3 className="font-semibold mb-2">Rich Multimodal User Experience</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    I can take the project beyond simple text interactions. I have the technical capability to integrate Voice (STT/TTS) and Emotion Tracking, allowing us to build an application that can listen, speak, and detect user sentiment
                </p>
            </div>
        </div>
    </section>
);


export default CollabSection;
