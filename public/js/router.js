// public/js/router.js
import { renderHome } from './layout/home.js';
import { initProfile } from './profile.js';
import { isValidUsername } from './utils/index.js';

function renderNotFound(msg) {
  const root = document.getElementById('errorPage');
  root.innerHTML = `<h1>404</h1><p>${msg}</p>`;
  root.classList.remove('pageErrorhidden');
}

document.addEventListener('DOMContentLoaded', async () => {
  const path = location.pathname.replace(/\/$/, '');

  if (path === '' || path === '/' || path === '/feed') {
    renderHome();
    return;
  }

  if (path.startsWith('/@')) {
    const username = path.slice(2);

    if (!isValidUsername(username)) {
      renderNotFound('Usuário inválido');
      return;
    }

    try {
      await initProfile(username);
    } catch (err) {
      renderNotFound(
        err.message === 'USER_NOT_FOUND'
          ? 'Usuário não encontrado'
          : 'Erro ao carregar perfil'
      );
    }
    return;
  }

  renderNotFound('Página não encontrada');
});
