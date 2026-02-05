// components/search.js
import { escapeHTML } from '../utils/index.js';
import { mockUsers, mockPosts } from '../mock-db.js';

const input = document.getElementById('searchInput');
const resultsBox = document.getElementById('searchResults');
const clearIcon = document.querySelector('.clear-icon');

let debounceTimer;

/* ========= INPUT ========= */
if (input) {
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);

    const q = input.value.trim();

    if (q.length < 2) {
      clearResults();
      return;
    }

    debounceTimer = setTimeout(() => search(q), 300);
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') clearResults();
  });
}

/* ========= CLEAR ========= */
clearIcon?.addEventListener('click', () => {
  if (input) input.value = '';
  clearResults();
});

document.addEventListener('click', (e) => {
  if (resultsBox && !resultsBox.contains(e.target) && e.target !== input) {
    clearResults();
  }
});

/* ========= SEARCH ========= */
async function search(q) {
  if (!resultsBox) return;

  showLoading();

  const qLower = q.toLowerCase();

  const users = mockUsers.filter(
    (u) =>
      (u.username || '').toLowerCase().includes(qLower) ||
      (u.name || '').toLowerCase().includes(qLower),
  );

  const posts = mockPosts.filter((p) =>
    (p.content || '').toLowerCase().includes(qLower),
  );

  renderResults(users, posts, q);
}

/* ========= LOADING ========= */
function showLoading() {
  if (!resultsBox) return;

  resultsBox.innerHTML = `
    <div class="skeleton">Carregando...</div>
    <div class="skeleton">Carregando...</div>
  `;
  resultsBox.classList.add('show');
}

/* ========= RENDER ========= */
function renderResults(users, posts, query) {
  if (!resultsBox) return;

  if (!users.length && !posts.length) {
    resultsBox.innerHTML = `<p class="empty">Nada encontrado</p>`;
    resultsBox.classList.add('show');
    return;
  }

  const highlight = (text = '') => {
    const safeQuery = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(${safeQuery})`, 'gi');
    return escapeHTML(text).replace(regex, '<mark>$1</mark>');
  };

  resultsBox.innerHTML = `
    ${users
      .slice(0, 5)
      .map(
        (u) => `
      <button class="search-item user" data-user="${escapeHTML(u.username)}">
        <strong>@${highlight(u.username)}</strong>
        <span>${highlight(u.name)}</span>
      </button>
    `,
      )
      .join('')}

    ${posts
      .slice(0, 5)
      .map((p) => {
        const preview =
          p.content?.length > 60
            ? p.content.slice(0, 60) + '...'
            : p.content || '';

        return `
      <button class="search-item post" data-post="${p.id}">
        <span>${highlight(preview)}</span>
      </button>
    `;
      })
      .join('')}
  `;

  resultsBox.classList.add('show');
}
bindSearchNavigation();

/* ========= NAVIGATION ========= */
function navigate(url) {
  if (location.pathname === url) return;

  history.pushState({}, '', url);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

/* ========= BINDS (EVENT DELEGATION) ========= */
function bindSearchNavigation() {
  if (!resultsBox) return;

  resultsBox.addEventListener('click', (e) => {
    const userBtn = e.target.closest('.user');
    const postBtn = e.target.closest('.post');

    if (userBtn) {
      navigate(`/@${userBtn.dataset.user}`);
      return;
    }

    if (postBtn) {
      navigate(`/post/${postBtn.dataset.post}`);
      return;
    }
  });
}

/* ========= CLEAR ========= */
function clearResults() {
  if (!resultsBox) return;

  resultsBox.innerHTML = '';
  resultsBox.classList.remove('show');
}
