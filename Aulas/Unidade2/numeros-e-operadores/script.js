var idade = 21;
var gols = 1000;
var pi = 3.14; // ponto para decimal
var exp = 2e10; // 20000000000

console.log(pi);
console.log(exp);

// Precisão para até 15 digitos, apos, ele arrendonda

var soma = 100 + 50; // 150
var subtracao = 100 - 50; // 50
var multiplicacao = 100 * 2; // 200
var divisao = 100 / 2; // 50
var expoente = 2 ** 4; // 16
var modulo = 14 % 5; // 4

// Ao somar com strings, voce concatena, nao soma

var somaString = '100' + 50; // 10050
var subtracao = '100' - 50; // 50
var multiplicacao = '100' * 2; // 200
var divisao = 'Comprei 10' / 2 // NaN (Nota a Number)

// funcao de verificacao de variaval eh NaN -> isNaN()

var x = 5;
console.log(x++) // Retorna o valor 5 depois efetua a soma
console.log(++x) //Retorna o valor 7, por que efetua a soma antes de exibir, além do incremento de 1 de havia feito na sentenca anterior
// O exemplo anterior também serve para decremento

var frase = "Isso é um teste";
+frase; // NaN
-frase; // NaN

var idade = '21'
// +idade; // 21 (número)
// -idade; // -21 (número)
console.log(+idade + 5); // 26

var possuiFaculdade = true;
console.log(+possuiFaculdade); // 1



