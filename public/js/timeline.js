// arquivo temporário /js/timeline.js
import { mockUsers, mockPosts } from './mock-db.js';

const timeline = document.getElementById('timeline');

function getUser(userId) {
  return mockUsers.find((u) => u.id === userId);
}

export function renderTimeline({ tag = null } = {}) {
  if (!timeline) return;

  timeline.innerHTML = '';

  const posts = tag ? mockPosts.filter((p) => p.tags.includes(tag)) : mockPosts;

  posts.forEach((post) => {
    const user = getUser(post.userId);
    const isLong = post.content.length > 180;

    const el = document.createElement('article');
    el.className = 'post-card';

    el.innerHTML = `
      <header class="post-header">
        <div class="box-info-left">
          <img src="${user.avatar}" alt="${user.username}">
          <div>
            <strong>${user.name}</strong>
            <span>@${user.username}</span>
          </div>
        </div>

        <div class="box-info-right">
          <span>${post.createdAt}</span>
        </div>
      </header>

      <div class="post-body">
        <p class="post-content ${isLong ? 'collapsed' : ''}">
          ${post.content}
        </p>

        ${isLong ? `<button class="see-more">ver mais</button>` : ''}
      </div>

      <footer class="post-footer">
        <span><ion-icon name="heart"></ion-icon> ${post.likes}</span>
        <div class="post-tags">
          ${post.tags
            .map((t) => `<a href="/pages/${t}.html" class="tag">#${t}</a>`)
            .join('')}
        </div>
      </footer>
    `;

    timeline.appendChild(el);

    // 🔥 LÓGICA DO "VER MAIS" (por post)
    const btn = el.querySelector('.see-more');
    const content = el.querySelector('.post-content');

    if (btn && content) {
      btn.addEventListener('click', () => {
        const isCollapsed = content.classList.toggle('collapsed');
        btn.textContent = isCollapsed ? 'ver mais' : 'ver menos';
      });
    }
  });
}
