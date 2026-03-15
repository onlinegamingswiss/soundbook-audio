const bookSelect = document.getElementById("bookSelect");

if (bookSelect) {
  bookSelect.addEventListener("change", function () {
    if (this.value) {
      window.location.href = this.value;
    }
  });
}
