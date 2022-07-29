// // Toda função é criada com o construtor Function e por isso herda as suas propriedades e métodos.

// function areaQuadrado(lado) {
//   return lado * lado;
// }

// const perimetroQuadrado = new Function("lado", "return lado *4");

// // Function.lengh retorna o total de argumentos da função.
// // Function.name retorna uma string com o nome da função.

// function somar(n1, n2) {
//   return n1 + n2;
// }

// console.log(somar.length); // 2
// console.log(somar.name); // 'somar'

// // function.call(this, arg1, arg2, ...) executa a função sendo possível passarmos uma nova referência ao this da mesma.

// function darOi(nome) {
//   console.log("Oi para você " + nome);
// }

// darOi.call(null, "Hamilton");

// const carro = {
//   marca: "Ford",
//   ano: 2018,
// };

// function descricaoCarro() {
//   console.log(this.marca + " " + this.ano);
// }

// descricaoCarro(); // undefined undefined
// descricaoCarro.call(); // undefined undefined
// descricaoCarro.call(carro); // Ford 2018
// descricaoCarro.call({ marca: "Honda", ano: 2012 }); // Primeiro o objeto novo, this , depois os parâmetros da função;

// // O valor this faz referência ao objeto criado durante a construção do objeto (Constructor Function). Podemos trocar a referência do método ao this, utilizando o call().
// const carros = ["Ford", "Fiat", "VW"];
// const frutas = ["Banana", "Uva", "Pêra"];

// carros.forEach((item) => {
//   console.log(item);
// }); // Log de cada Carro

// carros.forEach.call(frutas, (item) => {
//   console.log(item);
// }); // Log de cada Carro

// const ul = new Dom("ul");

// ul.ativo("ativar");

// console.log(ul);
// const li = {
//   element: document.querySelector("li"),
// };
// ul.ativo.call(null, "ativar");
// ul.ativo.call(li, "ativar");
// O novo valor de this deve ser semelhante a estrutura do valor do this original do método. Caso contrário o método não conseguirá interagir de forma correta com o novo this.

// function Dom(seletor) {
//   this.element = document.querySelector(seletor);
// }

// Dom.prototype.ativo = function (classe) {
//   this.element.classList.add(classe);
// };

// const novoSeletor = {
//   element: document.querySelector("li"),
// };

// Dom.prototype.ativo.call(novoSeletor, "ativar");

const frutas = ["Banana", "Uva", "Pêra"];

// Array.prototype.mostrarThis = function () {
//   console.log(this);
// };

// Ambos são a mesma coisa!!
// Array.prototype.pop.call(frutas);
// frutas.pop();
// Ambos são a mesma coisa!!

const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length: 3,
};

const li = document.querySelector("li");
const filtro1 = Array.prototype.filter.call(li, (item) => {
  return item.classList.contains("ativo");
});
filtro1; // Retorna os itens

// OU

const ul = document.querySelector("ul");
const arrayUl = Array.from(ul);

const filtro2 = arrayUl.filter.call(li, (item) => {
  return item.classList.contains("ativo");
});
filtro2; // Retorna os itens
