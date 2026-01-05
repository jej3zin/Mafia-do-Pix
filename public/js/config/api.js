// config/api.js
const API_URL =
  location.hostname === 'localhost'
    ? 'http://localhost:3333'
    : 'https://mafia-api.onrender.com';

window.API_URL = API_URL;

export { API_URL };
