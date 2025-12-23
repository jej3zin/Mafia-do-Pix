// public/js/config/auth.js
// js/auth.js
import { toast } from '../components/toast.js';
import { API_URL } from './api.js';

const loginForm = document.querySelector('#loginForm');
const registerForm = document.querySelector('#registerForm');
const switches = document.querySelectorAll('.switch');

/* SWITCH LOGIN / REGISTER */
switches.forEach((btn) => {
  btn.onclick = () => {
    document
      .querySelectorAll('.auth-form')
      .forEach((f) => f.classList.remove('active'));

    document
      .querySelector(
        btn.dataset.target === 'login' ? '#loginForm' : '#registerForm'
      )
      .classList.add('active');
  };
});

/* LOGIN */
loginForm.onsubmit = async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(loginForm));

  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) return toast('Credenciais inválidas', 'error');
  toast('Login realizado com sucesso!', 'success');

  const json = await res.json();

  localStorage.setItem('token', json.accessToken);
  localStorage.setItem('user', JSON.stringify(json.user));

  location.reload(); // user logado na hora
};
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // 🔥 ESSENCIAL

  const data = Object.fromEntries(new FormData(loginForm));

  const res = await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) return toast('Erro no login', 'error');

  const json = await res.json();
  localStorage.setItem('token', json.accessToken);
  localStorage.setItem('user', JSON.stringify(json.user));
  location.reload();
});

/* REGISTER */
registerForm.onsubmit = async (e) => {
  e.preventDefault();

  const data = Object.fromEntries(new FormData(registerForm));

  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) return toast('Erro ao criar conta', 'error');
  toast('Conta criada com sucesso!', 'success');

  // auto-login depois de registrar
  await fetch(`${API_URL}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username: data.username,
      password: data.password,
    }),
  })
    .then((r) => r.json())
    .then((json) => {
      localStorage.setItem('token', json.accessToken);
      localStorage.setItem('user', JSON.stringify(json.user));
      location.reload();
    });
};
registerForm.addEventListener('submit', async (e) => {
  e.preventDefault(); // 🔥 ESSENCIAL

  const data = Object.fromEntries(new FormData(registerForm));

  const res = await fetch(`${API_URL}/auth/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!res.ok) return toast('Erro ao registrar', 'error');

  const json = await res.json();
  localStorage.setItem('token', json.accessToken);
  localStorage.setItem('user', JSON.stringify(json.user));
  location.reload();
});
