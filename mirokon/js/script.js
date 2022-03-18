const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu');
const menuLink = document.querySelectorAll('.menu__link');
const block = document.createElement('div');
const logo = document.querySelector('.header__logo');
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
   logo.classList.remove('inactive');

}))


function ibg() {
   let ibg = document.querySelectorAll(".ibg");
   for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
         ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
   }
}

ibg();

//===========================================
'use strict'

const button = document.querySelector('.offer__button')
const submitBtn = document.querySelector('.feedback__form_btn');

button.addEventListener('click', function (e) {
   const x = e.clientX
   const y = e.clientY

   const buttonTop = e.target.offsetTop
   const buttonLeft = e.target.offsetLeft

   const xInside = x - buttonLeft
   const yInside = y - buttonTop
   const circle = document.createElement('span')
   circle.classList.add('circle')
   circle.style.top = yInside + 'px'
   circle.style.left = xInside + 'px'
   this.appendChild(circle)
   setTimeout(() => circle.remove(), 500)

})

submitBtn.addEventListener('click', function (e) {
   if (nameInput.value !== '' && phoneInput.value !== '') {
      submitBtn.textContent = 'Отправлено'
      document.querySelectorAll('input').forEach((input) => {
         input.classList.remove('err')
      })
   }
   else {
      submitBtn.textContent = 'Введите данные'
      document.querySelectorAll('input').forEach((input) => {
         input.classList.add('err')
      })
   }

   setTimeout(() => submitBtn.textContent = 'Отправить', 2000)
})


//=====================при изменении размеорв
const headerRow = document.querySelector('.header__row');
const whatsapp = document.querySelector('.whatsapp');
const feedback = document.querySelector('.feedback');
const steps = document.querySelector('.steps');
const contacts = document.querySelector('.contacts-container')

let screenWidth = window.screen.width;
if (screenWidth <= 640) {
   if (!whatsapp.classList.contains("done")) {
      whatsapp.classList.add('done')
      menu.appendChild(whatsapp)
   }
}
if (screenWidth <= 977) {
   if (!feedback.classList.contains('done')) {
      steps.append(feedback);
      feedback.classList.add('done')
   }
}
window.addEventListener('resize', () => {
   screenWidth = window.screen.width;
   if (screenWidth <= 640) {
      if (!whatsapp.classList.contains("done")) {
         whatsapp.classList.add('done')
         menu.appendChild(whatsapp)
      }
   }
   if (screenWidth <= 977) {
      if (!feedback.classList.contains('done')) {
         steps.append(feedback);
         feedback.classList.add('done')
      }
   }
   if (screenWidth > 640) {
      if (whatsapp.classList.contains("done")) {
         whatsapp.classList.remove('done')
         headerRow.insertBefore(whatsapp, burger)
      }
   }

   if (screenWidth > 977) {
      if (feedback.classList.contains('done')) {
         feedback.classList.remove('done')
         contacts.append(feedback);
      }
   }
});


//========Обработка формы

const feedbackForm = document.forms.feedback;
const nameInput = feedbackForm.nameInput;
const phoneInput = feedbackForm.phoneInput;

document.addEventListener('DOMContentLoaded', () => {

   feedbackForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (nameInput.value !== '' && phoneInput.value !== '') {
         const urlSendMessage = `https://api.telegram.org/bot5153040242:AAErjR1cQlgPjACBVduFJvVooI_BOyZzimg/sendMessage?chat_id=1955156744&text= ${nameInput.value} ${phoneInput.value};`
         fetch(urlSendMessage)
         nameInput.value = '';
         phoneInput.value = ''
      }
   })
})