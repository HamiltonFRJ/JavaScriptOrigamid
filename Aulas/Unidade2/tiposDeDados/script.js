var nome = 'Andre';
var idade = 21;
var time = null;
var simbolo = Symbol();

console.log(typeof nome);
console.log(typeof idade);
console.log(typeof time);

var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;

console.log(nomeCompleto);

var gols = 1000;
var frase = 'Romario fez ' + gols + ' gols';
console.log(typeof frase);

var num1 = 2019;
var num2 = '8';
console.log(num1 + num2);

var teste = 'teste';
var frase1 = "Esse é o \"melhor\" jogo"; // A contrabarra anula a função da "", só manda o caractere, se tirar ela da problema, por que só pode ser aspas simples com aspas duplas, e não as duas.

console.log(frase1);
console.log("Teste");

// Template String
// var frase = 'Romario fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols * 2} gols`;
console.log(frase2);



