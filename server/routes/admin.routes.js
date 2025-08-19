import express from 'express';
import { getAdminStats } from '../controllers/admin.controllers.js';
import { verifyToken, verifyAdmin } from '../middleware/verifyToken.js';

const adminRouter = express.Router();

adminRouter.get('/dash', verifyToken, verifyAdmin, getAdminStats);

export default adminRouter;