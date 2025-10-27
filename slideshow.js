const slideshow = document.getElementById("slideshow");

const imageCount = 23;

let images = [];
for (let i = 1; i <= imageCount; i++) {
  images.push(images/${i}.jpg);
}

for (let i = images.length - 1; i > 0; i--) {
  const j = Math.floor(Math.random() * (i + 1));
  [images[i], images[j]] = [images[j], images[i]];
}

images.forEach((src, index) => {
  const div = document.createElement("div");
  div.classList.add("slide");
  div.style.backgroundImage = url('${src}');
  if (index === 0) div.classList.add("active");
  slideshow.appendChild(div);
});

let current = 0;
setInterval(() => {
  const slides = document.querySelectorAll(".slide");
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
  }, 5000); 
