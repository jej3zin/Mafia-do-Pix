import { Router } from 'express';
import {
  login,
  register,
  me,
  refresh,
} from '../controllers/auth.controller.js';
import { auth } from '../middleware/auth.middleware.js';
import { me } from '../controllers/auth.controller.js'; // caminho correto pro seu controller
import { refresh } from '../controllers/auth.controller.js';

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.get('/me', auth, me);
router.post('/refresh', refresh);

export default router;
