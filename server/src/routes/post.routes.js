import { Router } from 'express';
import { auth } from '../middleware/auth.middleware.js';
import { createPost, deletePost } from '../controllers/post.controller.js';

const router = Router();

router.post('/', auth, createPost);
router.delete('/:id', auth, deletePost);

export default router;
