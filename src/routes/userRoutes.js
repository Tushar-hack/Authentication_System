import express from "express";
const router = express.Router();

import { create, sendOTP } from '../controllers/userController.js';

router.post('/register', create);
router.post('/sendOTP', sendOTP);

export default router;