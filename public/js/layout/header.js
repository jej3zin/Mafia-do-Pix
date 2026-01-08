// public/js/layout/header.js
import { getSession } from '../config/session.js';

const openNotif = document.getElementById('openNotif');
const notifModal = document.getElementById('notifModal');
const closeNotif = document.getElementById('closeNotif');
const notifContent = document.getElementById('notifContent');

// 🔥 CONFIGURA AQUI
const GITHUB_USER = 'jej3zin';
const GITHUB_REPO = 'Mafia-do-Pix';

async function loadLatestRelease() {
  try {
    const res = await fetch(
      `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/releases/latest`
    );

    if (!res.ok) throw new Error('Sem release');

    const data = await res.json();

    const rawMarkdown = data.body || 'Sem descrição.';
    const html = DOMPurify.sanitize(marked.parse(rawMarkdown));

    notifContent.innerHTML = `
  <div class="markdown-body">
    ${html}
  </div>
  <a href="${data.html_url}" target="_blank">Ver no GitHub →</a>
`;
  } catch (err) {
    notifContent.innerHTML = `
      <p>🚧 Nenhuma release publicada ainda.</p>
      <a href="https://github.com/${GITHUB_USER}/${GITHUB_REPO}" target="_blank">
        Ver repositório →
      </a>
    `;
  }
}

openNotif.addEventListener('click', async () => {
  notifModal.classList.remove('hidden');
  notifContent.innerHTML =
    '<p>Carregando release…</p> || Não foi possível carregar a release.';
  await loadLatestRelease();
});

closeNotif.addEventListener('click', () => {
  notifModal.classList.add('hidden');
});

// Fecha clicando fora
notifModal.addEventListener('click', (e) => {
  if (e.target === notifModal) {
    notifModal.classList.add('hidden');
  }
});

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
