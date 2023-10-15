// Obtém o elemento da bola e do painel direito.
const ball = document.querySelector(".ball");
const rightPanel = document.querySelector(".right-panel");

// Função para gerar uma cor HEX aleatória.
function getRandomColor() {
  const hexCharacters = "0123456789ABCDEF";
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hexCharacters[Math.floor(Math.random() * 16)];
  }
  return hexColor;
}

// Define um ouvinte de evento para mover a bola e alterar sua cor quando o mouse passa por cima.
ball.addEventListener("mouseover", () => {
  // Redefine a posição da bola para a origem.
  ball.style.left = "0px";
  ball.style.top = "0px";

  // Calcula coordenadas aleatórias dentro do painel direito.
  const x = Math.random() * (rightPanel.offsetWidth - ball.offsetWidth);
  const y = Math.random() * (rightPanel.offsetHeight - ball.offsetHeight);

  // Define a nova posição da bola.
  ball.style.left = x + "px";
  ball.style.top = y + "px";

  // Gera uma cor aleatória para a bola, garantindo que não seja igual à cor de fundo do painel.
  let randomColor = getRandomColor();
  while (randomColor === "#2b2b2b") {
    randomColor = getRandomColor();
  }

  // Aplica a nova cor à bola.
  ball.style.backgroundColor = randomColor;
});
