const comida = 'Pizza';
const agua = new String('Agua');
const frase = 'A melhor linguagem é'

const linguagem = 'JavaScript';

console.log(comida.length); // 5
console.log(frase.length); // 15

console.log(comida[0]); // P
console.log(frase[0]); // A
console.log(frase[frase.length - 1]); // a

console.log(frase.charAt(0));
console.log(frase.charAt(frase.length)); // No CharAt retorna nada com o length, por que não existe caractere no ultimo, por que os caracteres contam a partir do 0;
// Exemplo, a frase tem 15 caracteres, mas vai até a posição 14, pois começa a partir do 0

const fraseFinal = frase + linguagem;
// const fraseFinal = frase.concat(linguagem, '!!!');

const fruta = 'Banana';
const listaFrutas = 'Melancia, Banana, Laranja';

console.log(fruta.includes((listaFrutas))); // false - fruta não possui listaFrutas
console.log(listaFrutas.includes((fruta))); // true - listaFrutas possui a string fruta(Banana)

console.log(fruta.startsWith('Ba')); // Case sensitive
console.log(fruta.endsWith('na'));

const transacao1 = 'Depósito de cliente';
const transacao2 = 'Depósito de fornecedor';
const transacao3 = 'Taxa de camisas';

console.log(transacao1.slice(0, 3)); // Dep
console.log(transacao1.slice(1)); // epósito de cliente
console.log(transacao1.slice(0, -2)); // Depósito de clien
console.log(transacao1.slice(-7)); // cliente
console.log(transacao2.slice(0, 3)); // Dep
console.log(transacao3.slice(0, 3)); // Tax

// Substring corta a string de acordo com os valores de start e end. Não funciona com os valores negativos como o slide

console.log(linguagem.substring(3,5)); // aS
console.log(linguagem.substring(0,4)); // Java
console.log(linguagem.substring(4)); // Script
console.log(linguagem.substring(-3)); // JavaScript

const instrumento = 'Guitarra';

console.log(instrumento.indexOf('r')); // 5
console.log(instrumento.lastIndexOf('r')); // 6
console.log(instrumento.indexOf('ta')); // 3

// padStart e padEnd - Aumenta o tamanho da string para o valor de n. Ou seja, uma string com 8 caracteres, se passarmos n = 10, ela passará a ter 10 caracteres. O preenchimento é feito com espaços, caos não seja declarado o segundo argumento.

const listaPrecos = ['R$ 99', 'R$ 199', 'R$ 12000'];

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10, '.'));
});

console.log(listaPrecos[0].padStart(10, '-*')); // .....R$ 99
console.log(listaPrecos[2].padStart(10, '-.')); // .....R$ 99

