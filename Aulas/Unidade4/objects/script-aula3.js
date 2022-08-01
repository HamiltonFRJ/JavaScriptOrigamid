const frutas = ["Banana", "Uva", "Maçã"];

// hasOwnProperty retorna se o objeto possui aquela propriedade.
// No caso de map, está no prototype, como herança, então não retorna true se for passado apenas a array, string...
frutas.hasOwnProperty("map"); // false
Array.hasOwnProperty("map"); // false
Array.prototype.hasOwnProperty("map"); // true

Array.prototype.propertyIsEnumerable("map"); // false
window.propertyIsEnumerable("innerHeight"); // true

// isPrototypeOf(valor) - Verifica se é o prototipo do valor passado
Array.prototype.isPrototypeOf(frutas); // true - frutas é protótipo de Array
Array.isPrototypeOf(frutas); // false

// toString()
// Retorna o tipo do objeto. O problema é toString() ser uma função dos protótipos Array, String e mais.
// POr isso é comum utilizarmos a função direto do
// Object.prototype.toString.call(valor);

frutas.toString(); // 'Banana,Uva,Maçã'
typeof frutas; // object - mesmo sendo Array
Object.prototype.toString.call(frutas); // [object Array] - retorna o Array
frutas.__proto__.__proto__.toString(); // [object Object]

const frase = "Oi Hamilton";
const somar = function (a, b) {
  return a + b;
};
// console.log(somar.toString()); // function (a, b) {return a + b;}

const carro = {
  marca: "Ford",
  modelo: "KA",
  ano: 2011,
};
// console.log(carro.toString());

// Certo = Object.prototype.toString.call(var);
