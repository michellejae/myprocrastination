let ngnixButton = document.querySelector('#ngnix');
let ngnixModal = document.querySelector('#nginx-image');
let securityButton = document.querySelector('#security');
let securityModal = document.querySelector('#security-image');
let meButton = document.querySelector('#me');
let meModal = document.querySelector('#me-image');

let textContainer = document.querySelector('#text-container');
let closeButtons = document.querySelectorAll('.close');
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



function closeModal(e){
    let parent = e.target.parentElement
    parent.classList.toggle("off");
    textContainer.classList.toggle("blur");
}

closeButtons.forEach(closeB => closeB.addEventListener('click', closeModal))

