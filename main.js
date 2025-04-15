let currentIndex = 0;
const images = document.querySelectorAll(".gallery-slider img");
const totalImages = images.length;

function showSlide(index) {
  images.forEach((img, i) => {
    img.classList.remove("active");
    if (i === index) {
      img.classList.add("active");
    }
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalImages;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  showSlide(currentIndex);
}

setInterval(nextSlide, 5000);