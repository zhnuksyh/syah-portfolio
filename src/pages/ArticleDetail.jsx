import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, FileText } from 'lucide-react';
import { ARTICLE_DATA } from '../data/constants';

const ArticleDetail = () => {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() => {
        const found = ARTICLE_DATA.find(a => a.id === id);
        setArticle(found);
        window.scrollTo(0, 0);
    }, [id]);

    if (!article) return <div className="min-h-screen flex items-center justify-center dark:text-white">Loading...</div>;

    return (
        <div className="max-w-3xl mx-auto px-6 py-20 animate-fade-in">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black dark:hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} /> Back to Home
            </Link>

            {/* Header */}
            <div className="mb-10">
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-4 font-mono uppercase tracking-widest">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {article.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {article.readTime}</span>
                </div>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
                    {article.title}
                </h1>
            </div>

            {/* Cover Image */}
            {article.image && (
                <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden mb-12 border border-gray-200 dark:border-gray-800">
                    <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                </div>
            )}

            {/* Content Body */}
            <article className="prose dark:prose-invert max-w-none text-lg text-gray-800 dark:text-gray-200 leading-8">
                <div dangerouslySetInnerHTML={{ __html: article.fullContent }} />
            </article>
        </div>
    );
};

export default ArticleDetail;
