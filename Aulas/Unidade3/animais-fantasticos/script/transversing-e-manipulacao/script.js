const menu = document.querySelector('.menu');

menu.outerHTML; // todo o html do elemento
menu.innerHTML; // html interno
menu.innerText; // texto, sem tags

// menu.innerText = '<p> Texto </p>'; // a tag vai como texto
// menu.innerHTML = '<p> Texto </p>'; // a tag é renderizada

// Transversing

const lista = document.querySelector('.animais-lista');

lista.parentElement; // pai
lista.parentElement.parentElement; // pai do pai
lista.previousElementSibling; // elemento acima
lista.nextElementSibling; // elemento abaixo

lista.children; // HTMLCollection com os filhos
lista.children[0]; // primeiro filho
lista.children[--lista.children.length]; // último filho

lista.querySelectorAll('li'); // todas as LI's
lista.querySelector('li:last-child'); // último filho

console.log(lista.childNodes); // todos os node child
lista.firstChild; // primeiro node child - pode puxar comentario ou um enter

// Manipulando elementos

const animais = document.querySelector('.animais');
const contato = document.querySelector('.contato');
// const titulo = contato.querySelector('.titulo');

// contato.appendChild(titulo); // Move lista para o final de contatos / ultimo filho
// contato.insertBefore(lista, titulo); // Insere a lista antes de titulo
// contato.removeChild(titulo); // remove o titulo de contato
// contato.replaceChild(lista, titulo); // substitui titulo por lista

// Novos elementos

const novoh1 = document.createElement('h1');

novoh1.innerText = 'Novo Título';
novoh1.classList.add('titulo');

contato.appendChild(novoh1);

console.log(novoh1);

const titulo = document.querySelector('h1');
const titulo2 = document.querySelector('h1');
const novoTitulo = titulo;
// titulo, titulo2 e novoTitulo são iguais

const cloneTitulo = titulo.cloneNode(true); // Vai clonar os filhos tambem -- Elemento completo -- caso false ele clona só o elemento em si, a tag que envolve
// const contato = document.querySelector('.contato');
contato.appendChild(cloneTitulo);

