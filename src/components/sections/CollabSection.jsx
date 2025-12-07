import React from 'react';
import { Users, Zap, Layout, CheckCircle } from 'lucide-react';

const CollabSection = () => (
    <section id="collab" className="mb-32">
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <Users size={20} className="text-gray-400" />
            Collaboration
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                    <Zap size={20} />
                </div>
                <h3 className="font-semibold mb-2">Model Optimization</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    I can help shrink your model's footprint for edge deployment without sacrificing accuracy. Experience with quantization and pruning.
                </p>
            </div>

            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4">
                    <Layout size={20} />
                </div>
                <h3 className="font-semibold mb-2">End-to-End Pipelines</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    From raw data ingestion to inference API. I build robust ETL pipelines and scalable serving architectures using Docker & FastAPI.
                </p>
            </div>

            <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle size={20} />
                </div>
                <h3 className="font-semibold mb-2">Code Review & Audit</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    Need a second pair of eyes on your training loop? I provide detailed code reviews focusing on performance bottlenecks and best practices.
                </p>
            </div>
        </div>
    </section>
);

export default CollabSection;
