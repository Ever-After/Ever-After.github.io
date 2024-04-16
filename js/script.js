const daysElm = document.getElementById('days');
const hoursElm = document.getElementById('hours');
const minsElm = document.getElementById('mins');
const secondsElm = document.getElementById('seconds');

// ここに好きな日時を記述する
// 西暦 月　日
const target = '2024 2 24';

function countDown() {
  const targetDate = new Date(target);
  const currentDate = new Date();

  const totalSeconds = (targetDate - currentDate) / 1000;

  const days = Math.floor(totalSeconds / 3600 / 24);
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const mins = Math.floor(totalSeconds / 60) % 60;
  const seconds = Math.floor(totalSeconds % 60);

  daysElm.innerHTML = days;
  hoursElm.innerHTML = formatTime(hours);
  minsElm.innerHTML = formatTime(mins);
  secondsElm.innerHTML = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(countDown, 1000);
