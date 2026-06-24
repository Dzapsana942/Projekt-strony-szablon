// ---------- SLIDER co 5 sekund ----------
function initSlider(imgId, images, intervalMs = 5000) {
  const img = document.getElementById(imgId);
  if (!img || !Array.isArray(images) || images.length === 0) return;

  let i = 0;
  img.src = images[i];

  setInterval(() => {
    i = (i + 1) % images.length;
    img.src = images[i];
  }, intervalMs);
}

// ---------- ACCORDION ----------
function initAccordions() {
  document.querySelectorAll(".accordion").forEach(acc => {
    const btn = acc.querySelector(".accordion-btn");
    if (!btn) return;

    btn.addEventListener("click", () => {
      acc.classList.toggle("open");
    });
  });
}

// ---------- KONTAKT ----------
function initChat() {
  const bubble = document.getElementById("chatBubble");
  const win = document.getElementById("chatWindow");
  const closeBtn = document.getElementById("chatClose");

  if (!bubble || !win || !closeBtn) return;

  function openChat() {
    win.classList.add("open");
    win.setAttribute("aria-hidden", "false");
  }

  function closeChat() {
    win.classList.remove("open");
    win.setAttribute("aria-hidden", "true");
  }

  bubble.addEventListener("click", () => {
    if (win.classList.contains("open")) closeChat();
    else openChat();
  });

  closeBtn.addEventListener("click", closeChat);

  document.addEventListener("click", (e) => {
    const clickedInsideWindow = win.contains(e.target);
    const clickedBubble = bubble.contains(e.target);

    if (!clickedInsideWindow && !clickedBubble) {
      closeChat();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initAccordions();
  initChat();

  // --- PRODUKT 1 ---
  initSlider("productSlider", [
    "elo.png",
    "nic.png"
  ], 5000);

  // --- PRODUKT 2 ---
  initSlider("productSlider2", [
    "elo.png",
    "nic.png"
  ], 5000);
});