let currentIndex = 0;

function moveSlide(direction) {
  const carousel = document.querySelector('.carousel');
  const totalItems = document.querySelectorAll('.carousel-item').length;

  currentIndex += direction;

  if (currentIndex < 0) {
    currentIndex = totalItems - 1;
  } else if (currentIndex >= totalItems) {
    currentIndex = 0;
  }

  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}