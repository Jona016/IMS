import express from 'express';
import authRouter from './authRoute.js';
import userRouter from './userRoute.js';

const router = express.Router();

// Mount routers
router.use('/auth', authRouter);
router.use('/api/users', userRouter);

export default router;