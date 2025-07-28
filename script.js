let currentIndex = 0;
let images = [];

window.onload = () => {
  images = Array.from(document.querySelectorAll(".gallery-item"));
};

function openLightbox(img) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "block";
  lightboxImg.src = img.src;
  currentIndex = images.indexOf(img);
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}

function navigate(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = images.length - 1;
  if (currentIndex >= images.length) currentIndex = 0;
  document.getElementById("lightbox-img").src = images[currentIndex].src;
}

function filterImages(category) {
  const allImages = document.querySelectorAll(".gallery-item");
  allImages.forEach(img => {
    if (category === 'all' || img.classList.contains(category)) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}
