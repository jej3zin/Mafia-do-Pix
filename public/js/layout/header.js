// public/js/layout/header.js
import { getSession } from '../config/session.js';

document.addEventListener('DOMContentLoaded', async () => {
  /* ================= ELEMENTOS ================= */
  const openHeadDrop = document.getElementById('openHeadDrop');
  const headDropdown = document.getElementById('headDropdown');
  const avatarImg = openHeadDrop?.querySelector('img');

  const loginBtn = document.getElementById('loginBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const viewsBtn = document.getElementById('viewsBtn');

  const authModal = document.getElementById('authModal');
  const closeAuth = document.getElementById('closeAuth');

  const hiUser = document.getElementById('hiUser');

  /* ================= DROPDOWN ================= */
  openHeadDrop?.addEventListener('click', (e) => {
    e.stopPropagation();
    headDropdown?.classList.toggle('showDropdown');
  });

  document.addEventListener('click', (e) => {
    if (
      !headDropdown?.contains(e.target) &&
      !openHeadDrop?.contains(e.target)
    ) {
      headDropdown?.classList.remove('showDropdown');
    }
  });

  /* ================= AUTH MODAL ================= */
  loginBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    authModal?.classList.add('show');
    headDropdown?.classList.remove('showDropdown');
  });

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
      authModal?.classList.remove('show');
      headDropdown?.classList.remove('showDropdown');
    }
  });

  /* ================= SESSION ================= */
  const user = await getSession();

  if (!user) {
    hiUser && (hiUser.textContent = 'Visitante');
    loginBtn && (loginBtn.style.display = 'flex');
    logoutBtn && (logoutBtn.style.display = 'none');
    viewsBtn && (viewsBtn.style.display = 'none');
    return;
  }

  // LOGADO
  hiUser && (hiUser.textContent = user.name);
  loginBtn && (loginBtn.style.display = 'none');
  logoutBtn && (logoutBtn.style.display = 'flex');
  viewsBtn && (viewsBtn.style.display = 'flex');

  viewsBtn.onclick = () => {
    window.location.href = `/@${user.username}`;
  };

  if (user.avatar_url && avatarImg) {
    avatarImg.src = user.avatar_url;
  }

  logoutBtn.onclick = async () => {
    const token = localStorage.getItem('token');

    await fetch(`${API_URL}/auth/logout`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    localStorage.clear();
    location.reload();
  };
});
