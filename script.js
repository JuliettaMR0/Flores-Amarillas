// Selección de elementos
const flowers = document.querySelectorAll(".flower");
const flowerTexts = [
  "No importa cuántas flores ponga.",
  "Ninguna va a llegar a ser",
  "Tan bonita como vos.",
];

// Función para mostrar el texto de la flor
function toggleFlowerText(index) {
  flowers.forEach((flower, otherIndex) => {
    const flowerText = flower.querySelector(".flower-text");
    if (otherIndex !== index) {
      flower.classList.remove("blooming");
      flowerText.style.opacity = 0;
    }
  });

  const flower = flowers[index];
  const flowerText = flower.querySelector(".flower-text");
  flower.classList.toggle("blooming");

  if (flower.classList.contains("blooming")) {
    flowerText.style.opacity = 1;
  } else {
    flowerText.style.opacity = 0;
  }
}

// Agregar evento de clic a cada flor
flowers.forEach((flower, index) => {
  const flowerText = document.createElement("div");
  flowerText.classList.add("flower-text");
  flowerText.textContent = flowerTexts[index];
  flower.appendChild(flowerText);

  flower.addEventListener("click", () => {
    toggleFlowerText(index);
  });
});

// Galería de imágenes
const imageGallery = document.querySelector(".image-gallery");
const images = imageGallery.querySelectorAll("img");
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}

// Mostrar la primera imagen al cargar la página
images[currentImageIndex].classList;
