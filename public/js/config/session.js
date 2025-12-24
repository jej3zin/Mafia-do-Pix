import { API_URL } from './api.js';

export const getSession = async () => {
  const token = localStorage.getItem('token');
  if (!token) return null;

  try {
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) throw new Error('Token inválido');

    return await res.json();
  } catch {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return null;
  }
};
