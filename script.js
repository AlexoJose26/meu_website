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

/* DARK MODE */
const toggleBtn = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.replace("fa-moon", "fa-sun");
  } else {
    themeIcon.classList.replace("fa-sun", "fa-moon");
  }
});

/* CAROUSEL */
document.querySelectorAll('.carousel').forEach(carousel => {
  const track = carousel.querySelector('.carousel-track');
  const items = carousel.querySelectorAll('.item');
  const prev = carousel.querySelector('.prev');
  const next = carousel.querySelector('.next');

  let index = 0;

  function update() {
    const width = items[0].offsetWidth + 20;
    track.style.transform = `translateX(${-index * width}px)`;
  }

  next.addEventListener('click', () => {
    if (index < items.length - 1) index++;
    update();
  });

  prev.addEventListener('click', () => {
    if (index > 0) index--;
    update();
  });
});
