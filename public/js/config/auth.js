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

    const data = await res.json().catch(() => null);

    if (!res.ok) {
      throw new Error(data?.error || 'Erro na requisição');
    }

    return data;
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
    console.log('SUBMIT OK');

    const data = Object.fromEntries(new FormData(loginForm));

    // 🚫 validação mínima
    if (!data.username || !data.password) {
      toast('Preencha usuário e senha', 'error');
      return;
    }
    try {
      const json = await request('/auth/login', data);
      saveSession(json);
      toast('Login realizado com sucesso!', 'success');
      location.reload();
    } catch (err) {
      toast(err.message || 'Usuário ou senha inválidos', 'error');
    }
  });

  /* ================= REGISTER ================= */
  registerForm?.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log('SUBMIT OK');

    const data = Object.fromEntries(new FormData(registerForm));

    // 🚫 validação mínima
    if (!data.username || !data.password || !data.name) {
      toast('Preencha nome, usuário e senha', 'error');
      return;
    }

    // opcional: validação extra rápida
    if (data.password.length < 16) {
      toast('Senha muito curta (mínimo 16 caracteres)', 'error');
      return;
    }

    toast.loading('Criando conta...');

    try {
      await request('/auth/register', data);

      toast('Conta criada! Entrando...', 'success');

      const json = await request('/auth/login', {
        username: data.username,
        password: data.password,
      });

      saveSession(json);
      location.reload();
    } catch (err) {
      toast(err.message || 'Erro ao criar conta', 'error');
    } finally {
      toast.dismiss(); // 🔥 remove loader SEMPRE
    }
  });
});
