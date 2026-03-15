document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("audio-player");
  const buttons = document.querySelectorAll(".audio-btn");
  const nowPlaying = document.getElementById("now-playing");

  if (!player || buttons.length === 0) return;

  function clearState() {
    buttons.forEach((btn) => btn.classList.remove("is-playing"));
  }

  buttons.forEach((button) => {
    button.addEventListener("click", async () => {
      const src = button.dataset.audio;
      if (!src) return;

      clearState();
      button.classList.add("is-playing");

      const absoluteSrc = new URL(src, window.location.href).href;
      if (player.src !== absoluteSrc) {
        player.src = src;
      }

      try {
        await player.play();
        if (nowPlaying) {
          nowPlaying.textContent = "Lecture en cours : " + button.textContent.trim();
        }
      } catch (e) {
        if (nowPlaying) {
          nowPlaying.textContent = "Lecture bloquée. Appuyez encore une fois.";
        }
      }
    });
  });

  player.addEventListener("ended", () => {
    clearState();
    if (nowPlaying) nowPlaying.textContent = "Lecture terminée.";
  });
});
