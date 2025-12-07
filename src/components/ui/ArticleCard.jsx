import React from 'react';
import { ExternalLink, ChevronRight } from 'lucide-react';

const ArticleCard = ({ title, date, readTime, desc, link }) => (
    <a href={link} className="block group p-6 bg-white/80 dark:bg-[#202020]/80 backdrop-blur-sm border border-gray-100 dark:border-gray-800 rounded-lg hover:border-gray-300 dark:hover:border-gray-600 transition-all">
        <div className="flex justify-between items-start mb-3">
            <div className="flex items-center gap-2 text-xs text-gray-400">
                <span>{date}</span>
                <span>•</span>
                <span>{readTime}</span>
            </div>
            <ExternalLink size={14} className="text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors" />
        </div>
        <h3 className="text-base font-semibold group-hover:underline decoration-1 underline-offset-4 mb-3">{title}</h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 leading-relaxed">
            {desc}
        </p>
        <div className="flex items-center text-xs font-medium text-black dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            Read more <ChevronRight size={12} className="ml-1" />
        </div>
    </a>
);

export default ArticleCard;
