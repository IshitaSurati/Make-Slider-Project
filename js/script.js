let currentIndex = 0;

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;

// Update slider position
const updateSlider = () => {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
};

// Next slide
const nextSlide = () => {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlider();
};

// Previous slide
const prevSlide = () => {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateSlider();
};

// Auto slider
setInterval(nextSlide, 7000);
