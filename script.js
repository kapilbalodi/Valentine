const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.getElementById("text");
const container = document.getElementById("container");

let noCount = 0;

const messages = [
  "Annabella… wait 😳",
  "Are you really sure? 🥺",
  "That kinda hurt 💔",
  "I practiced asking you 😭",
  "Okay now I’m sad fr 😢",
  "No button privileges revoked 😤"
];

// No button runs away 😈
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 240 - 120;
  const y = Math.random() * 80 - 40;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// Clicking NO
noBtn.addEventListener("click", () => {
  noCount++;
  text.innerHTML = messages[Math.min(noCount, messages.length - 1)];

  // Grow YES button
  yesBtn.style.transform = `scale(${1 + noCount * 0.18})`;

  // Shake container
  container.classList.add("shake");
  setTimeout(() => container.classList.remove("shake"), 400);

  if (noCount >= 5) {
    noBtn.style.display = "none";
  }
});

// Clicking YES 💘
yesBtn.addEventListener("click", () => {
  container.innerHTML = `
    <h1>Loading happiness… 💕</h1>
  `;

  setTimeout(() => {
    container.innerHTML = `
      <h1>
        Yayyy Annabella 😍💖<br>
        You just made me the happiest person 💍
      </h1>
    `;
    heartRain();
  }, 1200);
});

// Hearts everywhere 💕
function heartRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "100%";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 250);
}
