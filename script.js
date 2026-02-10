let noCount = 0;

const questions = [
  "Really? 🥺",
  "Are you sure? 😢",
  "Think again 💔",
  "Last chance 😭",
  "You broke my heart 💀"
];

function noClicked() {
  const question = document.getElementById("question");
  const noBtn = document.getElementById("noBtn");

  if (noCount < questions.length) {
    question.innerText = questions[noCount];
    noCount++;

    // Move NO button randomly
    noBtn.style.top = Math.random() * 100 - 50 + "px";
    noBtn.style.left = Math.random() * 100 - 50 + "px";
  } else {
    noBtn.style.display = "none";
  }
}

function yesClicked() {
  document.body.innerHTML = `
    <h1 style="color:red;">Yayyy! 💘😍<br>You are my Valentine! 💕</h1>
  `;
}

