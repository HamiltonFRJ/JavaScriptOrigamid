// Number é a construtora de números, todo número possui as propriedades e métodos do prototype de Number. Number também possui alguns métodos.
const ano = 2018;
let preco = new Number(99);

console.log(Number.isNaN(NaN)); // true
// isNaN() é um método de Number, ou seja, não faz parte do protótipo.
console.log(Number.isNaN(4 + 5)); // false: 4 + 5 is a Number

console.log(Number.isInteger(20)); // true
// isInteger() verifica se é uma integral
console.log(Number.isInteger(20.6)); // false

// parseFloat() serve para retornarmos um número a partida de uma string. A String deve começar com um número.
console.log(parseFloat('99.50')); // Mesma função sem o Number
console.log(Number.parseFloat('99.50')); // 99.5
console.log(Number.parseFloat('100 Reais')); // 100
console.log(Number.parseFloat('R$ 100')); // NaN

// parseInt recebe também um segundo parâmetro que é o Radix, 10 é para decimal.

console.log(Number.parseInt('99.50', 10)); // 99
//Definido no padrão decimal pelo segundo parâmatro, podendo ser outros, como binário, octal, hexadecimal. Caso não seja passado nada, será feito pelo padrão decimal também.
console.log(Number.parseInt(5.4343655682 , 10)); // 5
console.log(Number.parseInt('100 Reais')); // 100

// toFixed() - Arredonda o número - Retorna uma String

preco = 2.99;
console.log(preco.toFixed()); // 3

let carro = 1000.455;
console.log(carro.toFixed(2)); // 1000.46

preco = 1499.49;
console.log(+preco.toFixed() + 200); // 1699 -  Transforma em Number

// toString(radix)
preco = 2.99;
preco.toString(10); // '2.99'

// toLocaleString(lang, options);
// Formata o número de acordo com a língua e opções passadas.

preco = 4799.98;
console.log(preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));
console.log(preco.toLocaleString('en-US', {style: 'currency', currency: 'USD'}));

// Math 
// É um objeto nativo que possui propriedades e métodos de expressões matemáticas comuns.

console.log(Math.PI); // 3.141592653589793
console.log(Math.E); // 2.718
console.log(Math.LN10); // 2.303

// Math.abs()
// Retorna o valor absoluto, ou seja, transforma negativo em positivo.
console.log(Math.abs(-5.5)); // 5.5

// Math.ceil()
// Arredonda pra cima, retornando sempre uma integral
console.log(Math.ceil(1498.2)); // 1499

// Math.floor()
// Arredonda pra baixo, retornando sempre uma integral
console.log(Math.floor(1498.98)); // 1498

// Math.round()
// Arredonde, como a matemática, retornando sempre uma integral
console.log(Math.round(1498.44)); // 1498
console.log(Math.round(1498.67)); // 1499

// Math.max() e Math.min()
// Retorna o maior e o menor número de uma lista de argumentos respectivamente

Math.max(5,3,10,42,2); // 42
Math.min(5,3,10,42,2); // 2

// Math.random(); //0.xxx
console.log(Math.floor(Math.random()*100)); // entre 0 e 100
console.log(Math.ceil(Math.random()*500)); // entre 0 e 100

// Número randomico entre 72 e 32
console.log(Math.floor(Math.random()*(72-32+1)) + 32);
// Math.floor(Math.random()*(max - min + 1)) + 32


