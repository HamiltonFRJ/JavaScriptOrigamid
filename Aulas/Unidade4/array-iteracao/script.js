// const carros = ['Ford', 'Fiat', 'Honda'];
// carros.forEach(function(item, index, array){
//  console.log(item.toUpperCase());
// });
// // com Arrow Function
// carros.forEach((item, index, array) => {
//  console.log(item.toUpperCase());
// });

// const li = document.querySelectorAll('li');
// li.forEach(i => i.classList.add('ativa'));
// li.forEach((item, index) => {
//  item.classList.add('ativa');
// });

// O que importa no for each não é o que ele retorna e sim o que ele faz

// const carros = ['Ford', 'Fiat', 'Honda'];

// carros.map((item, index, array) => {
//   console.log(item.toUpperCase(), index, array)
// })

// const numeros = [2, 3, 5, 8, 13];
// const numerosX2 = numeros.map(n => n * 2);

// const aulas = [
//   {
//   nome: 'HTML 1',
//   min: 15
//   },
//   {
//   nome: 'HTML 2',
//   min: 10
//   },
//   {
//   nome: 'CSS 1',
//   min: 20
//   },
//   {
//   nome: 'JS 1',
//   min: 25
//   },
//  ]
//  const tempoAulas = aulas.map(aula => aula.min);
//  // [15, 10, 20, 25];
//  const puxarNomes = aula => aula.nome;
//  const nomesAulas = aulas.map(puxarNomes);
//  // ['HTML 1', 'HTML 2', 'CSS 1', 'JS 1']

// [].reduce(callback(acumulador, valorAtual, index, array), valorInicial)
// executa a fun;áo de callback para cada item da Array. Um valor especial existe nessa fun;áo de callback. ele é chamado de acumulador, mas é na verdade apenas o retorno da iteração anterior.

// const aulas = [10, 25, 30];

// const recudeAulas = aulas.reduce((acumulador, item, index, array)=> {
// console.log(acumulador, item, index, array);
// return acumulador + item;
// }, 0)
// // acumulador é o item anterior, por isso deve ser definido inicialmente pelo "valorInicial"

// const recudeAulaSemValorInicial = aulas.reduce((acumulador, item)=> {
//   console.log(acumulador, item,);
//   return acumulador + item;
// });
// // se não passar valor inicial, ele fará uma iteração a menos

// const numeros = [10, 25, 60, 5, 35, 10];
// const maiorValor = numeros.reduce((anterior, atual) => {
//  return anterior < atual ? atual : anterior;
// });
// maiorValor; // 60

const aulas = [
  {
    nome: "HTML 1",
    min: 15,
  },
  {
    nome: "HTML 2",
    min: 10,
  },
  {
    nome: "CSS 1",
    min: 20,
  },
  {
    nome: "JS 1",
    min: 25,
  },
];

// var acumulador = {};
// acumulador[0] = "aleatorio";

// const listaAulas = aulas.reduce((acumulador, aula, index) => {
//   acumulador[index] = aula.nome;
//   console.log(acumulador);
//   return acumulador;
// }, {});

// const frutas = ["Banana", "Pêra", "Uva"];

// const frutasRight = frutas.reduceRight((acc, fruta) => acc + "");
// const frutasLeft = frutas.reduce((acc, fruta) => acc + "");

// frutasRight; // Uva Pêra Banana
// frutasLeft; // Banana Pêra Uva

// [].some(), se pelo menos um return da iteração for truthy, ele retorna true.

// const frutas = ["Banana", "Pêra", "Uva"];
// const temUva = frutas.some((fruta) => {
//   return fruta === "Uva";
// }); // true

// console.log(temUva); // true

// [].every(), se todos os returns das iterações forem truthy, o método irá retornar true. Se pelo menos um for falsy, ele irá retornar false.

const frutas = ["Banana", "Pêra", "Uva", ""];
// False pois pelo menos uma fruta
// está vazia '', o que é um valor falsy
const arraysCheias = frutas.every((fruta) => {
  return fruta; // false
});

const numeros = [6, 43, 22, 88, 101, 29];
const maiorQue3 = numeros.every((x) => x > 3); // true
