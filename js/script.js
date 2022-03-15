
function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();

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



