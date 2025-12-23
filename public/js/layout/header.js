document.addEventListener('DOMContentLoaded', () => {
  /* ---------- PROFILE ---------- */
  const viewsBtn = document.getElementById('viewsBtn');
  if (viewsBtn) {
    viewsBtn.addEventListener('click', () => {
      const username = 'urubusfera';
      window.location.href = `/@${username}`;
    });
  }

  /* ---------- DROPDOWN ---------- */
  const openHeadDrop = document.getElementById('openHeadDrop');
  const headDropdown = document.getElementById('headDropdown');

  if (!openHeadDrop || !headDropdown) return;

  // ABRIR / FECHAR
  openHeadDrop.addEventListener('click', (e) => {
    e.stopPropagation(); // 🔥 ISSO AQUI SALVA VIDAS
    headDropdown.classList.toggle('showDropdown');
  });

  // CLIQUE FORA
  document.addEventListener('click', (e) => {
    if (!headDropdown.contains(e.target)) {
      headDropdown.classList.remove('showDropdown');
    }
  });

  // ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      headDropdown.classList.remove('showDropdown');
    }
  });

  /* ---------- AUTH MODAL ---------- */
  const loginBtn = document.getElementById('loginBtn');
  const authModal = document.getElementById('authModal');
  const closeAuth = document.getElementById('closeAuth');

  if (loginBtn && authModal) {
    loginBtn.addEventListener('click', (e) => {
      e.stopPropagation(); // evita fechar dropdown + modal
      authModal.classList.add('show');
      document.getElementById('headDropdown')?.classList.remove('showDropdown');
    });
  }

  if (closeAuth) {
    closeAuth.addEventListener('click', () => {
      authModal.classList.remove('show');
    });
  }

  // Fecha com ESC
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      authModal.classList.remove('show');
    }
  });

  // Fecha clicando fora
  authModal?.addEventListener('click', (e) => {
    if (e.target === authModal) {
      authModal.classList.remove('show');
    }
  });

  /* ---------- SWITCH LOGIN / REGISTER ---------- */
  const switches = document.querySelectorAll('.switch');
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  switches.forEach((sw) => {
    sw.addEventListener('click', () => {
      const target = sw.dataset.target;

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
});
