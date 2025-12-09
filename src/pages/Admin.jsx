import React, { useState, useEffect } from 'react';
import { Save, Plus, Trash2, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const API_URL = 'http://localhost:3001/api/config';

// Simple text input helper
const Input = ({ label, value, onChange, placeholder, multiline = false }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">{label}</label>
        {multiline ? (
            <textarea
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
                rows={4}
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#252525] focus:outline-none focus:ring-2 focus:ring-blue-500 font-mono text-sm"
            />
        ) : (
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
                className="w-full p-2 rounded border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#252525] focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        )}
    </div>
);

const Admin = () => {
    const [config, setConfig] = useState(null);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [activeTab, setActiveTab] = useState('projects'); // projects | articles | general

    useEffect(() => {
        fetchConfig();
    }, []);

    const fetchConfig = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setConfig(data);
            setLoading(false);
        } catch (err) {
            console.error("Failed to load config. Is the CMS server running?", err);
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        try {
            await fetch(API_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(config)
            });
            alert('Saved successfully!');
        } catch (err) {
            alert('Failed to save.');
        } finally {
            setSaving(false);
        }
    };

    const updateProject = (index, field, value) => {
        const newProjects = [...config.projects];
        newProjects[index][field] = value;
        setConfig({ ...config, projects: newProjects });
    };

    const addProject = () => {
        const newProject = {
            id: "new-project-" + Date.now(),
            title: "New Project",
            desc: "Description here...",
            fullContent: "<p>Details...</p>",
            image: "https://via.placeholder.com/600",
            tags: [],
            icon: "Circle"
        };
        setConfig({ ...config, projects: [...config.projects, newProject] });
    };

    const deleteProject = (index) => {
        if (!confirm("Are you sure?")) return;
        const newProjects = config.projects.filter((_, i) => i !== index);
        setConfig({ ...config, projects: newProjects });
    };

    if (loading) return <div className="p-10 text-center">Loading Admin Panel... Ensure 'npm run cms' is running.</div>;
    if (!config) return <div className="p-10 text-center text-red-500">Error loading configuration. Start the CMS server!</div>;

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#121212] text-gray-900 dark:text-gray-100 p-8">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex items-center gap-4">
                        <Link to="/" className="p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition-colors">
                            <ArrowLeft size={20} />
                        </Link>
                        <h1 className="text-2xl font-bold">Portfolio CMS</h1>
                    </div>
                    <button
                        onClick={handleSave}
                        disabled={saving}
                        className="flex items-center gap-2 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
                    >
                        <Save size={18} />
                        {saving ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex gap-4 mb-6 border-b border-gray-200 dark:border-gray-800">
                    <button
                        onClick={() => setActiveTab('projects')}
                        className={`pb-3 px-2 ${activeTab === 'projects' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => setActiveTab('general')}
                        className={`pb-3 px-2 ${activeTab === 'general' ? 'border-b-2 border-blue-500 font-medium' : 'text-gray-500'}`}
                    >
                        General Status
                    </button>
                </div>

                {/* Content */}
                <div className="space-y-8">
                    {activeTab === 'general' && (
                        <div className="bg-white dark:bg-[#202020] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                            <Input
                                label="Collaboration Status"
                                value={config.collaborationStatus}
                                onChange={(val) => setConfig({ ...config, collaborationStatus: val })}
                            />
                        </div>
                    )}

                    {activeTab === 'projects' && (
                        <div className="space-y-6">
                            {config.projects.map((project, idx) => (
                                <div key={project.id} className="bg-white dark:bg-[#202020] p-6 rounded-xl border border-gray-200 dark:border-gray-800 relative group">
                                    <button
                                        onClick={() => deleteProject(idx)}
                                        className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition-colors"
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                    <h3 className="font-semibold mb-4 text-gray-500">Project #{idx + 1}</h3>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        <Input
                                            label="Title"
                                            value={project.title}
                                            onChange={(val) => updateProject(idx, 'title', val)}
                                        />
                                        <Input
                                            label="Icon Name (Lucide)"
                                            value={project.icon}
                                            onChange={(val) => updateProject(idx, 'icon', val)}
                                        />
                                    </div>
                                    <Input
                                        label="Description"
                                        value={project.desc}
                                        onChange={(val) => updateProject(idx, 'desc', val)}
                                        multiline
                                    />
                                    <Input
                                        label="Full Content (HTML)"
                                        value={project.fullContent}
                                        onChange={(val) => updateProject(idx, 'fullContent', val)}
                                        multiline
                                    />
                                </div>
                            ))}
                            <button
                                onClick={addProject}
                                className="w-full py-4 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-xl flex items-center justify-center gap-2 text-gray-500 hover:border-gray-400 dark:hover:border-gray-600 hover:bg-gray-50 dark:hover:bg-[#252525] transition-all"
                            >
                                <Plus size={20} /> Add New Project
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Admin;
