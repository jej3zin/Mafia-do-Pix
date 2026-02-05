// post.js
import { mockUsers, mockPosts } from './mock-db.js';
import { escapeHTML, formatDate } from './utils/index.js';

/* ========= ELEMENTOS ========= */
const container = document.getElementById('postContainer');
const skeleton = document.getElementById('postSkeleton');

/* ========= HELPERS ========= */
function getPostIdFromURL() {
  const parts = location.pathname.split('/');
  return parts[2]; // /post/ID
}

function findPost(postId) {
  return mockPosts.find((p) => String(p.id) === String(postId));
}

function findAuthor(userId) {
  return mockUsers.find((u) => u.id === userId);
}

/* ========= INIT ========= */
export function initPost() {
  try {
    const postId = getPostIdFromURL();

    if (!postId) {
      renderNotFound();
      return;
    }

    const post = findPost(postId);

    if (!post) {
      renderNotFound();
      return;
    }

    const author = findAuthor(post.userId);

    renderPost(post, author);
  } catch (err) {
    console.error('[POST PAGE ERROR]', err);
    renderError();
  } finally {
    skeleton?.remove();
  }
}

/* ========= RENDER ========= */
function renderPost(post, author) {
  document.title = `Post • ${author?.username || 'User'}`;

  container.innerHTML = `
    <article class="post-full">

      <div class="post-full-header">
        <img
          src="${author?.avatar || '/assets/default-avatar.png'}"
          class="post-avatar"
          alt="${escapeHTML(author?.username || 'user')}"
        />

        <div>
          <strong>${escapeHTML(author?.name || 'Usuário')}</strong>
          <span>@${escapeHTML(author?.username || 'unknown')}</span>
        </div>
      </div>

      <div class="post-full-content">
        <p>${escapeHTML(post.content)}</p>
      </div>

      <div class="post-full-meta">
        <span>${formatDate(post.createdAt)}</span>
        <span>❤️ ${post.likes ?? 0}</span>
        <span>💬 ${post.comments ?? 0}</span>
      </div>

    </article>
  `;
}

/* ========= STATES ========= */
function renderNotFound() {
  container.innerHTML = `
    <div class="post-notfound">
      <h2>Post não encontrado 💀</h2>
      <a href="/">Voltar para home</a>
    </div>
  `;
}

function renderError() {
  container.innerHTML = `
    <div class="post-error">
      <h2>Erro ao carregar post ⚠️</h2>
      <p>Tenta de novo mais tarde.</p>
    </div>
  `;
}
