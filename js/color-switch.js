const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const refs = {
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
let intervalId = null;
let isActive = false;

function updateBodyColor() {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    const i = randomIntegerFromInterval(0, colors.length - 1);
    const color = colors[i];
    document.body.style.backgroundColor = color;
    console.log('works1');
  }, 1000);
  console.log('works2');
}

function stopUpdateBodyColor() {
  clearInterval(intervalId);
  isActive = false;
}

refs.startBtn.addEventListener('click', updateBodyColor);
refs.stopBtn.addEventListener('click', stopUpdateBodyColor);
