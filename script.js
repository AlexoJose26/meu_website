// MENU MOBILE
var menuIcon = document.querySelector('.menu-icon');
var ul = document.querySelector('.ul');

menuIcon.addEventListener('click',()=>{
  if(ul.classList.contains('ativo')){
    ul.classList.remove('ativo');
    document.querySelector('.menu-icon img').src ='images/menu1.png';
  }else{
    ul.classList.add('ativo');
    document.querySelector('.menu-icon img').src ='images/close1.png';
  }
});

// DARK MODE AUTOMÁTICO
const toggleBtn = document.getElementById("theme-toggle");

if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  document.body.classList.add("dark-mode");
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// SCROLL REVEAL
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
