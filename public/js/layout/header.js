import { getSession } from '../config/session.js';

document.addEventListener('DOMContentLoaded', async () => {
  /* ================= ELEMENTOS ================= */
  const viewsBtn = document.getElementById('viewsBtn');
  const openHeadDrop = document.getElementById('openHeadDrop');
  const headDropdown = document.getElementById('headDropdown');

  const loginBtn = document.getElementById('loginBtn');
  const authModal = document.getElementById('authModal');
  const closeAuth = document.getElementById('closeAuth');

  const hiUser = document.getElementById('hiUser');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');
  const switches = document.querySelectorAll('.switch');

  /* ================= DROPDOWN ================= */
  if (openHeadDrop && headDropdown) {
    openHeadDrop.addEventListener('click', (e) => {
      e.stopPropagation();
      headDropdown.classList.toggle('showDropdown');
    });

    document.addEventListener('click', (e) => {
      if (!headDropdown.contains(e.target)) {
        headDropdown.classList.remove('showDropdown');
      }
    });
  }

  /* ================= AUTH MODAL ================= */
  if (loginBtn && authModal) {
    loginBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      authModal.classList.add('show');
      headDropdown?.classList.remove('showDropdown');
    });
  }

  closeAuth?.addEventListener('click', () => {
    authModal?.classList.remove('show');
  });

  authModal?.addEventListener('click', (e) => {
    if (e.target === authModal) {
      authModal.classList.remove('show');
    }
  });

  /* ================= ESC GLOBAL ================= */
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      headDropdown?.classList.remove('showDropdown');
      authModal?.classList.remove('show');
    }
  });

  /* ================= SWITCH LOGIN / REGISTER ================= */
  switches.forEach((sw) => {
    sw.addEventListener('click', () => {
      const target = sw.dataset.target;

      if (!loginForm || !registerForm) return;

      if (target === 'register') {
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
      }

      if (target === 'login') {
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
      }
    });
  });

  /* ================= SESSION ================= */
  const user = await getSession();

  const logoutBtn = document.getElementById('logoutBtn');

  if (!user) {
    // DESLOGADO
    if (hiUser) hiUser.textContent = 'Visitante';
    if (loginBtn) loginBtn.style.display = 'flex';
    if (logoutBtn) logoutBtn.style.display = 'none';
    if (viewsBtn) viewsBtn.style.display = 'none';
    return;
  }

  // LOGADO
  if (hiUser) hiUser.textContent = user.name;
  if (loginBtn) loginBtn.style.display = 'none';
  if (logoutBtn) logoutBtn.style.display = 'flex';
  if (viewsBtn) viewsBtn.style.display = 'flex';

  // perfil
  viewsBtn.onclick = () => {
    window.location.href = `/@${user.username}`;
  };

  // logout
  logoutBtn.onclick = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    location.reload();
  };
});
