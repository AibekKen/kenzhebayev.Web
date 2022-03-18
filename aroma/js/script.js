
$(document).ready(function () {
   $('.header__burger').click(function (event) {
      $('.header__burger, .header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   });
   $('.header__list').click(function (event) {
      $('.header__burger,.header__menu').removeClass('active');
      $('body').removeClass('lock');
   })
});


function ibg() {

   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();

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
   // var dots = document.getElementsByClassName("dots"); - точки не нужны

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
}

setInterval(plusSlides, 15000, +1)

/*
"use strict"

document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let formData = new FormData(form);

      let response = await fetch('/sendmail.php', {
         method: 'POST',
         body: formData
      });

      if (response.ok) {
         let result = await response.json();
         alert(result.message);
         formPreview.innerHTML = '';
         form.reset();
      }
      else {
         alert("Ошибка из JS");
      }


   }


});*/

document.querySelector("form").addEventListener("submit", handleSubmit);

const handleSubmit = (e) => {
  e.preventDefault()
  let myForm = document.getElementById('form');
  let formData = new FormData(myForm)
  fetch('/', {
    method: 'POST',
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams(formData).toString()
  }).then(() => console.log('Form successfully submitted')).catch((error) =>
    alert(error))
}

