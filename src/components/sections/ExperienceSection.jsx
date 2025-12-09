import React from 'react';
import { Briefcase, BookOpen } from 'lucide-react';
import { EDUCATION_DATA, EXPERIENCE_DATA } from '../../data/constants';
import SectionWrapper from '../ui/SectionWrapper';

const ExperienceSection = () => (
    <section id="experience" className="mb-32">
        <SectionWrapper className="grid md:grid-cols-2 gap-12">
            {/* Experience Column */}
            <div>
                <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
                    <Briefcase size={20} className="text-gray-400" />
                    Experience
                </h2>
                <div className="relative border-l border-gray-200 dark:border-gray-800 ml-3 space-y-10">
                    {EXPERIENCE_DATA.map((exp, index) => (
                        <div key={exp.id} className="pl-8 relative">
                            <span className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ring-4 ring-white dark:ring-[#191919] ${index === 0 ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-600'
                                }`}></span>
                            {/* <span className="text-xs text-gray-400 block mb-1">{exp.date}</span> */}
                            <h3 className="font-medium text-lg">{exp.title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.organization}</p>
                            <p
                                className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: exp.description }}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Education Column */}
            <div>
                <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
                    <BookOpen size={20} className="text-gray-400" />
                    Education
                </h2>
                <div className="space-y-6">
                    {EDUCATION_DATA.map((edu) => (
                        <div key={edu.id} className="bg-white/50 dark:bg-[#202020]/50 backdrop-blur-sm border border-gray-200 dark:border-gray-800 rounded-xl p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="font-medium text-gray-900 dark:text-gray-100 max-w-[80%]">{edu.title}</h3>
                                <span className="text-xs text-gray-400 whitespace-nowrap">{edu.date}</span>
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{edu.organization}</p>
                        </div>
                    ))}
                </div>

            </div>
        </SectionWrapper>
    </section>
);

export default ExperienceSection;
