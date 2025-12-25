// server/src/routes/auth.routes.js
import { Router } from 'express';
import {
  login,
  register,
  me,
  refresh,
} from '../controllers/auth.controller.js';
import { auth } from '../middleware/auth.middleware.js';
import { logout } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/me', auth, me);
router.post('/refresh', refresh);
router.post('/logout', auth, logout);

export default router;
