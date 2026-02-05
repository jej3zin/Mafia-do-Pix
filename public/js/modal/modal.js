/* ========= MODAL CORE ========= */

function getModalEls() {
  return {
    modal: document.getElementById('appModal'),
    modalContent: document.getElementById('appModalContent'),
    modalClose: document.getElementById('appModalClose'),
  };
}

/* ========= STATE ========= */

let currentType = null;
let currentId = null;

/* ========= OPEN ========= */

export async function openModal(type, id) {
  const { modal } = getModalEls();
  if (!modal) return;

  if (currentType === type && currentId === id) return;

  currentType = type;
  currentId = id;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  await renderContent(type, id);
}

/* ========= CLOSE ========= */

export function closeModal() {
  const { modal, modalContent } = getModalEls();
  if (!modal) return;

  modal.classList.add('hidden');
  document.body.style.overflow = '';

  if (modalContent) modalContent.innerHTML = '';

  currentType = null;
  currentId = null;
}

/* ========= RENDER SWITCH ========= */

async function renderContent(type, id) {
  const { modalContent } = getModalEls();
  if (!modalContent) return;

  try {
    modalContent.innerHTML = loadingTemplate();

    if (type === 'profile') {
      const { renderProfileModal } = await import('../profile.js');
      await renderProfileModal(id, modalContent);
    }

    if (type === 'post') {
      const { renderPostModal } = await import('../post.js');
      await renderPostModal(id, modalContent);
    }
  } catch (err) {
    console.error(err);
    modalContent.innerHTML = errorTemplate();
  }
}

/* ========= TEMPLATES ========= */

function loadingTemplate() {
  return `<div class="modal-loading">Carregando...</div>`;
}

function errorTemplate() {
  return `<div class="modal-error">Erro ao carregar conteúdo.</div>`;
}

/* ========= BINDS ========= */

document.addEventListener('click', (e) => {
  if (e.target.id === 'appModalClose') closeModal();
  if (e.target.dataset?.close) closeModal();
});

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});
