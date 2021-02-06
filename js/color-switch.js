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

function updateBodyColor(arr) {
  if (isActive) {
    return;
  }
  isActive = true;
  intervalId = setInterval(() => {
    const i = randomIntegerFromInterval(0, arr.length - 1);
    const color = arr[i];
    document.body.style.backgroundColor = color;
  }, 1000);
}

function stopUpdateBodyColor() {
  clearInterval(intervalId);
  isActive = false;
}

refs.startBtn.addEventListener('click', () => {
  updateBodyColor(colors);
});
refs.stopBtn.addEventListener('click', stopUpdateBodyColor);
