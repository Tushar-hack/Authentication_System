import express from "express";
const router = express.Router();

import { create, sendOTP, verifyOTP, loginUser } from '../controllers/userController.js';

router.post('/register', create);
router.post('/sendOTP', sendOTP);
router.post('/verify', verifyOTP);
router.post('/login', loginUser);

export default router;