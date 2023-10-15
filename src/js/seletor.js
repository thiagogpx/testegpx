// Elementos para implementar o selectlist dinâmico.
const buttonAdd = document.querySelector("#buttonAdd");
const inputItem = document.querySelector("#inputItem");
const buttonRemove = document.querySelector("#buttonRemove");
const selectOption = document.querySelector("#inputSelectlist");
const buttonClear = document.querySelector("#buttonClear");

// Elemento de label
const labelText = document.querySelector("#labelText");
const colorSnackbar = document.querySelector("#snackbar");

// Atualiza o label com o valor selecionado no select.
setInterval(() => {
  const valueLabel = selectOption.value;
  labelText.textContent = valueLabel;
});

// Ouvinte de evento para adicionar um item à lista.
buttonAdd.addEventListener("click", () => {
  const value = inputItem.value;
  if (value.length <= 0) {
    snackBar("Insira um valor válido");
    return;
  }

  // Verifica se o valor já existe na lista.
  for (let i = 0; i < selectOption.options.length; i++) {
    if (selectOption.options[i].value === value) {
      snackBar("O valor já existe, digite outro");
      inputItem.value = "";
      return;
    }
  }

  // Cria uma nova opção e a adiciona à lista.
  const option = document.createElement("option");
  option.value = value;
  option.textContent = value;
  selectOption.appendChild(option);
  snackBar("Adicionado com sucesso");
  inputItem.value = "";
});

// Ouvinte de evento para remover um item da lista.
buttonRemove.addEventListener("click", () => {
  const value = inputItem.value;
  const option = selectOption.querySelector(`option[value="${value}"]`);
  if (option) {
    selectOption.removeChild(option);
    snackBar("Removido com sucesso");
    option.textContent = value;
    inputItem.value = "";
    // Define o índice selecionado do select como 0 (Selecione uma opção).
    selectOption.selectedIndex = 0;
  } else if (value === "Selecione uma opção") {
    snackBar("Este item não pode ser removido, escolha outro");
    inputItem.value = "";
  } else {
    snackBar("O item não existe na lista");
  }
});

// Ouvinte de evento para limpar o texto de entrada.
buttonClear.addEventListener("click", () => {
  inputItem.value = "";
});
