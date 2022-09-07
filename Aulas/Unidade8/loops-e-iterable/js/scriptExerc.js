// Crie 4 li's na página
// Utilizando o for...of
// adicione uma classe a cada li
const lista = document.querySelectorAll("li");
for (const li of lista) {
  li.classList.add("ativo");
}

// Utilize o for...in para listar
// todos as propriedades e valores
// do objeto window
for (const propriedade in window) {
  console.log(`${propriedade}: ${window[propriedade]}`);
}
