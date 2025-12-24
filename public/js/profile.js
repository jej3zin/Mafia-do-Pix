import { API_URL } from './config/api.js';
import { escapeHTML, formatDate, isValidUsername } from './utils/index.js';

document.addEventListener('DOMContentLoaded', initProfile);

async function initProfile() {
  const username = getUsernameFromURL();

  if (!username || !isValidUsername(username)) {
    renderNotFound();
    return;
  }

  try {
    const res = await fetch(`${API_URL}/users/username/${username}`);

    if (!res.ok) {
      renderNotFound();
      return;
    }

    const user = await res.json();

    renderProfile(user);
    renderFeed(user.posts || []);
  } catch (err) {
    console.error(err);
    renderNotFound();
  }
}

/* =======================
   URL RESOLVER
======================= */
function getUsernameFromURL() {
  const match = location.pathname.match(/\/@([\w-]+)/);
  return match ? match[1] : null;
}

/* =======================
   RENDER PROFILE
======================= */
function renderProfile(user) {
  document.title = `${user.name} (@${user.username})`;

  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileUsername').textContent = '@' + user.username;
  document.getElementById('profileBio').textContent = user.bio || '';

  document.getElementById('profileAvatar').src =
    user.avatar_url || '/public/img/default-avatar.png';

  document.getElementById('profileBanner').src =
    user.banner_url || '/public/img/default-banner.png';

  document.getElementById('profileSkeleton')?.remove();
  document.getElementById('profile')?.classList.remove('hidden');
}

/* ========= FEED ======== */
function renderFeed(posts) {
  const feed = document.getElementById('profileFeed');
  if (!feed) return;

  if (!posts.length) {
    feed.innerHTML = '<p class="empty">Nenhum post ainda.</p>';
    return;
  }

  feed.innerHTML = posts
    .map(
      (p) => `
      <article class="feed-post">
        <p>${escapeHTML(p.content)}</p>
        <div class="feed-meta">
          <span>${formatDate(p.created_at)}</span>
          <span>❤️ ${p.likes_count ?? 0}</span>
          <span>💬 ${p.comments_count ?? 0}</span>
        </div>
      </article>
    `
    )
    .join('');
}

/* =======================
   FRIENDS
======================= */
function renderFriends(user, allUsers) {
  const container = document.getElementById('profileFriends');
  if (!container) return;

  if (!user.friends?.length) {
    container.innerHTML = '<p class="empty">Sem amigos ainda 😶</p>';
    return;
  }

  const friends = allUsers.filter((u) => user.friends.includes(u.username));

  container.innerHTML = friends
    .map(
      (f) => `
      <button class="friend-card" data-user="${f.username}">
        <img src="${f.avatar}" alt="${f.name}" />
        <div>
          <strong>${escapeHTML(f.name)}</strong>
          <span>@${f.username}</span>
        </div>
      </button>
    `
    )
    .join('');

  bindFriendClicks(container);
}

function bindFriendClicks(container) {
  container.querySelectorAll('.friend-card').forEach((btn) => {
    btn.addEventListener('click', () => {
      const username = btn.dataset.user;
      window.location.href = `/profile/profile.html?user=${username}`;
    });
  });
}

/* =======================
   NOT FOUND
======================= */
function renderNotFound() {
  const root = document.getElementById('profileRoot');
  if (root) {
    root.innerHTML = '<p class="not-found">Usuário não encontrado</p>';
  }
}
