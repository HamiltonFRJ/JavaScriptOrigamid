const listaAnimais = document.querySelector('.animais-lista');

listaAnimais.clientHeight; // height + padding
listaAnimais.offsetHeight; // height + padding + border
listaAnimais.scrollHeight; // height total, mesmo dentro do scroll
listaAnimais.offsetTop; // distância entre o topo do elemento e o topo da página

// Distância entre o canto esquerdo do elemento e o catno esquerdo da página
listaAnimais.offsetLeft; // propriedade

const height = listaAnimais.scrollHeight;
const animaisTop = listaAnimais.offsetTop;
console.log(animaisTop)

/* const rect = listaAnimais.getBoundingClientRect();  // método
rect.height; // height do elemento
rect.width; // width do elemento
rect.top; // distância entre o topo do elemento e o scroll
*/

const primeiroh2 = document.querySelector('h2');
rect = primeiroh2.getBoundingClientRect();

console.log(rect.top);
console.log(
  window.innerWidth, // width da janela -> Não usar por problemas de navegador, usar o matchmedia
  window.innerHeight, // soma dev tools também
  window.outerHeight, // height da janela
  window.outerWidth, // soma a barra de endereço

  window.pageXOffset, // scroll direcional X
  window.pageYOffset, // scroll direcional Y
);

const small = window.matchMedia('(max-width: 600px)').matches;
if(small){
  console.log('Tela menor que 600px');
} else{
  console.log('Tela maior que 600px');
}
