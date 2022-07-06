const openButton = document.querySelector('.more-btn');
const closeButton = document.querySelector('#close-btn');
const popup = document.querySelector('.popup');


const openPopup = (popup) => {
if (popup === null) return;
popup.classList.add('active');
}

const closePopup = (popup) => {
if (popup === null) return;
popup.classList.remove('active');
}

openButton.addEventListener('click', () => {
const popup = document.querySelector('.popup');
openPopup(popup);
})

closeButton.addEventListener('click', () => {
const popup = document.querySelector('.popup');
closePopup(popup);
})