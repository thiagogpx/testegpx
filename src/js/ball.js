// Ouvinte de evento para mover a bola aleatoriamente no painel direito.
const ball = document.querySelector(".ball");
const rightPanel = document.querySelector(".right-panel");

// Função para obter uma cor HEX aleatória.
function getRandomColor() {
  const hexColor = "0123456789ABCDEF";
  let hex = "#";
  for (let i = 0; i < 6; i++) {
    hex += hexColor[Math.floor(Math.random() * 16)];
  }
  return hex;
}

// Função com addEventListener e mouseover para mover a bola e alterar sua cor.
ball.addEventListener("mouseover", () => {
  ball.style.left = "0px";
  ball.style.top = "0px";
  const x = Math.random() * (rightPanel.offsetWidth - ball.offsetWidth);
  const y = Math.random() * (rightPanel.offsetHeight - ball.offsetHeight);
  ball.style.left = x + "px";
  ball.style.top = y + "px";
  let randomColor = getRandomColor();
  while (randomColor === "#2b2b2b") {
    // Garante que a cor da bola não seja igual à cor de fundo do painel.
    randomColor = getRandomColor();
  }
  ball.style.backgroundColor = randomColor;
});
