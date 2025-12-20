import React from 'react';
import { Cpu } from 'lucide-react';
// Importing fallback local icons for reliability
import QdrantIcon from '../../assets/icons/qdrant-custom.png';
// import CSS3Icon from '../../assets/icons/css3.svg'; // Removed in favor of Bootstrap
import ChromadbIcon from '../../assets/icons/chromadb.svg';
import ChromadbBlackIcon from '../../assets/icons/chromadb-black.svg';
import UnslothIcon from '../../assets/icons/unsloth-base-grey.png';
import UnslothWhiteIcon from '../../assets/icons/unsloth-white.png';
import VLLMIcon from '../../assets/icons/vllm-custom.png';
import LoRAIcon from '../../assets/icons/lora-microsoft.svg';
import MicrosoftColorIcon from '../../assets/icons/microsoft-color.svg';

const SkillIcon = ({ name, url, hoverUrl }) => {
    // Check if url is a local import (string path) or a CDN URL
    const isLocal = !url.startsWith('http');

    return (
        <div className="flex flex-col items-center justify-center p-4 rounded-xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-[#202020] hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg dark:hover:shadow-black/50 group w-full aspect-square">
            <div className={`w-10 h-10 mb-3 flex items-center justify-center rounded-lg bg-gray-50 dark:bg-[#252525] group-hover:bg-white dark:group-hover:bg-[#303030] transition-colors relative ${name === 'Unsloth' ? 'p-1' : 'p-2'}`}>

                {hoverUrl ? (
                    // Logic for swapping images on hover (Local or mixed)
                    <>
                        <img
                            src={hoverUrl}
                            alt={`${name} color`}
                            className="absolute inset-0 w-full h-full object-contain p-[inherit] opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                        />
                        <img
                            src={url}
                            alt={name}
                            className={`w-full h-full object-contain transition-all duration-300 filter grayscale group-hover:opacity-0 ${name === 'Unsloth' ? 'opacity-70' : 'opacity-40'} ${name !== 'Unsloth' ? 'dark:invert' : ''}`}
                        />
                    </>
                ) : isLocal ? (
                    // Logic for local icons (single image): Start grayscale, hover full color
                    <img
                        src={url}
                        alt={name}
                        className={`w-full h-full object-contain transition-all duration-300 filter grayscale group-hover:grayscale-0 group-hover:opacity-100 group-hover:brightness-100 dark:group-hover:invert-0 ${name === 'vLLM' || name === 'Ollama' ? 'opacity-70' : 'opacity-40'} ${name === 'Ollama' ? 'brightness-150' : ''} ${name !== 'Unsloth' ? 'dark:invert' : ''}`}
                    />
                ) : (
                    // Logic for SimpleIcons CDN (using their /gray endpoint)
                    <>
                        <img
                            src={url.replace('/gray', '')}
                            alt={name}
                            className="absolute inset-0 w-full h-full object-contain p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 z-10"
                        />
                        <img
                            src={url.includes('/gray') ? url : url + '/gray'}
                            alt={name}
                            className={`w-full h-full object-contain filter grayscale-[100%] group-hover:opacity-0 transition-all duration-300 ${name === 'Ollama' ? 'opacity-70 brightness-125' : 'opacity-40'}`}
                        />
                    </>
                )}
            </div>
            <span className="text-xs font-medium text-gray-400 group-hover:text-black dark:group-hover:text-white transition-colors">{name}</span>
        </div>
    );
};

const SkillCard = ({ title, items }) => (
    <div className="bg-white dark:bg-[#202020] border border-gray-200 dark:border-gray-800 p-6 rounded-2xl h-full hover:border-gray-300 dark:hover:border-gray-600 transition-colors">
        <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">{title}</h3>
        <ul className="space-y-2">
            {items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    {item}
                </li>
            ))}
        </ul>
    </div>
);

