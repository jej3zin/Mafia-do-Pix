// profile.js
import { mockUsers, mockPosts } from './mock-db.js';
import { escapeHTML, formatDate } from './utils/index.js';

/* ========= HELPERS ========= */
function getUsernameFromURL() {
  return location.pathname.replace(/^\/@/, '').replace(/\/$/, '').toLowerCase();
}

/* ========= INIT ========= */
export function initProfile(usernameParam, root = document) {
  const username = (usernameParam || getUsernameFromURL()).toLowerCase();

  /* DOM SAFE (SPA SAFE) */
  const header = root.querySelector('#profileHeader');
  const postsBox = root.querySelector('#profilePosts');
  const skeleton = root.querySelector('#profileSkeleton');

  if (!header || !postsBox) {
    console.warn('Profile DOM não encontrado');
    return;
  }

  const user = mockUsers.find((u) => u.username.toLowerCase() === username);

  if (!user) {
    header.innerHTML = `<p>Usuário não encontrado 💀</p>`;
    return;
  }

  const posts = mockPosts
    .filter((p) => p.userId === user.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  renderProfile(user, header);
  renderPosts(posts, postsBox);

  if (skeleton) skeleton.classList.add('hidden');
}

/* ========= RENDER USER ========= */
function renderProfile(user, header) {
  document.title = `${user.name} (@${user.username})`;

  header.innerHTML = `
    <div class="profile-head">
      <img 
        src="${user.avatar}" 
        class="profile-avatar"
        alt="${escapeHTML(user.username)}"
      >

      <div class="profile-head-info">
        <h2>@${escapeHTML(user.username)}</h2>
        <p>${escapeHTML(user.name)}</p>

        ${user.bio ? `<p class="profile-bio">${escapeHTML(user.bio)}</p>` : ''}

        <div class="profile-stats">
          <span><strong>${user.followers ?? 0}</strong> seguidores</span>
          <span><strong>${user.following ?? 0}</strong> seguindo</span>
        </div>
      </div>
    </div>
  `;
}

/* ========= MODAL RENDER ========= */
export function renderProfileModal(username, root) {
  root.innerHTML = `
    <div class="profile-modal">
      <div id="profileHeader"></div>
      <div id="profilePosts"></div>
    </div>
  `;

  initProfile(username, root);
}

/* ========= POSTS ========= */
function renderPosts(posts, postsBox) {
  if (!posts.length) {
    postsBox.innerHTML = `<p class="empty">Nenhum post ainda.</p>`;
    return;
  }

  postsBox.innerHTML = posts
    .map(
      (p) => `
    <article class="profile-post" data-post="${p.id}">
      <p>${escapeHTML(p.content)}</p>

      <div class="post-meta">
        <span>${formatDate(p.createdAt)}</span>
        <span>❤️ ${p.likes ?? 0}</span>
        <span>💬 ${p.comments ?? 0}</span>
      </div>
    </article>
  `,
    )
    .join('');

  bindPostClicks(postsBox);
}

/* ========= EVENTS ========= */
function bindPostClicks(postsBox) {
  postsBox.querySelectorAll('.profile-post').forEach((el) => {
    el.addEventListener('click', () => {
      const id = el.dataset.post;
      if (!id) return;

      history.pushState({}, '', `/post/${id}`);
      window.dispatchEvent(new PopStateEvent('popstate'));
    });
  });
}
