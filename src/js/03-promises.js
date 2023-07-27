import { Notify } from 'notiflix/build/notiflix-notify-aio';

const formEl = document.querySelector('.form');
const delayEl = document.querySelector('input[name="delay"]')
const stepEl = document.querySelector('input[name="step"]')
const amountEl = document.querySelector('input[name="amount"]')

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(evt) {
  evt.preventDefault();
  let inpDelay = Number(delayEl.value);
  const inpStep = Number(stepEl.value);
  const inpAmount = Number(amountEl.value);
  
  if (inpDelay < 0 || inpStep < 0 || inpAmount <= 0) {
    Notify.failure(`❌ 
The values ​​entered in the text fields must be greater than 0`);
    return;
  }
  
  for (let i = 0; i < inpAmount; i+=1) {
    createPromise(i, inpDelay)
    .then(({ position, delay }) => {
    Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
     Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
    inpDelay += inpStep;
     }
  }


function createPromise(position, delay) {
  const obj = { position, delay };
  console.log("Start");
  console.log(position);
  console.log(delay);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve(obj);
      }
      else {
        reject(obj);
      }
    }, delay);
  });
  }
