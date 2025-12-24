// server/src/app.js
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';
import postRoutes from './routes/post.routes.js';
import interactionRoutes from './routes/interaction.routes.js';
import { auth } from './middleware/auth.middleware.js';
import { errorHandler } from './middleware/error.middleware.js';
import { limiter } from './middleware/rateLimit.middleware.js';

const app = express();

app.use(express.static('public'));

// Configura CORS
app.use(
  cors({
    origin: 'https://mafiadopix.netlify.app',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'], // adicione headers que você usa
  })
);
app.options('/*', cors()); // libera qualquer preflight

app.use(helmet());
app.use(express.json());

app.use('/auth', authRoutes);
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/interactions', interactionRoutes);
app.use(limiter);
app.use(errorHandler);

export default app;
