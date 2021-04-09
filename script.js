'use strict';

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
const body = document.body;

// const toggle = document.querySelector('.toggle');

// toggle.addEventListener('click', e => {
//   const html = document.querySelector('html');
//   if (html.classList.contains('dark')) {
//     html.classList.remove('dark');
//     e.target.innerHTML = 'Dark mode';
//   } else {
//     html.classList.add('dark');
//     e.target.innerHTML = 'Light mode';
//   }
// });

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
}

// :${seconds < 10 ? `0${seconds}` : seconds}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);

function slideshow() {
  window.clearTimeout();
  let slides = [
    'url(img/10_8.jpg)',
    'url(img/10_10.jpg)',
    'url(img/10_11.jpg)',
    'url(img/10_14.jpg)',
    'url(img/10_15.jpg)',
  ];

  for (let i = 0; i < slides.length - 1; i++) {
    setTimeout(() => {
      body.style.backgroundImage = `${slides[i]}`;

      if (i === slides.length - 1) {
        body.style.backgroundImage = `${slides[i]}`;
        slides = 0;
      } else {
        body.style.backgroundImage = `${slides[i]}`;
        slides++;
      }
    }, 2000);
  }
}

slideshow();
