// TIMER FUNCTION
function getDurationFromURL() {
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get("duration")) || 60;
}

let duration = getDurationFromURL();
const timerDisplay = document.getElementById("timer");
const endBtn = document.getElementById("endBtn");
const eggImage = document.querySelector(".egg-image"); 

if (timerDisplay) {
  const interval = setInterval(() => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    duration--;

    if (duration < 0) {
      clearInterval(interval);
      timerDisplay.innerHTML = "DONE 💛💛💛";
      endBtn.style.display = "inline-block";

      if (eggImage) {
        eggImage.src = "../images/maxresdefault.png"; 
        eggImage.alt = "Finished Egg";
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
