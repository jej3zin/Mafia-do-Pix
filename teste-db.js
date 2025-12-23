import { pool } from './server/src/config/db.js';

(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('Conexão OK:', res.rows[0]);
  } catch (err) {
    console.error('Erro ao conectar:', err);
  } finally {
    pool.end();
  }
})();
