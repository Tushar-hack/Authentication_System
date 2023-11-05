import express from "express";
const router = express.Router();

import { create, sendOTP, verifyOTP } from '../controllers/userController.js';

router.post('/register', create);
router.post('/sendOTP', sendOTP);
router.post('/verify', verifyOTP);

export default router;