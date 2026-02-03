import { mockUsers, mockPosts } from './mock-db.js';
import { escapeHTML, formatDate } from './utils/index.js';

/* ========= ELEMENTOS ========= */
const header = document.getElementById('profileHeader');
const postsBox = document.getElementById('profilePosts');
const skeleton = document.getElementById('profileSkeleton');

/* ========= HELPERS ========= */
function getUsernameFromURL() {
  return location.pathname.replace(/^\/@/, '').replace(/\/$/, '').toLowerCase();
}

/* ========= INIT ========= */
export function initProfile() {
  const username = getUsernameFromURL();

  const user = mockUsers.find((u) => u.username.toLowerCase() === username);

  if (!user) {
    renderNotFound();
    return;
  }

  const posts = mockPosts
    .filter((p) => p.userId === user.id)
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  renderProfile(user);
  renderPosts(posts);

  skeleton?.remove();
}

/* ========= RENDER USER ========= */
function renderProfile(user) {
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

/* ========= POSTS ========= */
function renderPosts(posts) {
  if (!posts.length) {
    postsBox.innerHTML = `<p class="empty">Nenhum post ainda.</p>`;
    return;
  }

  postsBox.innerHTML = posts
    .map(
      (p) => `
    <article class="profile-post">
      <p>${escapeHTML(p.content)}</p>

      <div class="post-meta">
        <span>${formatDate(p.createdAt)}</span>
        <span>❤️ ${p.likes ?? 0}</span>
        <span>💬 ${p.comments ?? 0}</span>
      </div>
    </article>
  `
    )
    .join('');
}

/* ========= NOT FOUND ========= */
function renderNotFound() {
  skeleton?.remove();

  header.innerHTML = `
    <div class="profile-notfound">
      <h2>Usuário não encontrado 💀</h2>
      <a href="/index.html">Voltar</a>
    </div>
  `;
}
