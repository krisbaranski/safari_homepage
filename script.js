'use strict';

const body = document.body;
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
const slides = [
  'url(img/10_8.jpg)',
  'url(img/10_10.jpg)',
  'url(img/10_11.jpg)',
  'url(img/10_14.jpg)',
  'url(img/10_15.jpg)',
];

let i = 0;

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursForClock = hours >= 24 ? hours % 12 : hours;
  const minutes = time.getMinutes();

  timeEl.innerHTML = `${
    hoursForClock < 10 ? `0${hoursForClock}` : hoursForClock
  }:${minutes < 10 ? `0${minutes}` : minutes}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date}</span>`;

  // For adding seconds to the functon
  // const seconds = time.getSeconds();
  // :${seconds < 10 ? `0${seconds}` : seconds}
}

setTime();
setInterval(setTime, 1000);

function slideshow() {
  body.style.backgroundImage = slides[i];
  slides.forEach((slide, i) => {
    body.style.backgroundImage = 'none';
  });
  if (i === slides.length) {
    i = 0;
  }
  body.style.backgroundImage = slides[i];
  i++;
}

setInterval(slideshow, 10000);

textarea.focus();

textarea.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    e.target.value = ' ';
  }
});

// function triggerAdressBar(e) {
//   body.focus(e);
//   window.location.assign('');
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

// var e = e.target.event('keydown');
// e.shiftKey = true;
// e.which = 32;
// $('body').trigger(e);
