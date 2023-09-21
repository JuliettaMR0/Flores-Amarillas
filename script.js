<<<<<<< HEAD
const flowers = document.querySelectorAll(".flower");
const flowerTexts = [
  "No importa cuantas flores ponga.",
  "Ninguna va a llegar hacer.",
  "Tan bonita como vos.",
];

flowers.forEach((flower, index) => {
  const flowerText = document.createElement("div");
  flowerText.classList.add("flower-text");
  flowerText.textContent = flowerTexts[index];
  flower.appendChild(flowerText);

  flower.addEventListener("click", () => {
    flowers.forEach((otherFlower, otherIndex) => {
      if (otherIndex !== index) {
        otherFlower.classList.remove("blooming");
        otherFlower.querySelector(".flower-text").style.opacity = 0;
      }
    });

    flower.classList.toggle("blooming");

    if (flower.classList.contains("blooming")) {
      flowerText.style.opacity = 1;
    } else {
      flowerText.style.opacity = 0;
    }
  });
=======
// const flowers = document.querySelectorAll('.flower');

// flowers.forEach(flower => {
//     flower.addEventListener('click', () => {
//         flower.classList.add('blooming');
//         setTimeout(() => {
//             flower.classList.remove('blooming');
//         }, 1000); // La animación dura 1 segundo (1000 milisegundos)
//     });
// });
const flowers = document.querySelectorAll('.flower');
const flowerTexts = [
    'No importa cuantas flores ponga.',
    'Ninguna va a llegar hacer.',
    'Tan bonita como vos.'
];

flowers.forEach((flower, index) => {
    const flowerText = document.createElement('div');
    flowerText.classList.add('flower-text');
    flowerText.textContent = flowerTexts[index];
    flower.appendChild(flowerText);
    
    flower.addEventListener('click', () => {
        flowers.forEach((otherFlower, otherIndex) => {
            if (otherIndex !== index) {
                otherFlower.classList.remove('blooming');
                otherFlower.querySelector('.flower-text').style.opacity = 0;
            }
        });
        
        flower.classList.toggle('blooming');
        
        if (flower.classList.contains('blooming')) {
            flowerText.style.opacity = 1;
        } else {
            flowerText.style.opacity = 0;
        }
    });
>>>>>>> 6eb106dec2258e8774022038407033be9a049b6c
});

/* PARTE DE LA GALERIA, AIUDA NOS E QUEH AGO */

<<<<<<< HEAD
const imageGallery = document.querySelector(".image-gallery");
const images = imageGallery.querySelectorAll("img");
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove("active");
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add("active");
}

// Mostrar la primera imagen al cargar la página
images[currentImageIndex].classList.add("active");
=======
const imageGallery = document.querySelector('.image-gallery');
const images = imageGallery.querySelectorAll('img');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

// Mostrar la primera imagen al cargar la página
images[currentImageIndex].classList.add('active');
>>>>>>> 6eb106dec2258e8774022038407033be9a049b6c

// Cambiar la imagen cada 3 segundos (3000 milisegundos)
setInterval(showNextImage, 3000);

<<<<<<< HEAD
/*FIN DE LA ANIMACION DE LAS FLORES*/
=======
>>>>>>> 6eb106dec2258e8774022038407033be9a049b6c
