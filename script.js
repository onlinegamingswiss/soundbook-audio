async function loadChapterSidebar() {
  const container = document.getElementById("chapter-sidebar");
  if (!container) return;

  try {
    const response = await fetch("../sidebar.html");
    if (!response.ok) throw new Error("Impossible de charger sidebar.html");
    const html = await response.text();
    container.innerHTML = html;
  } catch (error) {
    console.error(error);
  }
}

function playSound(src) {
  const audio = new Audio(src);
  audio.play();
}

document.addEventListener("DOMContentLoaded", () => {
  loadChapterSidebar();
});
