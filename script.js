// "Natural" size the sheet is rendered at before scaling to fit the screen.
// Tweak these to change how zoomed-in the sheet looks on wide/desktop screens.
const BASE_W = 1100;
const BASE_H = 750;

const wrap = document.querySelector(".sheet-wrap");
const frame = document.querySelector(".sheet-frame");

frame.style.width = BASE_W + "px";
frame.style.height = BASE_H + "px";

function fitFrame() {
  const scale = Math.min(
    window.innerWidth / BASE_W,
    window.innerHeight / BASE_H,
  );
  frame.style.transform = `scale(${scale})`;
  wrap.style.width = BASE_W * scale + "px";
  wrap.style.height = BASE_H * scale + "px";
}

window.addEventListener("resize", fitFrame);
window.addEventListener("orientationchange", fitFrame);
fitFrame();
