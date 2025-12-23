// public/js/config/auth.js
// js/guard.js
export const requireAuth = () => {
  if (!localStorage.getItem('token')) {
    location.href = '/login.html';
  }
};
