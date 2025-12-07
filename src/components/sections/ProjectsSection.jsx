import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import Badge from '../ui/Badge';
import { PROJECT_DATA } from '../../data/constants';

const ProjectsSection = ({ scrollRef, scroll }) => (
    <section id="projects" className="mb-32">
        <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-semibold">Featured Projects</h2>
            <div className="flex gap-2">
                <button onClick={() => scroll('left')} className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500">
                    <ArrowRight className="rotate-180" size={18} />
                </button>
                <button onClick={() => scroll('right')} className="p-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-500">
                    <ArrowRight size={18} />
                </button>
            </div>
        </div>

        <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
            {PROJECT_DATA.map((project, idx) => (
                <div
                    key={idx}
                    className="snap-start flex-none w-[340px] group bg-white dark:bg-[#202020] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-black/50 transition-all duration-300"
                >
                    {/* Project Image */}
                    <div className="relative h-48 w-full overflow-hidden">
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                        {/* Project Icon Overlay */}
                        <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 rounded-lg text-gray-800 dark:text-gray-200 shadow-sm border border-black/5 dark:border-white/10">
                            {project.icon}
                        </div>
                    </div>

                    <div className="p-6">
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-semibold text-lg">{project.title}</h3>
                            <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                        </div>

                        <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 h-10 line-clamp-2">
                            {project.desc}
                        </p>

                        <div className="flex flex-wrap">
                            {project.tags.map(tag => (
                                <Badge key={tag.name} color={tag.color}>{tag.name}</Badge>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </section>
);

export default ProjectsSection;
