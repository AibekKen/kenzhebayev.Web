
function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();

//=============== Анимация при загрузки страницы на главной
const mainTitle = document.querySelector('.main-screen__title');
const offerText = document.querySelector('.offer__text');
const orderBtn = document.querySelector('.offer__order-buttom');
const moreBtn = document.querySelector('.offer__more-buttom');
const mainImage = document.querySelector('.main-screen__image');

document.addEventListener("DOMContentLoaded", () => {
   mainTitle.classList.add('active');
   mainImage.classList.add('active');
   offerText.classList.add('active');
   orderBtn.classList.add('active');
   moreBtn.classList.add('active');

})




/* код для запуска анимации при появлении блока в зоне видимости. Хорошо для десктопа но трудно для мобильных
const aboutProductBody = document.querySelector('.about-product__body');
const labels = document.querySelectorAll('.label');
function show_onscroll() {
   let wt = window.scrollY;
   let wh = document.body.clientHeight;
   let eh = aboutProductBody.offsetHeight;
   let et = aboutProductBody.offsetTop;
   if (wt + wh > et + eh * 0.4)
      return true;
}

window.addEventListener('scroll', function (e) {
   if (show_onscroll()) {
      aboutProductBody.classList.add("active");
      labels.forEach((label) => label.classList.add("active"));
   }
});
*/
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuLink = document.querySelectorAll('.menu__link');
const block = document.createElement('div');
document.body.append(block);

burger.addEventListener('click', () => {
   burger.classList.toggle('active');
   menu.classList.toggle('active');
   document.body.classList.toggle('lock');
   block.classList.toggle('block');
})

menuLink.forEach((link, index) => link.addEventListener('click', () => {
   burger.classList.remove('active');
   menu.classList.remove('active');
   document.body.classList.remove('lock');
   block.classList.remove('block');
}))
//==================
const customersLink = document.querySelectorAll('.customers__link');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
   showSlides(slideIndex += n);
}

function currentSlide(n) {
   showSlides(slideIndex = n);
}

function showSlides(n) {
   var i;
   var slides = document.getElementsByClassName("mySlides");

   if (n > slides.length) {
      slideIndex = 1;
   }

   if (n < 1) {
      slideIndex = slides.length;
   }

   for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }

   /*для точек
   for(i=0; i < dots.length; i++){
      dots[i].className = dots[i].className.replace("active", "");
   }
   dots[slideIndex-1].className+= " active";
 */
   slides[slideIndex - 1].style.display = "block";
   for (let j = 0; j < customersLink.length; j++) {
      customersLink[j].classList.remove('active')
   }

   customersLink[slideIndex - 1].classList.add('active');

}

prev.addEventListener('click', () => plusSlides(-1));
next.addEventListener('click', () => plusSlides(1));


setInterval(plusSlides, 10000, +1)


customersLink.forEach((link, i) => {
   link.addEventListener('click', (e) => {
      e.preventDefault();
      currentSlide(i + 1);
   })
})
