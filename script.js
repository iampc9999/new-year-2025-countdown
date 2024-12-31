const countdown = () => {
  const newYearDate = new Date("January 1, 2025 00:00:00").getTime();
  const now = new Date().getTime();
  const gap = newYearDate - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(gap / day);
  const hours = Math.floor((gap % day) / hour);
  const minutes = Math.floor((gap % hour) / minute);
  const seconds = Math.floor((gap % minute) / second);

  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  if (gap < 0) {
    clearInterval(timer);
    document.getElementById("countdown").classList.add("hidden");
    document.getElementById("greeting").classList.remove("hidden");
    startConfetti();
  }
};

const timer = setInterval(countdown, 1000);

// Confetti Effect
const startConfetti = () => {
  const confettiCanvas = document.getElementById("confetti-canvas");
  const confetti = new ConfettiGenerator({ target: confettiCanvas });
  confetti.render();
};