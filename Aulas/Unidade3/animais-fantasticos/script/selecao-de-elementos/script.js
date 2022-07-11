// Seleciona pelo ID
const animaisSection = document.getElementById('animais');

// console.log(animais.innerText);
// console.log(animais);

// Seleciona pela classe, retorna uma HTMLCollection
const gridSection1 = document.getElementsByClassName('grid-section');
console.log(gridSection1);
const contatoGrid = document.getElementsByClassName('grid-section contato');

// Seleciona tpdas as UL's, retorna uma HTMLCollection
const ul = document.getElementsByTagName('ul');

// Retonar o primeiro elemento
console.log(gridSection1[0]);

// Seletor geral
const animais = document.querySelector('.animais');
const contato = document.querySelector('#contato');
const ultimoItem = document.querySelector('.animais-lista li:last-child')
const linkCSS = document.querySelector('[href^="#"]'); // O Assento representa que é pro link começar daquela forma, não precisa ser totalmente igual ao campo
const primeiroUl = document.querySelector('ul');

// Busca dentro do Ul apenas
const navItem = primeiroUl.querySelector('li');

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg);

// HTML Collection vs NodeList

const titulo = document.querySelector('.titulo');
const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

titulo.classList.add('grid-section'); // adiciona a classe grid-section em titulo

console.log(gridSectionHTML); // 4 itens; Executa ao vivo
console.log(gridSectionNode); // 3 itens; É estático

// Array-Like
// Node
gridSectionNode.forEach(function(gridItem, index, array){ 
  gridItem.classList.add('azul');
  console.log(index); // index do item na array
  console.log(array); // array completa
});

// HTML
const arrayGrid = Array.from(gridSectionHTML)

arrayGrid.forEach(function(item){
  console.log(item);
});

const teste = document.querySelectorAll('.grid-section');
console.log(teste);