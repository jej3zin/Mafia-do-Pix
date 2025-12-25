//server/src/utils/hashpassword.js
import bcrypt from 'bcrypt';

/* Cria hash seguro da senha */
export const hashPassword = (password) => bcrypt.hash(password, 10);
/*  Compara senha plaintext com hash */
export const comparePassword = (password, hash) =>
  bcrypt.compare(password, hash);
