import express from 'express';
import sampleRouter from './sample';

const router = express.Router();

// v1以下のルーティング
router.use('/sampleRouter', sampleRouter);

export default router;