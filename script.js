// Countdown Timer Script
const countdownElement = document.getElementById("countdown");
const greetingElement = document.getElementById("greeting");

// Set the New Year's date
const newYearDate = new Date("December 31, 2024 12:25:00").getTime();

// Function to update the countdown
const updateCountdown = () => {
  const now = new Date().getTime();
  const gap = newYearDate - now;

  if (gap > 0) {
    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    countdownElement.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  } else {
    clearInterval(timer); // Stop the countdown
    countdownElement.classList.add("hidden"); // Hide countdown
    greetingElement.classList.remove("hidden"); // Show greeting
  }
};

// Start the countdown
const timer = setInterval(updateCountdown, 1000);
