// Função para o snackBar com o text para termos botões funcionalidades novas.
function snackBar(text) {
  var x = document.getElementById("snackbar");
  x.innerHTML = text; // Define o texto do snackbar
  x.className = "show";
  setTimeout(function () {
    x.className = x.className.replace("show", "");
  }, 3000);
}
