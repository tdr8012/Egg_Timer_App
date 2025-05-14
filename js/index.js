// TIMER FUNCTION
function getDurationFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("duration")) || 60;
}

let duration = getDurationFromURL();
const timerDisplay = document.getElementById("timer");
const endBtn = document.getElementById("endBtn");
const eggImage = document.querySelector(".egg-image");
const readyMessage = document.getElementById("readyMessage");


const tickingSound = new Audio("../sounds/frying_egg.mp3");
tickingSound.loop = true;

if (timerDisplay) {
  
  tickingSound.play();

  const interval = setInterval(() => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    duration--;

    if (duration < 0) {
      clearInterval(interval);
      tickingSound.pause(); 
      tickingSound.currentTime = 0; 

      timerDisplay.innerHTML = "DONE 💛💛💛";
      endBtn.style.display = "inline-block";

      if (readyMessage) {
        readyMessage.style.display = "none";
      }

      if (eggImage) {
        eggImage.src = "../images/maxresdefault.png";
        eggImage.alt = "Finished Egg";
        eggImage.classList.add("egg-finished");
      }
    }
  }, 1000);
}

// CLOSE ANIMATION
document.addEventListener('DOMContentLoaded', () => {
  const closeBtn = document.querySelector('.close-btn');
  const windowBox = document.querySelector('.window');

  if (closeBtn && windowBox) {
    closeBtn.addEventListener('click', () => {
      const popSound = new Audio('../sounds/pop.mp3');
      popSound.play();

      windowBox.classList.add('fade-out');
      setTimeout(() => {
        windowBox.style.display = 'none';

        const goodbyeText = document.createElement('div');
        goodbyeText.textContent = "Goodbye, Egg Lover 🥚💛";
        goodbyeText.className = 'goodbye-message';
        document.body.appendChild(goodbyeText);
      }, 400);
    });
  }
});
