const eventDate = new Date("May 27, 2025 16:00:00").getTime();
const timer = document.getElementById("timer");

function fireworkBurst(x, y) {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { x, y },
    colors: ['#ff0a54', '#ff477e', '#ff7096', '#ff85a1', '#fbb1bd']
  });
}

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
    timer.innerHTML = "🎆 Acara telah dimulai! 🎆";

    const fireworkPattern = [
      { x: 0.3, y: 0.5 },
      { x: 0.5, y: 0.4 },
      { x: 0.7, y: 0.5 },
      { x: 0.4, y: 0.7 },
      { x: 0.6, y: 0.6 }
    ];

    fireworkPattern.forEach((pos, i) => {
      setTimeout(() => fireworkBurst(pos.x, pos.y), i * 400);
    });

    setTimeout(() => {
      for (let i = 0; i < 3; i++) {
        setTimeout(() => fireworkBurst(Math.random(), Math.random()), i * 500);
      }
    }, 2500);
  }
}, 1000);
