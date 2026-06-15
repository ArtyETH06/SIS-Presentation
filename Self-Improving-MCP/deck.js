(() => {
  const slides = Array.from(document.querySelectorAll(".slide"));
  const total = slides.length;
  let current = 0;

  const $ = (id) => document.getElementById(id);
  const progressFill = $("progressFill");
  const slideNum = $("slideNum");
  const dotsWrap = $("dots");
  const prevBtn = $("prevBtn");
  const nextBtn = $("nextBtn");
  const hint = $("hint");

  $("slideTotal").textContent = String(total).padStart(2, "0");

  // Build dots
  slides.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "dot";
    dot.setAttribute("aria-label", `Go to slide ${i + 1}`);
    dot.addEventListener("click", () => go(i));
    dotsWrap.appendChild(dot);
  });
  const dots = Array.from(dotsWrap.children);

  function render() {
    slides.forEach((s, i) => s.classList.toggle("active", i === current));
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
    slideNum.textContent = String(current + 1).padStart(2, "0");
    progressFill.style.width = `${((current + 1) / total) * 100}%`;
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current === total - 1;
  }

  function go(i) {
    if (i < 0 || i >= total || i === current) return;
    current = i;
    render();
    // re-trigger entrance animations by forcing reflow on the active slide
    const active = slides[current];
    active.querySelectorAll(".fade").forEach((el) => {
      el.style.animation = "none";
      void el.offsetWidth; // reflow
      el.style.animation = "";
    });
    hideHint();
  }

  const next = () => go(current + 1);
  const prev = () => go(current - 1);

  let hintTimer;
  function hideHint() {
    hint.classList.add("hide");
    clearTimeout(hintTimer);
  }
  hintTimer = setTimeout(hideHint, 5000);

  // Keyboard
  document.addEventListener("keydown", (e) => {
    switch (e.key) {
      case "ArrowRight":
      case "PageDown":
      case " ":
        e.preventDefault(); next(); break;
      case "ArrowLeft":
      case "PageUp":
        e.preventDefault(); prev(); break;
      case "Home": go(0); break;
      case "End": go(total - 1); break;
      case "f": case "F":
        if (!document.fullscreenElement) document.documentElement.requestFullscreen?.();
        else document.exitFullscreen?.();
        break;
    }
  });

  // Buttons
  nextBtn.addEventListener("click", next);
  prevBtn.addEventListener("click", prev);

  // Touch / swipe
  let touchX = null;
  document.addEventListener("touchstart", (e) => { touchX = e.touches[0].clientX; }, { passive: true });
  document.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX = null;
  }, { passive: true });

  // Wheel (debounced)
  let wheelLock = false;
  document.addEventListener("wheel", (e) => {
    if (wheelLock || Math.abs(e.deltaY) < 30) return;
    wheelLock = true;
    (e.deltaY > 0 ? next : prev)();
    setTimeout(() => { wheelLock = false; }, 700);
  }, { passive: true });

  render();
})();
