import 'dotenv/config';

export const env = {
  PORT: process.env.PORT || 3333,
  DATABASE_URL: process.env.DATABASE_URL,
  JWT_SECRET: process.env.JWT_SECRET,
  NODE_ENV: process.env.NODE_ENV || 'development',
};
