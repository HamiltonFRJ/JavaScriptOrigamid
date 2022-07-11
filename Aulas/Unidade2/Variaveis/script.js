var nome = "André";
var idade = 28;
const possuiFaculdade = true;

console.log(nome, idade, possuiFaculdade);

var preco = 25;
var totalComprado = 5;
var totalPreco = totalComprado * preco;

console.log(totalPreco);

var sobrenome = "Rafael",
    cidade = "Rio";

console.log(sobrenome, cidade);

var precoAplicativo;

/* Inválido
  var &nome;
  var function;
  var 1possuiFaculdade
*/ 

// Válido
var $selecionar;
var _nome;
var possuiFaculdadeNoExterior;

/*Hoisting: é quando a varíavel é jogada para cima, caso
seja referenciada antes de ser definida ela apresenta apenas
undefined, caso não atribuída ela apresentará is not defined.
*/

