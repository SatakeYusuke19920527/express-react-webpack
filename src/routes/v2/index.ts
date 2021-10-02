import express from 'express';
import wsRouter from './ws';

const router = express.Router();

// v1以下のルーティング
router.use('/ws', wsRouter);

export default router;