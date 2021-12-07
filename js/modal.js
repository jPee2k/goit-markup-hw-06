(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }

  function closeModal(evt) {
    if (evt.key === 'Escape' || evt.target.getAttribute('data-modal') === '') {
      refs.modal.classList.add('is-hidden');
    }
  }

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.modal.addEventListener('click', closeModal);
  document.addEventListener('keyup', closeModal);
})();
