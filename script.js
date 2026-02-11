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


const toggleBtn = document.getElementById("theme-toggle");

// Aplica dark mode automático baseado no sistema
if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});


function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal");
  reveals.forEach((element) => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const revealPoint = 100;
    if (elementTop < windowHeight - revealPoint) {
      element.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
