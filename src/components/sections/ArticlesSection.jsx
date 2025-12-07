import React from 'react';
import { FileText } from 'lucide-react';
import ArticleCard from '../ui/ArticleCard';

const ArticlesSection = () => (
    <section id="articles" className="mb-32">
        <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
            <FileText size={20} className="text-gray-400" />
            Articles
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
            <ArticleCard
                title="Understanding Attention Mechanisms in Transformers"
                desc="A deep dive into how self-attention allows models to weigh the importance of different words in a sequence, revolutionizing NLP tasks."
                date="Oct 12, 2024"
                readTime="5 min read"
                link="#"
            />
            <ArticleCard
                title="Deploying YOLOv8 on Edge Devices: A Practical Guide"
                desc="Step-by-step tutorial on quantizing and exporting YOLOv8 models to ONNX and TensorRT for real-time inference on NVIDIA Jetson."
                date="Sep 28, 2024"
                readTime="8 min read"
                link="#"
            />
            <ArticleCard
                title="The State of Reinforcement Learning in 2024"
                desc="Analyzing recent breakthroughs in RL, from MuZero to world models, and discussing the challenges of sample efficiency in real-world robotics."
                date="Aug 15, 2024"
                readTime="6 min read"
                link="#"
            />
            <ArticleCard
                title="Why I Switched from TensorFlow to PyTorch"
                desc="My personal experience migrating production pipelines, highlighting PyTorch's dynamic graph benefits and improved debugging experience."
                date="July 02, 2024"
                readTime="4 min read"
                link="#"
            />
        </div>
    </section>
);

export default ArticlesSection;
