// js/guard.js
/* Direciona para o modal de login se o usuário não estiver autenticado */
export const requireAuth = () => {
  if (!localStorage.getItem('token')) {
    document.getElementById('authModal')?.classList.add('active');
    throw new Error('Usuário não autenticado');
  }
};
/* Direciona para a página de login se o usuário não estiver autenticado - add futuramente */
/* export const requireAuth = () => {
  if (!localStorage.getItem('token')) {
    location.href = '/login.html';
  }
}; */
