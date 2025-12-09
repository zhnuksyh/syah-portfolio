import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

// ESM __dirname fix
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DATA_FILE = path.join(__dirname, '../src/data/user_config.json');

app.use(cors());
app.use(bodyParser.json({ limit: '10mb' }));

// GET User Config
app.get('/api/config', (req, res) => {
    try {
        const data = fs.readFileSync(DATA_FILE, 'utf8');
        res.json(JSON.parse(data));
    } catch (err) {
        console.error("Error reading config:", err);
        res.status(500).json({ error: "Failed to read config" });
    }
});

// POST Update Config
app.post('/api/config', (req, res) => {
    try {
        const newData = req.body;
        fs.writeFileSync(DATA_FILE, JSON.stringify(newData, null, 4));
        console.log("Configuration updated successfully.");
        res.json({ success: true });
    } catch (err) {
        console.error("Error writing config:", err);
        res.status(500).json({ error: "Failed to save config" });
    }
});

app.listen(PORT, () => {
    console.log(`CMS Server running on http://localhost:${PORT}`);
    console.log(`Keep this terminal open to use the Admin Panel.`);
});
