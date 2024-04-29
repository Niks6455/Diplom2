
//! Слайдер
let index = 0; 
const slides = document.querySelectorAll('.about_flex-item'); 
const dotes = document.querySelectorAll('.dot_circ');
function showSlide(i) {
    slides.forEach(slide => slide.classList.remove('active')); 
    slides[i].classList.add('active');
    dotes.forEach(dote => dote.classList.remove('active'));
    dotes[i].classList.add('active')
}

function nextSlide() {
    index++;
    if (index >= slides.length) index = 0; 
    showSlide(index);
}

function prevSlide() {
    index--;
    if (index < 0) index = slides.length - 1; 
    showSlide(index);
}

document.querySelector('.btn_next').addEventListener('click', nextSlide);
document.querySelector('.btn_prev').addEventListener('click', prevSlide);

showSlide(index);



//!список
let questionHeaders = document.querySelectorAll('.question_h3'); 
questionHeaders.forEach(header => {
    header.addEventListener('click', () => {
        if(header.classList.contains("close")){
            header.classList.remove('close');
            header.classList.add('open');
        }else{
            header.classList.add('close');
            header.classList.remove('open');
        }

    });
});


//! Анимации
const elements = document.querySelectorAll('#anim');
function checkScroll() {
  elements.forEach(element => {
    const elementPosition = element.getBoundingClientRect().top;
    if (elementPosition < window.innerHeight) {
      element.classList.add('animation');
    }
  });
}

window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

//!Плавный скролл
document.querySelectorAll('.jscorLink').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const href = this.getAttribute('href');
      const targetElement = document.querySelector(href);
      if(href == "#top"){
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
      }  if(href == "#portfolio"){
        const offset = targetElement.offsetTop - 150;
        window.scrollTo({
            top: offset,
            behavior: 'smooth'
          });
      }
      else{
        const offset = targetElement.offsetTop - 50;
        window.scrollTo({
          top: offset,
          behavior: 'smooth'
        });
      }
    });
  });