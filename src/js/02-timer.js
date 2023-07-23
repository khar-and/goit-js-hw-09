import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    ChekDateWithCurrent(selectedDates[0]);
  },
};

// Знаходження елементів
const inputDateEl = document.getElementById('datetime-picker');
const btnStart = document.querySelector('button[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let futureDate = null;
let currentDate = null;
let formatTime = {};
let timerID = null;

 btnStart.addEventListener('click', onStartBtnClick)
// Ініціалізація бібліотеки
const fp = flatpickr(inputDateEl, options);
btnStart.setAttribute('disabled', true);

function onStartBtnClick(evt) {
  let deltaDays = futureDate.getTime() - currentDate.getTime()
  btnStart.setAttribute('disabled', true);
  timerID = setInterval(() => {
    deltaDays -= 1000;
    formatTime = convertMs(deltaDays)
    console.log(formatTime);
    daysEl.textContent = addLeadingZero(formatTime.days);
    hoursEl.textContent = addLeadingZero(formatTime.hours);
    minutesEl.textContent = addLeadingZero(formatTime.minutes);
    secondsEl.textContent = addLeadingZero(formatTime.seconds);
  }, 1000);
  if (deltaDays < 1000) {
    clearInterval(timerID);
    Notify.success('The End');

  }
}

function addLeadingZero(value) {
  if (value <= 99) {
    return value.toString().padStart(2,0)
  }
  return value.toString().padStart(3, 0);
}

function ChekDateWithCurrent(selectedDates) {
  // 
  currentDate = new Date();
  if (currentDate > selectedDates) {
    Notify.failure('Please choose a date in the future');
    return;
  }
  btnStart.removeAttribute('disabled');
  futureDate = fp.selectedDates[0];
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}