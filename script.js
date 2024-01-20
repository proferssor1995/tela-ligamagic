let currentIndex = 0;
const carouselItems = document.querySelectorAll('.carousel-item');

// function openImage(index) {
//     currentIndex = index;
//     const overlay = document.getElementById('overlay');
//     const overlayImage = document.getElementById('overlay-image');
//     const selectedImage = document.querySelector('.carousel-item:nth-child(' + (index + 1) + ') img').src;

//     overlayImage.src = selectedImage;
//     overlay.style.display = 'flex';

// }

function toggleFilter(index) {

    document.getElementById('overlay-image').src = images[index];

}

const images = [
    './Image/Placeholder/Desktop/Card_Carroussel1.png',
    './Image/Placeholder/Desktop/Card_Carroussel.png',
    './Image/Placeholder/Desktop/Carta_Counterspell.png'
];

function prevSlide() {          //função para navegar ao lado esquerdo
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
}

function nextSlide() {          //função para navegar ao lado direito
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
}

function updateCarousel() {     //atualizar o índice de seleção
    const overlayImage = document.getElementById('overlay-image');
    overlayImage.src = images[currentIndex];

 // Adiciona a classe 'selected' ao botão correspondente e destaca visualmente a imagem selecionada
 const buttons = document.querySelectorAll('.carousel-button');
 buttons.forEach((button, index) => {
     button.classList.remove('selected');
     if (index === currentIndex) {
         button.classList.add('selected');
     }
 });

 // Adiciona uma borda à imagem selecionada
 const carouselItems = document.querySelectorAll('.carousel-item');
 carouselItems.forEach((item, index) => {
     item.classList.remove('selected');
     if (index === currentIndex) {
         item.classList.add('selected');
     }
 });
}

function increment() {
    var input = document.getElementById('quantity');
    input.value = parseInt(input.value, 10) + 1;
  }
  
  function decrement() {
    var input = document.getElementById('quantity');
    input.value = Math.max(parseInt(input.value, 10) - 1, 1);
  }
  