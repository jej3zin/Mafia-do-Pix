import { Router } from 'express';
import { auth } from '../middleware/auth.middleware.js';
import { UserModel } from '../models/user.model.js';

const router = Router();

/* router.get('/username/:username', getByUsername); */
router.get('/:username', async (req, res) => {
  const user = await UserModel.findPublicProfile(req.params.username);
  res.json(user.rows[0]);
});

router.put('/me', auth, async (req, res) => {
  await UserModel.updateProfile(req.userId, req.body);
  res.sendStatus(204);
});

export default router;
