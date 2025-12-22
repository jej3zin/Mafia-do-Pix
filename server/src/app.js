import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import interactionRoutes from './routes/interaction.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';
import { limiter } from './middlewares/rateLimit.middleware.js';

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use(limiter);
app.use('/posts', postRoutes);
app.use('/interactions', interactionRoutes);
app.use(errorHandler);

export default app;
