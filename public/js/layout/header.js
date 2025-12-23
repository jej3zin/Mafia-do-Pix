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
});
