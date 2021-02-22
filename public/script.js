let ngnixButton = document.querySelector('#ngnix');
let ngnixModal = document.querySelector('#nginx-image');
let securityButton = document.querySelector('#security');
let securityModal = document.querySelector('#security-image');
let meButton = document.querySelector('#me');
let meModal = document.querySelector('#me-image');

let textContainer = document.querySelector('#text-container');
let closeButton = document.querySelector('.close');
let modal = document.querySelector(".modal");


ngnixButton.addEventListener('click', () => {
    ngnixModal.classList.toggle("off");
    textContainer.classList.toggle("blur");
})

securityButton.addEventListener('click', () => {
    securityModal.classList.toggle("off");
    textContainer.classList.toggle("blur");
})

meButton.addEventListener('click', () => {
    meModal.classList.toggle("off");
    textContainer.classList.toggle("blur");
})

closeButton.addEventListener('click', () => {
    modal.classList.toggle("off");
    textContainer.classList.toggle("blur");
})