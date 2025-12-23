import { Router } from 'express';
import { login, register } from '../controllers/auth.controller.js';
import { auth } from '../middleware/auth.middleware.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/me', auth, me);
router.post('/refresh', refresh);

export default router;
