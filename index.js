function getDurationFromURL() {
    const params = new URLSearchParams(window.location.search);
    return parseInt(params.get("duration")) || 60;
  }
  
  let duration = getDurationFromURL();
  const timerDisplay = document.getElementById("timer");
  const endBtn = document.getElementById("endBtn");
  
  const interval = setInterval(() => {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    duration--;
  
    if (duration < 0) {
      clearInterval(interval);
      timerDisplay.textContent = "DONE!";
      endBtn.style.display = "inline-block";
    }
  }, 1000);
  