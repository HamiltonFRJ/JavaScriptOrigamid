window.alert('Boa noite, continue assim!');
//window é o global, então nem sempre precisa declarar ele...:
// alert('Boa noite, continue assim!');

const href = window.location.href;

console.log(href);

if(href === 'http://127.0.0.1:5500/Aulas/Unidade3/oque-e-o-dom/index.html'){
  console.log('É igual');
}

const h1Selecionado = document.querySelector('h1');
const h1Classes = h1Selecionado.classList;

// titulo.innerText; // retorna o texto;
// titulo.classList; // retorna as classes;
// titulo.id; // retorna a id;
// titulo.offsetHeight; // retorna a altura do elemento;

function callbackh1(){
  console.log('Clicou em', h1Selecionado.innerText);
}

h1Selecionado.addEventListener('click', callbackh1);
// ativa a função do callback quando clica