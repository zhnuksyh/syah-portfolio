import React from 'react';
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import Badge from '../ui/Badge';
import EmptyState from '../ui/EmptyState';
import IconRenderer from '../ui/IconRenderer';
import { PROJECT_DATA } from '../../data/constants';
import SectionWrapper from '../ui/SectionWrapper';

const ProjectsSection = ({ scrollRef, scroll }) => {

    // Empty state check
    if (!PROJECT_DATA || PROJECT_DATA.length === 0) {
        return (
            <section id="projects" className="mb-32">
                <SectionWrapper>
                    <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
                        <Sparkles size={20} className="text-gray-400" />
                        Featured Projects
                    </h2>
                    <EmptyState message="Coming Soon" />
                </SectionWrapper>
            </section>
        );
    }

    return (
        <section id="projects" className="mb-32 relative group/section">
            <SectionWrapper>
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <Sparkles size={20} className="text-gray-400" />
                        Featured Projects
                    </h2>
                    <div className="flex gap-2">
                        <Link to="/projects" className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            Check All <ArrowRight size={12} />
                        </Link>
                    </div>
                </div>

                <div className="relative">
                    {/* Left Arrow - Positioned Absolute Center Left */}
                    <button
                        onClick={() => scroll('left')}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 p-3 rounded-full bg-white dark:bg-[#252525] border border-gray-200 dark:border-gray-700 shadow-xl text-gray-500 hover:text-black dark:hover:text-white hover:scale-110 transition-all opacity-0 group-hover/section:opacity-100 hidden md:block"
                    >
                        <ChevronLeft size={20} />
                    </button>

                    {/* Right Arrow - Positioned Absolute Center Right */}
                    <button
                        onClick={() => scroll('right')}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 p-3 rounded-full bg-white dark:bg-[#252525] border border-gray-200 dark:border-gray-700 shadow-xl text-gray-500 hover:text-black dark:hover:text-white hover:scale-110 transition-all opacity-0 group-hover/section:opacity-100 hidden md:block"
                    >
                        <ChevronRight size={20} />
                    </button>

                    <div
                        ref={scrollRef}
                        className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory hide-scrollbar"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {PROJECT_DATA.map((project, idx) => (
                            <Link
                                to={`/project/${project.id}`}
                                key={idx}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="snap-start flex-none w-[340px] group bg-white dark:bg-[#202020] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-2xl dark:hover:shadow-black/50 transition-all duration-300 block cursor-pointer"
                            >
                                {/* Project Image */}
                                <div className="relative h-48 w-full overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />

                                    {/* Project Icon Overlay */}
                                    <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 rounded-lg text-gray-800 dark:text-gray-200 shadow-sm border border-black/5 dark:border-white/10">
                                        <IconRenderer name={project.icon} size={18} />
                                    </div>
                                </div>

                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <div className="flex flex-row items-center gap-2">
                                            <h3 className="font-semibold text-lg">{project.title}</h3>
                                            {project.status && (
                                                <span className={`text-[10px] font-medium px-2 py-0.5 rounded-full w-fit ${project.status === 'Completed'
                                                    ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                                                    : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                                                    }`}>
                                                    {project.status}
                                                </span>
                                            )}
                                        </div>
                                        <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors shrink-0 mt-1" />
                                    </div>

                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                                        {project.desc}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tags.map(tag => (
                                            <Badge key={tag.name} color={tag.color}>{tag.name}</Badge>
                                        ))}
                                    </div>

                                    <div className="text-xs font-medium text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors flex items-center gap-1">
                                        Read More <ArrowRight size={12} />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </SectionWrapper>
        </section>
    );
};

export default ProjectsSection;
