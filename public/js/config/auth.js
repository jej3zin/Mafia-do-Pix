// public/js/config/auth.js
import { toast } from '../components/toast.js';
import { API_URL } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.querySelector('#loginForm');
  const registerForm = document.querySelector('#registerForm');

  /* ================= UTIL ================= */
  const request = async (url, data) => {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw res;
    return res.json();
  };

  const saveSession = (json) => {
    localStorage.setItem('token', json.accessToken);
    localStorage.setItem('user', JSON.stringify(json.user));
  };

  /* ================= SWITCH LOGIN / REGISTER ================= */
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.switch');
    if (!btn) return;

    document
      .querySelectorAll('.auth-form')
      .forEach((f) => f.classList.remove('active'));

    const target =
      btn.dataset.target === 'login' ? '#loginForm' : '#registerForm';

    document.querySelector(target)?.classList.add('active');
  });

  /* ================= LOGIN ================= */
  if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(loginForm));

      try {
        const json = await request(`${API_URL}/auth/login`, data);
        saveSession(json);
        toast('Login realizado com sucesso!', 'success');
        location.reload();
      } catch {
        toast('Credenciais inválidas', 'error');
      }
    });
  }

  /* ================= REGISTER ================= */
  if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const data = Object.fromEntries(new FormData(registerForm));

      try {
        await request(`${API_URL}/auth/register`, data);
        toast('Conta criada com sucesso!', 'success');

        // auto-login
        const json = await request(`${API_URL}/auth/login`, {
          username: data.username,
          password: data.password,
        });

        saveSession(json);
        location.reload();
      } catch {
        toast('Erro ao criar conta', 'error');
      }
    });
  }
});
