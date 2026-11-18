import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = '0.0.0.0';
const distDir = path.join(__dirname, 'dist');

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use(express.static(distDir));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distDir, 'index.html'));
});

app.listen(PORT, HOST, () => {
  console.log(`Healers Integrated Wellness Center listening on http://${HOST}:${PORT}`);
});
