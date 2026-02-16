/* MENU MOBILE */
const menuIcon = document.querySelector('.menu-icon');
const ul = document.querySelector('.ul');

menuIcon.addEventListener('click', () => {
  ul.classList.toggle('ativo');
});

/* DARK MODE */
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
    localStorage.setItem("theme", "dark");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
    localStorage.setItem("theme", "light");
  }
});

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeIcon.classList.replace("fa-moon", "fa-sun");
}

/* CARROSSEL MELHORADO */
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

  next.addEventListener('click', () => {
    index++;
    update();
  });

  prev.addEventListener('click', () => {
    index--;
    update();
  });

  window.addEventListener('resize', update);
});
