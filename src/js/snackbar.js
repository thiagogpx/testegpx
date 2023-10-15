// Função para o snackBar com o text para mudarmos a mensagem do snack
function snackBar(text) {
  var x = document.getElementById("snackbar");
  x.innerHTML = text; // Define o texto do snackbar
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
