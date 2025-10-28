const slideshow = document.getElementById("slideshow");

// Anzahl der Bilder (0.jpg bis 22.jpg)
const imageCount = 24;

// Bildpfade generieren
let images = [];
for (let i = 0; i < imageCount; i++) {
  images.push(`images/${i}.jpg`);
}

// Fisher–Yates-Shuffle (zufällige Reihenfolge)
for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

// Slideshow-Bilder ins DOM einfügen
images.forEach((src, index) => {
  const div = document.createElement("div");
  div.classList.add("slide");
  div.style.backgroundImage = `url('${src}')`;
  if (index === 0) div.classList.add("active");
  slideshow.appendChild(div);
});

// Automatischer Wechsel
let current = 0;
setInterval(() => {
  const slides = document.querySelectorAll(".slide");
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 5000); // alle 5 Sekunden
