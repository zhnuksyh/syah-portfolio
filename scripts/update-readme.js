import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CONFIG_PATH = path.join(__dirname, '../src/data/user_config.jsx');
const README_PATH = path.join(__dirname, '../README.md');

function extractData(content, variableName) {
    const regex = new RegExp(`export const ${variableName} = \\[([\\s\\S]*?)\\];`, 'm');
    const match = content.match(regex);
    if (!match) return [];

    // Naive parse of objects in the array string
    // This assumes specific formatting: { ... }, { ... }
    const itemsRaw = match[1].split(/},\s*{/);

    return itemsRaw.map(item => {
        const titleMatch = item.match(/title:\s*"([^"]+)"/);
        const descMatch = item.match(/desc:\s*"([^"]+)"/);
        const dateMatch = item.match(/date:\s*"([^"]+)"/);

        return {
            title: titleMatch ? titleMatch[1] : 'Untitled',
            desc: descMatch ? descMatch[1] : 'No description',
            date: dateMatch ? dateMatch[1] : null
        };
    }).filter(i => i.title !== 'Untitled'); // Filter out empty parses
}

try {
    const configContent = fs.readFileSync(CONFIG_PATH, 'utf8');

    // Extract Data
    const projects = extractData(configContent, 'PROJECT_DATA');
    const articles = extractData(configContent, 'ARTICLE_DATA');

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
> ${latestProject.desc}

### ✍️ Latest Article: **${latestArticle.title}**
> ${latestArticle.desc}

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
