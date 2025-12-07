import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ExternalLink } from 'lucide-react';
import Badge from '../components/ui/Badge';
import { PROJECT_DATA } from '../data/constants';

const AllProjects = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-6 py-12 animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">All Projects</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12 max-w-2xl">
                A complete collection of my projects, ranging from AI research to full-stack web applications.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECT_DATA.map((project, idx) => (
                    <Link
                        to={`/project/${project.id}`}
                        key={idx}
                        className="group bg-white dark:bg-[#202020] border border-gray-200 dark:border-gray-800 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:shadow-black/50 transition-all duration-300 block cursor-pointer flex flex-col"
                    >
                        {/* Project Image */}
                        <div className="relative h-48 w-full overflow-hidden shrink-0">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            <div className="absolute bottom-3 left-3 bg-white/90 dark:bg-black/80 backdrop-blur-md p-2 rounded-lg text-gray-800 dark:text-gray-200 shadow-sm border border-black/5 dark:border-white/10">
                                {project.icon}
                            </div>
                        </div>

                        <div className="p-6 flex flex-col grow">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-semibold text-lg">{project.title}</h3>
                                <ExternalLink size={16} className="text-gray-300 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors" />
                            </div>

                            <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-6 h-12 line-clamp-2">
                                {project.desc}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                                {project.tags.map(tag => (
                                    <Badge key={tag.name} color={tag.color}>{tag.name}</Badge>
                                ))}
                            </div>

                            <div className="text-xs font-medium text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors flex items-center gap-1 mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                                View Details <ArrowRight size={12} />
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllProjects;
