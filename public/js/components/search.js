import { API_URL } from '../config/api.js';
import { escapeHTML } from '../utils/index.js';

const input = document.getElementById('searchInput');
const resultsBox = document.getElementById('searchResults');
const clearIcon = document.querySelector('.clear-icon');

let debounceTimer;

if (input) {
  input.addEventListener('input', () => {
    clearTimeout(debounceTimer);

    const q = input.value.trim();

    if (q.length < 2) {
      // busca só quando >=2 chars
      clearResults();
      return;
    }

    debounceTimer = setTimeout(() => search(q), 300);
  });
}

clearIcon?.addEventListener('click', () => {
  input.value = '';
  clearResults();
});

document.addEventListener('click', (e) => {
  if (!resultsBox.contains(e.target) && e.target !== input) {
    clearResults();
  }
});

async function search(q) {
  try {
    showLoading(); // loading skeleton

    const [usersRes, postsRes] = await Promise.all([
      fetch(`${API_URL}/users/search?q=${encodeURIComponent(q)}`),
      fetch(`${API_URL}/posts/search?q=${encodeURIComponent(q)}`),
    ]);

    const users = usersRes.ok ? await usersRes.json() : [];
    const posts = postsRes.ok ? await postsRes.json() : [];

    renderResults(users, posts, q); // highlight
  } catch (err) {
    console.error('Search error', err);
  }
}

function showLoading() {
  resultsBox.innerHTML = `
    <div class="skeleton">Carregando...</div>
    <div class="skeleton">Carregando...</div>
    <div class="skeleton">Carregando...</div>
  `;
  resultsBox.classList.add('show');
}

function renderResults(users, posts, query) {
  if (!users.length && !posts.length) {
    resultsBox.innerHTML = `<p class="empty">Nada encontrado</p>`;
    resultsBox.classList.add('show');
    return;
  }

  const highlight = (text) => {
    const regex = new RegExp(`(${query})`, 'gi');
    return escapeHTML(text).replace(regex, '<mark>$1</mark>');
  };

  resultsBox.innerHTML = `
    ${users
      .map(
        (u) => `
      <button class="search-item user" data-user="${u.username}">
        <strong>@${highlight(u.username)}</strong>
        <span>${highlight(u.name)}</span>
      </button>
    `
      )
      .join('')}

    ${posts
      .map(
        (p) => `
      <button class="search-item post" data-post="${p.id}">
        <span>${highlight(p.content.slice(0, 60))}...</span>
      </button>
    `
      )
      .join('')}
  `;

  resultsBox.classList.add('show');
  bindClicks();
}

function bindClicks() {
  resultsBox.querySelectorAll('.search-item.user').forEach((btn) => {
    btn.onclick = () => {
      window.location.href = `/@${btn.dataset.user}`;
    };
  });

  resultsBox.querySelectorAll('.search-item.post').forEach((btn) => {
    btn.onclick = () => {
      window.location.href = `/post/${btn.dataset.post}`;
    };
  });
}

function clearResults() {
  resultsBox.innerHTML = '';
  resultsBox.classList.remove('show');
}
