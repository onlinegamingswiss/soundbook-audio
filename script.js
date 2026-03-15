const bookSelect = document.getElementById("bookSelect");

if (bookSelect) {
  bookSelect.addEventListener("change", function () {
    if (this.value) {
      window.location.href = this.value;
    }
  });
}

function playSound(src) {
  const audio = new Audio(src);
  audio.play();
}
