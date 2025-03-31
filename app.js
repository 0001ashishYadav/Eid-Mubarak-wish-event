const img1 = document.querySelector(".img-1");
const greenMoon = document.querySelector(".greenMoon");
const whiteMoon = document.querySelector(".whiteMoon");
const msg = document.querySelector(".msg");
const msg2 = document.querySelector(".msg-2");

window.addEventListener("load", () => {
  img1.style.transform = "translateY(100%)";
  whiteMoon.style.bottom = "50%";
  setTimeout(() => {
    whiteMoon.style.transform = "translateX(-60%)";
    greenMoon.style.top = "50px";
    whiteMoon.style.bottom = "55%";
  }, 1500);

  setTimeout(() => {
    msg.classList.add("msg-animation");
    msg2.classList.add("msg-2-animation");
  }, 3600);
});

// sparkle effect

// document.addEventListener("mousemove", (e) => {
//   createSparkle(e.clientX, e.clientY);
// });

// function createSparkle(x, y) {
//   const sparkle = document.createElement("div");
//   sparkle.className = "sparkle";
//   sparkle.style.left = `${x}px`;
//   sparkle.style.top = `${y}px`;
//   document.body.appendChild(sparkle);

//   setTimeout(() => sparkle.remove(), 500);
// }

//____________________________________

document.addEventListener("mousemove", (e) => {
  createSparkle(e.clientX, e.clientY);
});

function createSparkle(x, y) {
  const sparkle = document.createElement("div");
  sparkle.className = "sparkle";
  sparkle.style.left = `${x}px`;
  sparkle.style.top = `${y}px`;
  document.body.appendChild(sparkle);

  setTimeout(() => sparkle.remove(), 500);
}

function createFallingStars() {
  for (let i = 0; i < 20; i++) {
    const star = document.createElement("div");
    star.className = "falling-star";
    star.style.setProperty("--star-position", Math.random());
    star.style.animationDuration = `${2 + Math.random() * 3}s`;
    document.body.appendChild(star);

    setTimeout(() => star.remove(), 5000);
  }
}

createFallingStars();
setInterval(createFallingStars, 3000);
