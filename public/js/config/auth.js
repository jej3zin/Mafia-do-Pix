// public/js/config/auth.js
import { toast } from '../components/toast.js';
import { API_URL } from './api.js';

const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const switches = document.querySelectorAll('.switch');

/* ================= SWITCH LOGIN / REGISTER ================= */
switches.forEach((btn) => {
  btn.addEventListener('click', () => {
    document
      .querySelectorAll('.auth-form')
      .forEach((f) => f.classList.remove('active'));

    const target =
      btn.dataset.target === 'login' ? '#loginForm' : '#registerForm';

    document.querySelector(target).classList.add('active');
  });
});

/* ================= LOGIN ================= */
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(loginForm));

    try {
      const res = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        toast('Credenciais inválidas', 'error');
        return;
      }

      const json = await res.json();

      localStorage.setItem('token', json.accessToken);
      localStorage.setItem('user', JSON.stringify(json.user));

      toast('Login realizado com sucesso!', 'success');
      location.reload();
    } catch (err) {
      toast('Erro de conexão com o servidor', 'error');
    }
  });
}

/* ================= REGISTER ================= */
if (registerForm) {
  registerForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(registerForm));

    try {
      const res = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        toast('Erro ao criar conta', 'error');
        return;
      }

      toast('Conta criada com sucesso!', 'success');

      // auto-login
      const loginRes = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: data.username,
          password: data.password,
        }),
      });

      const json = await loginRes.json();

      localStorage.setItem('token', json.accessToken);
      localStorage.setItem('user', JSON.stringify(json.user));

      location.reload();
    } catch (err) {
      toast('Erro de conexão com o servidor', 'error');
    }
  });
}
