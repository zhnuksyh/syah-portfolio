import React from 'react';
import { Layers, Cpu, Code } from 'lucide-react';

/**
 * Project Data
 * Centralized data source for easier updates without touching UI code.
 */
export const PROJECT_DATA = [
    {
        title: "Market Prophet",
        desc: "Transformer-based sentiment analysis for financial volatility.",
        image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=600&auto=format&fit=crop",
        tags: [
            { name: "PyTorch", color: "blue" },
            { name: "NLP", color: "purple" }
        ],
        icon: <Layers size={18} />
    },
    {
        title: "VisionGuard",
        desc: "Edge-optimized YOLOv8 for autonomous drone navigation.",
        image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?q=80&w=600&auto=format&fit=crop",
        tags: [
            { name: "CV", color: "orange" },
            { name: "C++", color: "default" }
        ],
        icon: <Cpu size={18} />
    },
    {
        title: "Zero-Clone",
        desc: "RL agent mastering Connect-4 via Monte Carlo Tree Search.",
        image: "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?q=80&w=600&auto=format&fit=crop",
        tags: [
            { name: "RL", color: "red" },
            { name: "Python", color: "blue" }
        ],
        icon: <Code size={18} />
    }
];