const SkillsSection = () => {
    // Conceptual Skills
    const coreSkills = [
        {
            title: "AI Model Optimization",
            items: ["LLM Quantization Methods (GGUF)", "Efficient Fine-Tuning (LoRA)", "Inference Latency Optimization", "Local Model Deployment"]
        },
        {
            title: "Architectures & Pipelines",
            items: ["Agentic RAG Orchestration", "Semantic Embedding Integration", "Data Pipeline Architecture", "Vector Search Implementation"]
        },
        {
            title: "Data Science & Vision",
            items: ["Deepfake Detection Networks", "Biometric Authentication Systems", "Automated Data Preprocessing", "Computer Vision Analytics"]
        }
    ];

    // Tools & Technologies
    const tools = [
        { name: "HTML5", url: "https://cdn.simpleicons.org/html5/gray" },
        { name: "JavaScript", url: "https://cdn.simpleicons.org/javascript/gray" },
        { name: "TypeScript", url: "https://cdn.simpleicons.org/typescript/gray" },
        { name: "Python", url: "https://cdn.simpleicons.org/python/gray" },
        { name: "React", url: "https://cdn.simpleicons.org/react/gray" },
        { name: "Next.js", url: "https://cdn.simpleicons.org/nextdotjs/gray" },
        { name: "Expo", url: "https://cdn.simpleicons.org/expo/gray" },
        { name: "Vite", url: "https://cdn.simpleicons.org/vite/gray" },
        { name: "Tailwind", url: "https://cdn.simpleicons.org/tailwindcss/gray" },
        { name: "Bootstrap", url: "https://cdn.simpleicons.org/bootstrap/gray" },
        { name: "Node.js", url: "https://cdn.simpleicons.org/nodedotjs/gray" },
        { name: "Firebase", url: "https://cdn.simpleicons.org/firebase/gray" },
        { name: "Supabase", url: "https://cdn.simpleicons.org/supabase/gray" },
        { name: "Redis", url: "https://cdn.simpleicons.org/redis/gray" },
        { name: "Docker", url: "https://cdn.simpleicons.org/docker/gray" },
        { name: "Git", url: "https://cdn.simpleicons.org/git/gray" },
        { name: "GitLab", url: "https://cdn.simpleicons.org/gitlab/gray" },
        { name: "JupyterNB", url: "https://cdn.simpleicons.org/jupyter/gray" },
        { name: "PyTorch", url: "https://cdn.simpleicons.org/pytorch/gray" },
        { name: "TensorFlow", url: "https://cdn.simpleicons.org/tensorflow/gray" },
        { name: "LangChain", url: "https://cdn.simpleicons.org/langchain/gray" },
        { name: "Qdrant", url: QdrantIcon },
        { name: "ChromaDB", url: ChromadbBlackIcon, hoverUrl: ChromadbIcon },
        { name: "Ollama", url: "https://cdn.simpleicons.org/ollama/gray" },
        { name: "Unsloth", url: UnslothIcon, hoverUrl: UnslothWhiteIcon },
        { name: "LoRA", url: LoRAIcon, hoverUrl: MicrosoftColorIcon },
        { name: "vLLM", url: VLLMIcon }
    ];

    return (
        <section id="skills" className="mb-32">
            <h2 className="text-xl font-semibold mb-8 flex items-center gap-2">
                <Cpu size={20} className="text-gray-400" />
                Skills & Tools
            </h2>

            {/* 1. Core Competencies (3 Columns) */}
            <div className="grid md:grid-cols-3 gap-6 mb-12">
                {coreSkills.map((skillGroup, idx) => (
                    <SkillCard key={idx} title={skillGroup.title} items={skillGroup.items} />
                ))}
            </div>

            {/* 2. Tools & Technologies (Grid) */}
            <h3 className="text-lg font-medium mb-6 text-gray-500 dark:text-gray-400"> Technologies</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-3">
                {tools.map(tool => (
                    <SkillIcon key={tool.name} name={tool.name} url={tool.url} hoverUrl={tool.hoverUrl} />
                ))}
            </div>
        </section>
    );
};

export default SkillsSection;
