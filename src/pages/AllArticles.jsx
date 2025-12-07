import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Calendar, Clock } from 'lucide-react';
import { ARTICLE_DATA } from '../data/constants';

const AllArticles = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-6 py-12 animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Home
            </Link>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">Articles & Publications</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-12">
                Thoughts on Artificial Intelligence, Software Engineering, and the future of tech.
            </p>

            <div className="grid gap-6">
                {ARTICLE_DATA.map((article) => (
                    <Link
                        to={`/article/${article.id}`}
                        key={article.id}
                        className="group bg-white dark:bg-[#202020] p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg dark:hover:shadow-black/50 block"
                    >
                        <div className="flex flex-col sm:flex-row gap-6">
                            {article.image && (
                                <div className="w-full sm:w-48 h-32 shrink-0 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                                    <img src={article.image} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                            )}

                            <div className="flex flex-col justify-center">
                                <div className="flex items-center gap-3 text-xs text-gray-400 font-medium mb-2 uppercase tracking-wide">
                                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                                    <span>•</span>
                                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                                </div>

                                <h3 className="font-semibold text-xl mb-3 text-gray-900 dark:text-white group-hover:underline decoration-1 underline-offset-4">{article.title}</h3>

                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-4 line-clamp-2">
                                    {article.desc}
                                </p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AllArticles;
