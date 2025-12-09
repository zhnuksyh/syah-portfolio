import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG_PATH = path.join(__dirname, '../src/data/user_config.json');
const README_PATH = path.join(__dirname, '../README.md');

try {
    const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');
    const configData = JSON.parse(configContent);

    // Extract Data
    const projects = configData.projects || [];
    const articles = configData.articles || [];

    const latestProject = projects[0] || { title: 'None', desc: '' };
    const latestArticle = articles[0] || { title: 'None', desc: '' };

    const today = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

    const readmeContent = `# Zahin Ukasyah - Portfolio & Blog
> **Last Updated:** ${today}

## 👋 About Me
I am a **Software Engineering student** at **Universiti Teknologi Malaysia**, specializing in **Artificial Intelligence** and **Natural Language Processing (NLP)**. 

My work bridges the gap between theoretical AI models and practical, scalable applications. I have a proven track record in model optimization (LLM quantization, R&D) and full-stack development.

- 🎓 **Education**: Bachelor in Software Engineering (UTM)
- 💼 **Focus**: AI Engineering, Full-Stack Development, Scalable Systems
- 📍 **Location**: Kuala Lumpur, Malaysia

## 🌟 Latest Updates
*Automatic snapshot of what I've been working on.*

### 🛠️ Latest Project: **${latestProject.title}**
> ${latestProject.description || latestProject.desc || 'No description available'}

### ✍️ Latest Article: **${latestArticle.title}**
> ${latestArticle.description || latestArticle.desc || 'No description available'}

## 📂 What You'll Find Here

### 🧠 Artificial Intelligence projects
Detailed breakdowns of my work in **Deep Learning**, **Computer Vision**, and **NLP**. 
- **Focus Areas**: Deepfake Detection, Biometric Recognition, LLM Optimization.

### 💻 Full-Stack Applications
Showcases of robust web applications built with **React**, **Next.js**, and **Supabase**.
- **Key Skills**: React Native, Docker, CI/CD pipelines.

### 📝 Technical Writing
Articles sharing my learning journey and deep dives into tech concepts.
- **Topics**: Transformers, Edge AI, Reinforcement Learning.

---
*This README is dynamically updated based on the latest entries in my portfolio.*
`;

    fs.writeFileSync(README_PATH, readmeContent);
    console.log('README.md updated successfully with latest content.');

} catch (err) {
    console.error('Error updating README:', err);
    process.exit(1);
}
