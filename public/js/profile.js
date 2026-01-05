// public/js/profile.js
import { API_URL } from './config/api.js';
import { escapeHTML, formatDate } from './utils/index.js';

export async function initProfile(username) {
  const res = await fetch(`${API_URL}/users/username/${username}`);

  if (res.status === 404) {
    throw new Error('USER_NOT_FOUND');
  }

  if (!res.ok) {
    throw new Error('PROFILE_ERROR');
  }

  const user = await res.json();

  renderProfile(user);
  renderFeed(user.posts || []);
  renderFriends?.(user); // se usar
}

/* ========= RENDER PROFILE ======== */
function renderProfile(user) {
  document.title = `${user.name} (@${user.username})`;

  document.getElementById('profileName').textContent = user.name;
  document.getElementById('profileUsername').textContent = '@' + user.username;
  document.getElementById('profileBio').textContent = user.bio || '';

  document.getElementById('profileAvatar').src =
    user.avatar_url || '/img/default-avatar.png';

  document.getElementById('profileBanner').src =
    user.banner_url || '/img/default-banner.png';

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

/* ========= FRIENDS ======== */
function renderFriends(user) {
  const container = document.getElementById('profileFriends');
  if (!container || !user.friends?.length) return;

  container.innerHTML = user.friends
    .map(
      (f) => `
    <button class="friend-card" data-user="${f.username}">
      <strong>${escapeHTML(f.name)}</strong>
      <span>@${f.username}</span>
    </button>
  `
    )
    .join('');

  bindFriendClicks(container);
}

function bindFriendClicks(container) {
  container.querySelectorAll('.friend-card').forEach((btn) => {
    btn.onclick = () => {
      location.href = `/@${btn.dataset.user}`;
    };
  });
}
