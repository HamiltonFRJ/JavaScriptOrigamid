// Retorne a soma total de caracteres dos
// parágrafos acima utilizando reduce
const selecionaParagrafos = document.querySelectorAll("p");

// const arrayParagrafos = Array.from(selecionaParagrafos);
// const somaCaracteres = arrayParagrafos.reduce((anterior, atual) => {
//   return (soma += atual.innerText.length);
// }, 0);

let soma = 0;
const somaCaracteres = Array.prototype.reduce.call(
  selecionaParagrafos,
  (acumulador, item) => {
    return acumulador + item.innerText.length;
  },
  0
);
// Crie uma função que retorne novos elementos
// html, com os seguintes parâmetros
// tag, classe e conteudo.
function criarElemento(tag, classe, conteudo) {
  const elemento = document.createElement(tag);
  classe ? elemento.classList.add(classe) : "";
  conteudo ? (elemento.innerHTML = conteudo) : "";
  return elemento;
}
console.log(criarElemento("ul", "CDA", ""));

// Crie uma nova função utilizando a anterior como base
// essa nova função deverá sempre criar h1 com a
// classe titulo. Porém o parâmetro conteudo continuará dinâmico

const criarH1 = criarElemento.bind(null, "h1", "titulo");
console.log(criarH1("Texto"));
