const somar = function (a, b) {
  return a + b;
};

somar(4, 2); // 6

const subtrair = (a, b) => a - b;
subtrair(4, 2); // 2

var instrumento = "Violão";

(function () {
  // código isolado do escopo global
  var instrumento = "Guitarra";
  console.log(instrumento);
})();

console.log(instrumento); // Violão
