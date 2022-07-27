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
const carros = ["Ford", "Fiat", "VW"];
const frutas = ["Banana", "Uva", "Pêra"];

carros.forEach((item) => {
  console.log(item);
}); // Log de cada Carro

carros.forEach.call(frutas, (item) => {
  console.log(item);
}); // Log de cada Carro

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}
const ul = new Dom("ul");
Dom.prototype.ativo = function (classe) {
  this.element.classList.add(classe);
};
ul.ativo("ativar");
console.log(ul);

const li = {
  element: document.querySelector("li"),
};
