const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const text = document.getElementById("text");

let count = 0;

const messages = [
  "Hey Annabella… wait 😳",
  "Are you sure? 🥺",
  "That hurt 💔",
  "Please don’t say no 😭",
  "No button removed 😤"
];

// NO button moves
noBtn.addEventListener("mouseenter", () => {
  const x = Math.random() * 160;
  const y = Math.random() * 40;
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
});

// NO click
noBtn.addEventListener("click", () => {
  count++;
  text.innerText = messages[Math.min(count, messages.length - 1)];

  yesBtn.style.transform = `scale(${1 + count * 0.2})`;

  if (count >= 4) {
    noBtn.style.display = "none";
  }
});

// YES click
yesBtn.addEventListener("click", () => {
  text.innerHTML = "Yayyy Annabella 💖😍<br>You are my Valentine!";
  document.querySelector(".buttons").style.display = "none";
});
