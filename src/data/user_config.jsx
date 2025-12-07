import React from 'react';
import { ScanEye, FileText, School, CloudSun } from 'lucide-react';

/**
 * =================================================================================
 *  USER CONFIGURATION
 * =================================================================================
 *  Update your portfolio content here.
 *  This file is ignored by Git, so your changes will be private.
 * =================================================================================
 */

// 1. COLLABORATION STATUS
export const COLLABORATION_STATUS = "Open to Collaboration";

// 2. PROJECT DATA
export const PROJECT_DATA = [
    {
        id: "iris-recognition",
        title: "Iris Biometric Detection (FYP)",
        desc: "High-accuracy iris recognition system (99.8%) on CASIA-v4 dataset using CNN and ArcFace loss.",
        fullContent: `
            <p>Developed a high-precision iris recognition system as a Final Year Project using the CASIA-v4 dataset. The model leverages a Convolutional Neural Network (CNN) architecture enhanced with ArcFace loss to maximize class separability.</p>
            <h3>Key Achievements</h3>
            <ul>
                <li>Achieved <strong>99.8% accuracy</strong> on the validation set.</li>
                <li>Implemented image preprocessing pipelines including segmentation and normalization.</li>
                <li>Optimized model performance using TensorFlow/Keras.</li>
            </ul>
        `,
        image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?q=80&w=1200&auto=format&fit=crop",
        tags: [
            { name: "Python", color: "blue" },
            { name: "TensorFlow", color: "orange" },
            { name: "CNN", color: "purple" }
        ],
        icon: <ScanEye size={18} />
    },
    {
        id: "fake-news-detection",
        title: "Fake News Detection Model",
        desc: "Automated news classification model achieving 94.6% accuracy using scikit-learn and NLTK.",
        fullContent: `
             <p>A machine learning solution designed to combat misinformation by automatically classifying news articles as real or fake. Built with Python's robust data science stack.</p>
             <h3>Technical Details</h3>
             <ul>
                 <li><strong>Preprocessing:</strong> NLTK for tokenization, stemming, and stop-word removal.</li>
                 <li><strong>Vectorization:</strong> TF-IDF to convert text data into numerical features.</li>
                 <li><strong>Model:</strong> Logistic Regression and Random Forest classifiers evaluated, with optimal results from Random Forest.</li>
             </ul>
        `,
        image: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=1200&auto=format&fit=crop",
        tags: [
            { name: "Python", color: "blue" },
            { name: "NLP", color: "purple" },
            { name: "scikit-learn", color: "orange" }
        ],
        icon: <FileText size={18} />
    },
    {
        id: "student-merit-system",
        title: "Student Merit System",
        desc: "Ruby web app optimizing student/staff registration, integrating Supabase for records.",
        fullContent: `
            <p>A custom web application built for SK Integrasi Al-Alusi to digitize their student merit and demerit tracking. Replaced a manual paper-based system, reducing administrative overhead.</p>
             <h3>Features</h3>
             <ul>
                 <li>Role-based access control for Teachers and Admins.</li>
                 <li>Real-time dashboard for student behavior analytics.</li>
                 <li>Integrated <strong>Supabase</strong> for secure and scalable data storage.</li>
             </ul>
        `,
        image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
        tags: [
            { name: "Ruby", color: "red" },
            { name: "Supabase", color: "green" },
            { name: "Web App", color: "default" }
        ],
        icon: <School size={18} />
    },
    {
        id: "moodcast-weather",
        title: "MoodCast: Weather Tracker",
        desc: "Real-time weather app fetching data via RESTful API, built with TypeScript for type safety.",
        fullContent: `
            <p>MoodCast is a responsive weather application that delivers real-time forecasts. It demonstrates the power of TypeScript in ensuring code reliability and maintainability.</p>
            <h3>Highlights</h3>
            <ul>
                <li><strong>RESTful API Integration:</strong> Fetches data from OpenWeatherMap.</li>
                <li><strong>Type Safety:</strong> Full TypeScript implementation with custom interfaces.</li>
                <li><strong>React Hooks:</strong> Efficient state management using useEffect and useState.</li>
            </ul>
        `,
        image: "https://images.unsplash.com/photo-1592210454359-9043f53dbbdb?q=80&w=1200&auto=format&fit=crop",
        tags: [
            { name: "React", color: "blue" },
            { name: "TypeScript", color: "blue" },
            { name: "API", color: "green" }
        ],
        icon: <CloudSun size={18} />
    }
];

// 3. ARTICLE DATA
export const ARTICLE_DATA = [
    {
        id: "transformers-attention",
        title: "Understanding Attention Mechanisms in Transformers",
        desc: "A deep dive into how self-attention allows models to weigh the importance of different words in a sequence.",
        fullContent: `
             <p>The Transformer architecture has revolutionized NLP. At its heart lies the <strong>Self-Attention Mechanism</strong>, which allows the model to weigh the significance of different words in a sentence relative to each other.</p>
             <p>Unlike RNNs, which process data sequentially, Transformers process the entire sequence at once, enabling parallelization and better handling of long-range dependencies.</p>
             <h3>Why it matters?</h3>
             <p>This architecture is the foundation of modern LLMs like GPT-4 and BERT.</p>
        `,
        date: "Oct 12, 2024",
        readTime: "5 min read",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "yolov8-edge",
        title: "Deploying YOLOv8 on Edge Devices",
        desc: "Step-by-step tutorial on quantizing and exporting YOLOv8 models to ONNX and TensorRT.",
        fullContent: `
            <p>Edge AI is gaining traction. This guide walks you through deploying the state-of-the-art YOLOv8 object detection model on NVIDIA Jetson devices.</p>
            <h3>Steps Covered</h3>
            <ol>
                <li>Training YOLOv8 on custom datasets.</li>
                <li>Exporting weights to ONNX format.</li>
                <li>Optimizing with TensorRT for real-time FPS.</li>
            </ol>
        `,
        date: "Sep 28, 2024",
        readTime: "8 min read",
        image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "rl-2024",
        title: "The State of Reinforcement Learning",
        desc: "Analyzing recent breakthroughs in RL, from MuZero to world models.",
        fullContent: `
            <p>Reinforcement Learning (RL) has moved beyond game playing. With algorithms like MuZero, agents are now learning to plan in complex, unknown environments.</p>
            <p>We explore the shift towards model-based RL and its implications for robotics and autonomous driving.</p>
        `,
        date: "Aug 15, 2024",
        readTime: "6 min read",
        image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?q=80&w=1200&auto=format&fit=crop"
    },
    {
        id: "tf-vs-pytorch",
        title: "Why I Switched from TensorFlow to PyTorch",
        desc: "My personal experience migrating production pipelines, highlighting PyTorch's dynamic graph benefits.",
        fullContent: `
            <p>TensorFlow was my first love, but PyTorch stole my heart. The dynamic computation graph (Eager Execution) makes debugging intuitive and Pythonic.</p>
            <p>This article discusses the friction points I faced in TF 1.x vs 2.x and how PyTorch simplified my research workflow.</p>
        `,
        date: "July 02, 2024",
        readTime: "4 min read",
        image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop"
    }
];
