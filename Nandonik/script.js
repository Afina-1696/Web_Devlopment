// script.js
const slider = document.querySelector('.slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
let slideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slider img');
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    slider.style.transform = `translateX(-${slideIndex * 100}%)`;
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

// Automatic sliding every 3 seconds
setInterval(nextSlide, 3000);

// Show the first slide initially
showSlide(slideIndex);
