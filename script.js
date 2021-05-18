'use strict';

///////////////////////////////////////////
// Time and Date

const textarea = document.getElementById('textarea');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 24 ? hours % 12 : hours;
  const minutes = time.getMinutes();
  // const seconds = time.getSeconds();

  timeEl.innerHTML = `${
    hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock
  }:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

  // For adding seconds to the functon
  // :${seconds < 10 ? `0${seconds}` : seconds}
}

setTime();
setInterval(setTime, 1000);

// ///////////////////////////////////////////
// Slideshow

const slides = document.querySelectorAll('.slide');

let activeSlide = 0;

function slideshow() {
  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }
  setActiveSlide();
}

function setActiveSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[activeSlide].classList.add('active');
  activeSlide++;
}

setInterval(slideshow, 10000);

window.onload = setActiveSlide();

//
//
//
//
//
// Testing to trigger a keyboard shortcut with a click function

// function triggerAdressBar(e) {
//   body.click();

//   let event = 'eventKey === 91 && eventKey === 76';
//   // event.metaKey = true;
//   // event.which = 76;
//   window.location.assign('∏');
//   console.log(e);
// }

// body.addEventListener('click', triggerAdressBar);

// Testing to trigger a keyboard shortcut with a click function

// $(document).ready(function () {
//   $(document).on('keypress', 'body', function (e) {
//     var code = e.keyCode || e.which;

//     if ((code = 110)) {
//       console.log('Successfully triggered ALT+N');
//     }
//   });

// window.on('click', '#copy', function () {
//   var e = $.Event('keypress');
//   e.which = 110; // Character 'A'
//   console.log(e);
//   $('body').trigger(e);
// });

// textarea.focus();

// textarea.addEventListener('keyup', e => {
//   if (e.key === 'Enter') {
//     e.target.value = ' ';
//   }
// });
