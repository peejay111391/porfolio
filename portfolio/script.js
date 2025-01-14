// GSAP Animation for Sliding Background
const header = document.querySelector('#header');
const images = ['header1.jpg', 'header2.jpg', 'header3.jpg'];
let currentIndex = 0;

function changeHeaderBackground() {
  gsap.to(header, {
    duration: 1,
    backgroundImage: `url(${images[currentIndex]})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  });

  currentIndex = (currentIndex + 1) % images.length;
}

// Change background every 5 seconds
setInterval(changeHeaderBackground, 5000);

// Portfolio Slider
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function moveToNextSlide() {
  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${currentSlide * 100}%)`;
  });

  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(moveToNextSlide, 3000);
