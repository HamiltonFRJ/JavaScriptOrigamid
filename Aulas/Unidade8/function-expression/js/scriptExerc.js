// Remova o erro
// priceNumber("R$ 99,99");
// const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
const priceNumber = (n) => +n.replace("R$", "").replace(",", ".");
priceNumber("R$ 99,99");
// OU
// priceNumber("R$ 99,99");
// function priceNumber(n) {
//   return +n.replace("R$", "").replace(",", ".");
// }

// Crie uma IIFE e isole o escopo de qualquer código JS

(() => {
  const priceNumber = "Essa variável já existe em outro escopo.";
  console.log(priceNumber);
})();

// Como podemos utilizar a função abaixo?
const active = (callback) => callback();
active(function () {
  console.log("Ativando");
});
