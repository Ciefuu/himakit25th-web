const eventDate = new Date("May 27, 2025 16:00:00").getTime();
const timer = document.getElementById("timer");

const countdownInterval = setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  if (distance >= 0) {
    timer.innerHTML = `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
  } else {
    clearInterval(countdownInterval);
    timer.innerHTML = "🎉 Acara telah dimulai! 🎉";

    // Efek confetti 3x
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    setTimeout(() => {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }, 250);
    setTimeout(() => {
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }, 500);
  }
}, 1000);
