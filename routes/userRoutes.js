import express from 'express';
import { registerUser, loginUser } from '../controllers/userControllers.js';

const router = express.Router();

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

export default router;
