// layout/header.js
document.addEventListener('DOMContentLoaded', () => {
  const avatarBtn = document.getElementById('avatarBtn');

  if (!avatarBtn) return;

  avatarBtn.addEventListener('click', () => {
    const username = 'urubusfera';
    window.location.href = `/@${username}`;
  });
});
