// config/api.js
export const API_URL =
  location.hostname === 'localhost'
    ? 'http://localhost:3333'
    : 'https://mafia-api.onrender.com';
