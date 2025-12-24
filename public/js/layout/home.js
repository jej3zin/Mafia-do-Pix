// public/js/layout/home.js
export function renderHome() {
  document.addEventListener('DOMContentLoaded', initProfile);

  async function initProfile() {
    const username = getUsernameFromURL();

    if (!username) {
      renderNotFound('URL inválida');
      return;
    }

    try {
      const res = await fetch(`${API_URL}/users/username/${username}`);

      if (res.status === 404) {
        renderNotFound('Usuário não encontrado');
        return;
      }

      if (!res.ok) {
        throw new Error('Erro inesperado');
      }

      const user = await res.json();

      renderProfile(user);
      renderFeed(user.posts || []);
    } catch (err) {
      console.error(err);
      renderNotFound('Erro ao carregar perfil');
    }
  }

  /* =======================
   URL RESOLVER
======================= */
  function getUsernameFromURL() {
    const path = location.pathname;

    if (!path.startsWith('/@')) return null;

    const username = path.slice(2); // remove "/@"
    if (!username || !isValidUsername(username)) {
      return null;
    }

    return username;
  }

  /* =======================
   RENDER PROFILE
======================= */
  function renderProfile(user) {
    document.title = `${user.name} (@${user.username})`;

    document.getElementById('profileName').textContent = user.name;
    document.getElementById('profileUsername').textContent =
      '@' + user.username;
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
        window.location.href = `/@${username}`;
      });
    });
  }

  /* ====================== NOT FOUND ====================== */
  function renderNotFound(message = 'Página não encontrada') {
    const root = document.getElementById('errorPage');

    document.title = '404 · Máfia do Pix';

    root.innerHTML = `
    <section class="error-page">
      <h1>404</h1>
      <p>${escapeHTML(message)}</p>

      <div class="error-actions">
        <a href="/" class="btn">Voltar ao início</a>
      </div>
    </section>
  `;

    root.classList.remove('pageErrorhidden');
  }
  const path = location.pathname;

  // remove barra final
  const cleanPath =
    path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;

  // ================= ROTAS =================
  if (cleanPath === '/' || cleanPath === '/feed') {
    renderHome();
  } else if (cleanPath.startsWith('/@')) {
    /* ===== PERFIL /@username ===== */
    const username = cleanPath.slice(2);

    if (!isValidUsername(username)) {
      renderNotFound('Usuário inválido');
    } else {
      initProfile(username);
    }
  } else {
    /* ===== FALLBACK ===== */
    renderNotFound('Página não encontrada');
  }
}
