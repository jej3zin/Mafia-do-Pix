import pkg from 'pg';
import { env } from './env.js';

const { Pool } = pkg;

export const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl:
    process.env.NODE_ENV === 'production'
      ? { rejectUnauthorized: false }
      : false,
});

pool.on('connect', () => {
  console.log('🟢 PostgreSQL conectado');
});

pool.on('error', (err) => {
  console.error('🔴 Erro no PostgreSQL', err);
});
