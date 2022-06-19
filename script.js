let modalOverlay1 = document.querySelector('.modal-overlay1');
let modalOverlay2 = document.querySelector('.modal-overlay2');
let modalOverlay3 = document.querySelector('.modal-overlay3');

const cards = document.querySelectorAll('.card');

for (let card of cards) {
    card.addEventListener('click', function() {
        const cardId = Number(card.getAttribute('id'));
        console.log(cardId)
        switch(cardId) {
            case 0:
                modalOverlay1.classList.add('active');
                break;
            case 1:
                modalOverlay2.classList.add('active');
                break;
            default:
                modalOverlay3.classList.add('active');   
                break; 
        };
    });
}

let closeModal1 = document.querySelector('.close-modal1');
let closeModal2 = document.querySelector('.close-modal2');
let closeModal3 = document.querySelector('.close-modal3');

closeModal1.addEventListener('click', function() {
    modalOverlay1.classList.remove('active')
})

closeModal2.addEventListener('click', function() {
    modalOverlay2.classList.remove('active')
})

closeModal3.addEventListener('click', function() {
    modalOverlay3.classList.remove('active')
})

