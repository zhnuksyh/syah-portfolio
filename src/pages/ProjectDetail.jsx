import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { PROJECT_DATA } from '../data/constants';
import IconRenderer from '../components/ui/IconRenderer';
import Badge from '../components/ui/Badge';

const ProjectDetail = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);

    useEffect(() => {
        const found = PROJECT_DATA.find(p => p.id === id);
        setProject(found);
        window.scrollTo(0, 0); // Scroll to top on mount
    }, [id]);


    if (!project) {
        // Only show loading if we really are waiting (which with static data is rare, likely "Not Found")
        // But since we use useEffet, there is a split second of null.
        // We can check if ID corresponds to anything in data.
        const exists = PROJECT_DATA.some(p => p.id === id);
        if (!exists) {
            return (
                <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
                    <h1 className="text-2xl font-bold dark:text-white mb-4">Project Not Found</h1>
                    <Link to="/" className="text-blue-500 hover:underline">Return Home</Link>
                </div>
            );
        }
        return <div className="min-h-screen flex items-center justify-center dark:text-white">Loading...</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-20 animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Home
            </Link>

            {/* Notion-like Header */}
            <div className="mb-8">
                <div className="flex items-center gap-6 mb-6">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                        {project.title}
                    </h1>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                        <Badge key={tag.name} color={tag.color}>{tag.name}</Badge>
                    ))}
                </div>
            </div>

            {/* Cover Image */}
            <div className="w-full h-64 md:h-96 rounded-xl overflow-hidden mb-12 border border-gray-200 dark:border-gray-800 shadow-sm">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            </div>

            {/* Content Body */}
            <div className="prose dark:prose-invert max-w-none 
                prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white
                prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed
                prose-li:text-gray-700 dark:prose-li:text-gray-300
                prose-a:text-blue-600 dark:prose-a:text-blue-400 font-sans">
                <div dangerouslySetInnerHTML={{ __html: project.fullContent }} />
            </div>

            <hr className="my-12 border-gray-200 dark:border-gray-800" />

            {/* Footer / Contact CTA */}
            <div className="bg-gray-50 dark:bg-[#1a1a1a] rounded-xl p-8 text-center">
                <h3 className="font-semibold mb-2">Interested in this project?</h3>
                <p className="text-sm text-gray-500 mb-4">Let's discuss how we can build something similar.</p>
                <div className="flex justify-center gap-4">
                    {project.link && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-full font-medium text-sm hover:bg-blue-700 transition-colors">
                            Visit Project
                        </a>
                    )}
                    <a href="mailto:zhnuksyh03@gmail.com" className="inline-block px-6 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full font-medium text-sm">
                        Contact Me
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetail;
