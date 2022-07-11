const menu = document.querySelector('.menu');

console.log(menu);
menu.className; // string
menu.classList; // lista de classes
menu.classList.add('ativo');
menu.classList.add('ativo', 'mobile'); // duas classes, não pode conter espaço
menu.classList.remove('ativo');
menu.classList.toggle('ativo') // adiciona/remove a classe
menu.classList.contains('ativo') // true ou false
menu.classList.replace('ativo', 'inativo') // substitui a classe '' por ''.

const animais = document.querySelector('.animais');

console.log(animais.attributes); // retorna os atributos da classe animais
console.log(animais.attributes['class']); // retorna exatamente o valor solicitado

// getAttribute e setAtributte
const img = document.querySelector('img');
img.getAttribute('src'); // valor do src
img.setAttribute('alt', 'Texto Alternativo'); // muda o alt
img.hasAttribute('id'); // true / false
img.removeAttribute('alt'); // remove o alt
img.hasAttributes(); // true / false se tem algum atributo

animais.className; // string com o nome das classes
animais.className = 'azul'; // substitui completamente a string
animais.className += ' vermelho'; // adiciona vermelho à string
//animais.attributes = 'class="ativo"'; // não funciona, read-only