const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.getElementById("text");
const container = document.getElementById("container");

let noClicks = 0;

const messages = [
  "Wait… what? 😳",
  "Really sure? 🥺",
  "My heart is cracking 💔",
  "That was rude 😭",
  "I’ll cry now… 😢",
  "Okay stop 😵‍💫"
];

// Move NO button on hover (evil)
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 60 - 30;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

// NO clicked
noBtn.addEventListener("click", () => {
  noClicks++;
  text.innerText = messages[Math.min(noClicks, messages.length - 1)];
  
  // Grow YES button
  yesBtn.style.transform = `scale(${1 + noClicks * 0.15})`;

  // Shake screen
  container.classList.add("shake");
  setTimeout(() => container.classList.remove("shake"), 400);

  if (noClicks > 4) {
    noBtn.style.display = "none";
  }
});

// YES clicked
yesBtn.addEventListener("click", () => {
  container.innerHTML = `<h1>I knew it 😘💘<br>You are my Valentine! 💍</h1>`;
  heartRain();
});

// Hearts effect
function heartRain() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerText = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "100%";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }, 300);
}
