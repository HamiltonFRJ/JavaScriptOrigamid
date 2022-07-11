const img = document.querySelector('img');
const animaisLista = document.querySelector('.animais-lista')

function callback(event){
  const currentTarget = event.currentTarget; // this
  const target = event.target; // onde o cloque ocorreu
  const type = event.type; // tipo do evento
  const path = event.path;
  console.log(currentTarget, target, type, path);
}
/* function callback(event){ // apresenta o evento e suas características
  console.log(event);
}
*/

animaisLista.addEventListener('click', callback); // Assim é melhor para separar o código e achar qual o erro talvez apareça no console

/* img.addEventListener('click', callback()); // UNDEFINED
img.addEventListener('click', () => {
  console.log('Clicou');
});
*/

const linkExterno = document.querySelector('a[href^="http"]');

linkExterno.addEventListener('click', handleLinkExterno);

function handleLinkExterno(event){
  event.preventDefault();
  console.log(event);
  console.log(this); // igual ao currentTarget
  console.log(this.getAttribute('href'));
};

// Most commons events
// https://developer.mozilla.org/eng-US/docs/Web/Events

const h1 = document.querySelector('h1');

function handleEvent(event){
  console.log(event.type, event);
};

h1.addEventListener('click', handleEvent);
h1.addEventListener('mouseenter', handleEvent); // Retorna valor a cada entrada do cursor no campo h1
// h1.addEventListener('mousemove', handleEvent); // Retorna valor a cada micro movimento dentro do h1 -> não é bom para o desempenho
window.addEventListener('scroll', handleEvent);
window.addEventListener('resize', handleEvent);

function handleKeyboard(event){
  if(event === 'f' || 'F'){
    document.body.classList.toggle('fullscreen');
  }
};

window.addEventListener('keydown', handleKeyboard); // Retona a tecla apertada

const imgs = document.querySelectorAll('img');

function handleImg(event){
  console.log('click', event.currentTarget.getAttribute('src'));
};

imgs.forEach((img) => {
  img.addEventListener('click', handleImg);
});