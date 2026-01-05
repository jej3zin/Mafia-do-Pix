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

    const el = document.createElement('article');
    el.className = 'post-card';

    el.innerHTML = `
      <header class="post-header">
        <img src="${user.avatar}" alt="${user.username}">
        <div>
          <strong>${user.name}</strong>
          <span>@${user.username}</span>
        </div>
      </header>

      <p class="post-content">${post.content}</p>

      <footer class="post-footer">
        <span>❤️ ${post.likes}</span>
        <div class="post-tags">
          ${post.tags.map((t) => `<span class="tag">#${t}</span>`).join('')}
        </div>
      </footer>
    `;

    timeline.appendChild(el);
  });
}
