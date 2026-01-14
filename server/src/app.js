// server/src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import interactionRoutes from './routes/interaction.routes.js';
import { errorHandler } from './middleware/error.middleware.js';
import { limiter } from './middleware/rateLimit.middleware.js';

const app = express();

app.use(
  cors({
    origin: 'https://mafiadopix.netlify.app',
  })
);

app.use((req, res, next) => {
  if (req.method === 'OPTIONS') {
    return res.sendStatus(204);
  }
  next();
});

app.use(express.static('public'));

app.use(helmet());
app.use(express.json());

app.use(limiter);

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/interactions', interactionRoutes);
app.use(errorHandler);

export default app;
