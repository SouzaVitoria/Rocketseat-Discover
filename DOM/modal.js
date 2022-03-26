const buttonOpenModal = document.getElementById("openModal");
const modalWrapper = document.querySelector(".modal-wrapper");

buttonOpenModal.onclick = function showModal() {
  modalWrapper.classList.remove("invisible");
};

document.addEventListener('keydown', (event) => {
  const isEscKey = event.key === 'Escape';
  if (isEscKey) modalWrapper.classList.add('invisible');
})
