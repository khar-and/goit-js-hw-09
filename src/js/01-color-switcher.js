const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');

let colorid = null;
btnStop.setAttribute('disabled', true);

btnStart.addEventListener('click', onStartClick);
btnStop.addEventListener('click', onStopClick);

function onStartClick(evt) {
    btnStart.setAttribute('disabled', true);
    btnStop.removeAttribute('disabled');
    
        colorid = setInterval(() => {
        bodyEl.style.backgroundColor = getRandomHexColor()
    }, 1000);
    

}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function onStopClick(evt) {
    clearInterval(colorid);
    btnStop.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');
}


