import { Router } from 'express';
import { auth } from '../middleware/auth.middleware.js';
import {
  followUser,
  unfollowUser,
  likePost,
  unlikePost,
  commentPost,
  reportPost,
} from '../controllers/interaction.controller.js';

const router = Router();

router.post('/follow/:id', auth, followUser);
router.delete('/follow/:id', auth, unfollowUser);

router.post('/like/:id', auth, likePost);
router.delete('/like/:id', auth, unlikePost);

router.post('/comment/:id', auth, commentPost);
router.post('/report/:id', auth, reportPost);

export default router;
