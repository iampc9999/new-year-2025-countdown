const countdown = () => {
  const newYearDate = new Date("December 31, 2024 13:43:00").getTime();
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
  if (gap < 0) {
  clearInterval(timer);
  document.getElementById("countdown").classList.add("hidden"); // Hide the countdown
  document.getElementById("greeting").classList.remove("hidden"); // Show the greeting
}

const playSound = () => {
  const audio = document.getElementById("round-sound");
  audio.play();
};

if (gap < 0) {
  clearInterval(timer);
  document.getElementById("countdown").classList.add("hidden");
  document.getElementById("greeting").classList.remove("hidden");
  startConfetti(); // Start confetti
  playSound(); // Play celebration sound
}


    const startConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 },
  });
};
;
  }
};

const timer = setInterval(countdown, 1000);

// Confetti Effect
const startConfetti = () => {
  const confettiCanvas = document.getElementById("confetti-canvas");
  const confetti = new ConfettiGenerator({ target: confettiCanvas });
  confetti.render();
};
