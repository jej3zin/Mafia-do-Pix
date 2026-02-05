// public/js/router.js
import { renderHome } from './layout/home.js';
import { initProfile } from './profile.js';
import { isValidUsername } from './utils/index.js';
import { initPost } from './post.js';
import { openModal, closeModal } from './modal/modal.js';

function renderNotFound(msg) {
  const root = document.getElementById('errorPage');
  root.innerHTML = `<h1>404</h1><p>${msg}</p>`;
  root.classList.remove('pageErrorhidden');
}

async function runRouter() {
  const path = location.pathname.replace(/\/$/, '');

  if (path === '' || path === '/' || path === '/feed') {
    closeModal();
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
      renderNotFound('Erro ao carregar perfil');
    }
    return;
  }

  if (path.startsWith('/post/')) {
    const postId = path.split('/post/')[1];

    if (!postId) {
      renderNotFound('Post inválido');
      return;
    }

    openModal('post', postId);
    return;
  }

  // 👉 HOME
  closeModal();

  renderNotFound('Página não encontrada');
}

document.addEventListener('DOMContentLoaded', runRouter);
window.addEventListener('popstate', runRouter);
