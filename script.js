// ===========================
// MENU MOBILE
// ===========================
const menuIcon = document.querySelector('.menu-icon');
const ul = document.querySelector('.ul');

function handleMenuDisplay() {
  if (window.innerWidth <= 900) {
    menuIcon.style.display = 'block';
    ul.classList.remove('ativo');
  } else {
    menuIcon.style.display = 'none';
    ul.classList.remove('ativo');
  }
}
handleMenuDisplay();
window.addEventListener('resize', handleMenuDisplay);

menuIcon.addEventListener('click', () => {
  if (ul.classList.contains('ativo')) {
    ul.classList.remove('ativo');
    menuIcon.querySelector('img').src = 'images/menu1.png';
  } else {
    ul.classList.add('ativo');
    menuIcon.querySelector('img').src = 'images/close1.png';
  }
});

// ===========================
// TOGGLE TEMA CLARO/ESCURO
// ===========================
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Detecta preferência do sistema
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark-mode");
  themeIcon.className = "fa-solid fa-sun";
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeIcon.className = document.body.classList.contains("dark-mode")
    ? "fa-solid fa-sun"
    : "fa-solid fa-moon";
});

// ===========================
// REVEAL AO ROLAR
// ===========================
function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100; // distância antes de revelar
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// ===========================
// CARROSSEL
// ===========================
function initCarousel(carouselSelector) {
  const carousel = document.querySelector(carouselSelector);
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const items = track.children;
  const prevBtn = carousel.querySelector('.prev');
  const nextBtn = carousel.querySelector('.next');

  let index = 0;

  function updateCarousel() {
    if (items.length === 0) return;
    const style = window.getComputedStyle(items[0]);
    const marginRight = parseInt(style.marginRight) || 20;
    const itemWidth = items[0].offsetWidth + marginRight;
    const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
    const maxIndex = items.length - visibleItems;
    index = Math.max(0, Math.min(index, maxIndex));
    track.style.transform = `translateX(${-index * itemWidth}px)`;
  }

  prevBtn.addEventListener('click', () => {
    index--;
    updateCarousel();
  });

  nextBtn.addEventListener('click', () => {
    index++;
    updateCarousel();
  });

  window.addEventListener('resize', updateCarousel);
  updateCarousel();
}

// Inicializa os carrosseis
initCarousel('.construcao-carousel');
initCarousel('.lugares-carousel');
