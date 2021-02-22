let ngnixButton = document.querySelector('#ngnix');
let ngnixModal = document.querySelector('#nginx-image');
let textContainer = document.querySelector('#text-container');
let closeButton = document.querySelector('.close');
let modal = document.querySelector(".modal")

ngnixButton.addEventListener('click', () => {
    ngnixModal.classList.toggle("off");
    textContainer.classList.toggle("blur");
})

closeButton.addEventListener('click', () => {
    modal.classList.toggle("off");
    textContainer.classList.toggle("blur");
})