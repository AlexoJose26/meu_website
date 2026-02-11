const menuIcon = document.querySelector('.menu-icon');
const ul = document.querySelector('.ul');

function handleMenuDisplay() {
  if (window.innerWidth <= 900) {
    menuIcon.style.display = 'flex';
    ul.classList.remove('ativo');
  } else {
    menuIcon.style.display = 'none';
    ul.classList.remove('ativo');
  }
}
handleMenuDisplay();
window.addEventListener('resize', handleMenuDisplay);

menuIcon.addEventListener('click', () => {
  ul.classList.toggle('ativo');
  menuIcon.querySelector('img').src = ul.classList.contains('ativo') ? 'images/close.png' : 'images/iconemenu.png';
});


const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
const body = document.body;

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
  body.classList.add("dark-mode");
  themeIcon.className = "fa-solid fa-sun";
} else {
  body.classList.remove("dark-mode");
  themeIcon.className = "fa-solid fa-moon";
}

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  if (body.classList.contains("dark-mode")) {
    themeIcon.className = "fa-solid fa-sun";
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.className = "fa-solid fa-moon";
    localStorage.setItem("theme", "light");
  }
});


function revealOnScroll() {
  document.querySelectorAll(".reveal").forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - 100) el.classList.add("active");
    else el.classList.remove("active");
  });
}
window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


function initAllCarousels() {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const items = track.children;
    const prevBtn = carousel.querySelector('.prev');
    const nextBtn = carousel.querySelector('.next');
    let index = 0;

    function update() {
      if (items.length === 0) return;
      const style = window.getComputedStyle(items[0]);
      const marginRight = parseInt(style.marginRight) || 20;
      const itemWidth = items[0].offsetWidth + marginRight;
      const visibleItems = Math.floor(carousel.offsetWidth / itemWidth);
      const maxIndex = Math.max(items.length - visibleItems, 0);
      index = Math.min(Math.max(index, 0), maxIndex);
      track.style.transition = "transform 0.5s ease";
      track.style.transform = `translateX(${-index * itemWidth}px)`;
    }

    prevBtn.addEventListener('click', () => { index--; update(); });
    nextBtn.addEventListener('click', () => { index++; update(); });
    window.addEventListener('resize', update);
    update();
  });
}

initAllCarousels();
