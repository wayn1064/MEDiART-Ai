import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '@prisma/client';

dotenv.config();

const app = express();
const port = process.env.PORT || 5001;
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Outbound API Gateway Mock (WAYN Ecosystem Rule)
app.use('/api/gateway', (req, res) => {
  res.json({ message: 'Mock API Gateway: Redirecting to other WAYN services' });
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'MEDiART-Ai Backend' });
});

// Mock Route: Get Curated Categories Like ClipartKorea
app.get('/api/curation', async (req, res) => {
  res.json({
    message: 'success',
    data: [
      { id: '1', title: '영감을 채워 줄 의료 디자인', type: 'DESIGN' },
      { id: '2', title: '봄맞이 인기 병원 캐릭터', type: 'IMAGE' },
      { id: '3', title: '수술 및 시술 3D 영상', type: 'VIDEO' }
    ]
  });
});

app.listen(port, () => {
  console.log(`MEDiART-Ai Backend running on http://localhost:${port}`);
});