// public/js/config/auth.js
import { toast } from '../components/toast.js';
import { API_URL } from './api.js';

document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  /* ================= HELPERS ================= */
  const request = async (endpoint, payload) => {
    const res = await fetch(`${API_URL}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error();
    return res.json();
  };

  const saveSession = ({ accessToken, user }) => {
    localStorage.setItem('token', accessToken);
    localStorage.setItem('user', JSON.stringify(user));
  };

  /* ================= SWITCH LOGIN / REGISTER ================= */
  document.addEventListener('click', (e) => {
    const sw = e.target.closest('.switch');
    if (!sw) return;

    document
      .querySelectorAll('.auth-form')
      .forEach((f) => f.classList.remove('active'));

    const target = sw.dataset.target === 'login' ? loginForm : registerForm;

    target?.classList.add('active');
  });

  /* ================= LOGIN ================= */
  loginForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(loginForm));

    try {
      const json = await request('/auth/login', data);
      saveSession(json);
      toast('Login realizado com sucesso!', 'success');
      location.reload();
    } catch {
      toast('Credenciais inválidas', 'error');
    }
  });

  /* ================= REGISTER ================= */
  registerForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(registerForm));

    try {
      await request('/auth/register', data);
      toast('Conta criada com sucesso!', 'success');

      const json = await request('/auth/login', {
        username: data.username,
        password: data.password,
      });

      saveSession(json);
      location.reload();
    } catch {
      toast('Erro ao criar conta', 'error');
    }
  });
});
