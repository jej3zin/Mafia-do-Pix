// layout/header.js
/* 4-01 Open Profile via @username */
document.addEventListener('DOMContentLoaded', () => {
  const viewsBtn = document.getElementById('viewsBtn');

  if (!viewsBtn) return;

  viewsBtn.addEventListener('click', () => {
    const username = 'urubusfera';
    window.location.href = `/@${username}`;
  });
});

/* 4-02 Open HeadDrop */
document.addEventListener('DOMContentLoaded', () => {
  const openHeadDrop = document.getElementById('openHeadDrop');
  const headDropdown = document.getElementById('headDropdown');

  if (!openHeadDrop || !headDropdown) return;

  openHeadDrop.addEventListener('click', () => {
    headDropdown.classList.toggle('showDropdown');
  });
});
