const slideContainer = document.getElementById('carousel-slide');
const slides = slideContainer.querySelectorAll('img');
let currentIndex = 0;

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function moveSlide(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = slides.length -1;
  } else if (currentIndex >= slides.length) {
    currentIndex = 0;
  }
  updateCarousel();
}

// Actualiza posición al cargar y al redimensionar la ventana
window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);
