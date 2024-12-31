// Countdown Timer Script
const countdownElement = document.getElementById("countdown");
const greetingElement = document.getElementById("greeting");

// Set the New Year 2025 date
const newYearDate = new Date("January 1, 2025 00:00:00").getTime();

// Function to update the countdown
const updateCountdown = () => {
  const now = new Date().getTime();
  const gap = newYearDate - now;

  if (gap > 0) {
    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);

    // Highlight the last 10 seconds
    if (days === 0 && hours === 0 && minutes === 0 && seconds <= 10) {
      countdownElement.classList.add("last-10");
      countdownElement.textContent = seconds; // Display only seconds
    } else {
      countdownElement.classList.remove("last-10");
      countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
    }
  } else {
    // Stop the timer and show the greeting
    clearInterval(timer);
    countdownElement.classList.add("hidden"); // Hide the countdown
    greetingElement.classList.remove("hidden"); // Show the greeting
  }
};

// Start the countdown
const timer = setInterval(updateCountdown, 1000);
