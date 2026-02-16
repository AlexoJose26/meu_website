/* MENU MOBILE */
const menuIcon = document.querySelector('.menu-icon');
const ul = document.querySelector('.ul');

menuIcon.addEventListener('click', () => {
  ul.classList.toggle('ativo');

  const icon = menuIcon.querySelector('i');
  if (ul.classList.contains('ativo')) {
    icon.classList.replace('fa-bars', 'fa-xmark');
  } else {
    icon.classList.replace('fa-xmark', 'fa-bars');
  }
});

/* DARK MODE FUNCIONAL */
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    document.body.classList.remove("dark-mode");
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
}

toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark-mode");
  setTheme(isDark ? "light" : "dark");
  localStorage.setItem("theme", isDark ? "light" : "dark");
});

// Carregar tema salvo
if (localStorage.getItem("theme") === "dark") {
  setTheme("dark");
} else {
  setTheme("light");
}

/* CARROSSEL */
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const items = carousel.querySelectorAll('.item');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');

  let index = 0;

  function update() {
    const itemWidth = items[0].offsetWidth + 20;
    const visibleWidth = carousel.offsetWidth;
    const maxIndex = Math.max(0, items.length - Math.floor(visibleWidth / itemWidth));

    if(index > maxIndex) index = maxIndex;
    if(index < 0) index = 0;

    track.style.transform = `translateX(-${index * itemWidth}px)`;
  }

  next.addEventListener('click', () => { index++; update(); });
  prev.addEventListener('click', () => { index--; update(); });
  window.addEventListener('resize', update);

  update();
});
