export function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

export function formatDate(date) {
  return new Date(date).toLocaleDateString('pt-BR');
}

export function isValidUsername(username) {
  return /^[a-zA-Z0-9_]{3,20}$/.test(username);
}
