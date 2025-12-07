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
                    <span className="text-xs text-gray-400 block mb-1">2023 - Present</span>
                    <h3 className="font-medium text-lg">Machine Learning Engineer</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">TechNova Solutions</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Leading the development of predictive maintenance models for IoT devices. Reduced false positive rates by 15% using custom loss functions.
                    </p>
                </div>

                {/* Item 2 */}
                <div className="pl-8 relative">
                    <span className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-gray-300 dark:bg-gray-600 ring-4 ring-white dark:ring-[#191919]"></span>
                    <span className="text-xs text-gray-400 block mb-1">2022 - 2023</span>
                    <h3 className="font-medium text-lg">Data Science Intern</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">DataFlow Corp</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        Assisted in building ETL pipelines and visualizing large datasets using Tableau and Python.
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
                        <h3 className="font-medium text-gray-900 dark:text-gray-100">B.S. Computer Science</h3>
                        <span className="text-xs text-gray-400">2019 - 2023</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">University of Technology</p>
                    <div className="text-xs text-gray-400">
                        <span>Major in AI & Data Science • GPA 3.8</span>
                    </div>
                </div>

                <div className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                    <div className="flex justify-between items-start mb-2">
                        <h3 className="font-medium text-gray-900 dark:text-gray-100">Deep Learning Spec.</h3>
                        <span className="text-xs text-gray-400">2023</span>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Coursera / DeepLearning.AI</p>
                </div>
            </div>
        </div>
    </section>
);

export default ExperienceSection;
