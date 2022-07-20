const instrumentos = ['Guittara', 'Baixo', 'Violão'];
const preco = [49, 99, 69, 89];

const dados = [new String('Tipo 1'), ['Carro', 'Portas', {cor: 'Azul', preco: 2000}], function andar(nome){console.log(nome)}];

const carros = new Array('Corola', 'Mustang', 'Civic');
carros[1]; // Mustang
carros[3] = 'Ferrari';
carros[10] = 'Parati';
carros.length; // 11

// Arrays com conteúdos vazios ficam mais lentas em grandes sistemas ****

const li = document.querySelectorAll('li'); // NodeList
console.log(li);

const arrayLi = Array.from(li); // Array
console.log(arrayLi); 

const obj = {
  0: 'Andre',
  2: 'Hamilton',
  3: 'Nathália',
  length: 5,
}

// É necessário ter o "lenght" no Object para transformá-lo em um Array pelo from

const objArray = Array.from(obj);

Array.isArray(li); // false - ArrayLike - NodeList
Array.of(10); // [10]
Array.of(1,2,3,4); // [1,2,3,4]
// Array.of cria um array com o argumento passado

new Array(5); // [,,,,,] - Empty
Array(5); // [,,,,,]
Array(1,2,3,4); // [1,2,3,4]
// Array cria um array vazio com o tamanho passado no argumento

const frutas = ['Banana', 'Pêra', ['Uva Roxa', 'Uva Verde']];
console.log(frutas[2][1].length);

const instrumentos2 = ['Guitarra', 'Baixo', 'Violão'];
console.log(instrumentos2); // ['Baixo', 'Guitarra', Violão]
instrumentos2.sort();

const idades = [32,21,33,43,1,12,8];
console.log(idades.sort()); // Alinha em ordem alfabetica pela ordem dos caracteres
// Não ordena números por ordem crescente, mas sim alfabetica

// [].unshift() - Adiciona elementos ao início da array e retorna o lengh da mesma.
// [].push() adiciona elementos ao final da array e retorna o lenght da mesma.

const carros2 = new Array('Ford', 'Fiat', 'VW');
console.log(carros2.unshift('Honda', 'Kia')); // 5
carros2; // ['Honda', 'Kia', 'Corola', 'Mustang', 'Civic']
console.log(carros2.push('Ferrari')); // 6
carros2; // ['Honda', 'Kia', 'Corola', 'Mustang', 'Civic', 'Ferrari']

// [].shift() remove o primeiro elemento da array e retorna o mesmo. 
// [].pop() remove o último elemento da array e retorna o mesmo.

const carros3 = new Array('Ford', 'Fiat', 'VW', 'Honda');
const primeiroCarro = carros3.shift(); // 'Ford'
carros; // ['Fiat', 'VM', 'Honda'];

const ultimoCarro = carros.pop(); // 'Honda'
carros; // ['Fiat', 'VW'];

// Inverte a ordem da lista
carros3.reverse();