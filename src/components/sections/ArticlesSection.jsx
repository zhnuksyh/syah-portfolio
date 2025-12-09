import React from 'react';
import { FileText, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ARTICLE_DATA } from '../../data/constants';
import EmptyState from '../ui/EmptyState';

const ArticlesSection = () => {
    if (!ARTICLE_DATA || ARTICLE_DATA.length === 0) {
        return (
            <section id="articles" className="mb-32">
                <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
                    <FileText size={20} className="text-gray-400" />
                    Articles
                </h2>
                <EmptyState message="Coming Soon" />
            </section>
        );
    }

    return (
        <section id="articles" className="mb-32">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-xl font-semibold flex items-center gap-2">
                    <FileText size={20} className="text-gray-400" />
                    Articles
                </h2>
                <Link to="/articles" className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-xs font-medium text-gray-500 dark:text-gray-400 flex items-center gap-1">
                    Check All <ArrowRight size={12} />
                </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-4">
                {ARTICLE_DATA.map((article) => (
                    <Link
                        to={`/article/${article.id}`}
                        key={article.id}
                        className="group bg-white dark:bg-[#202020] p-6 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-colors block"
                    >
                        <div className="flex justify-between items-start mb-3">
                            <h3 className="font-semibold text-lg group-hover:underline decoration-1 underline-offset-4">{article.title}</h3>
                        </div>

                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 h-12 line-clamp-2">
                            {article.desc}
                        </p>

                        <div className="flex items-center gap-3 text-xs text-gray-400 font-medium">
                            <span>{article.date}</span>
                            <span>•</span>
                            <span>{article.readTime}</span>
                            <span className="ml-auto text-black dark:text-white group-hover:translate-x-1 transition-transform">Read More →</span>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );


};

export default ArticlesSection;
