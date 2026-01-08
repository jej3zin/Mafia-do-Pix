// /js/components/toast.js
let toastTimeout;

const ICONS = {
  success: 'checkmark-circle',
  error: 'close-circle',
  info: 'information-circle',
};

export function toast(message, type = 'info', duration = 3000) {
  const root = document.getElementById('toast-root');
  if (!root) return;

  root.innerHTML = '';

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;

  const icon = document.createElement('ion-icon');
  icon.name = ICONS[type] || ICONS.info;
  icon.className = 'toast-icon';

  const text = document.createElement('div');
  text.className = 'toast-message';
  text.textContent = message;

  toast.appendChild(icon);
  toast.appendChild(text);

  root.appendChild(toast);

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('animationend', () => toast.remove());
  }, duration);
}
