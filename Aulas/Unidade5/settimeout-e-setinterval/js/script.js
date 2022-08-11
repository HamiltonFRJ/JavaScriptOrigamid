/*
function espera(item) {
  console.log(item);
}
setTimeout(espera, 5000, "Passou 5s");

setTimeout(() => {
  console.log("Teste2");
}, 0);

// O setTimeOut é feito de forma assíncrona e vai do Callback Queue para o Call Stack apenas quando todo código já foi executado para executar.

console.log("oi");

// Loop e Timeout
// Um loop é executado rapidamente, em milissegundos. Se colocarmos um setTimeout dentro do loop, todos eles ser"ao adicionados à Web Api praticamete no mesmo tempo. Um evento de setTimeout não espera o  tempo do anterior acabar para iniciar.

for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    console.log(i);
  }, 300);
}

// Solução para o anterior

for (let i = 2; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
}

// setTimeout é um método do objeto window. O valor de this dentro do mesmo callback é uma referência ao objeto no caso window

const btn = document.querySelector("button");
btn.addEventListener("click", handleClick);

function handleClick(event) {
  setTimeout(function () {
    this.classList.add("active");
  }, 1000);
}

// erro pois o window.classList não existe
// Solução:

function handleClick(event) {
  setTimeout(() => {
    this.classList.add("active");
  }, 1000);
}

// setInterval(callback, tempo, arg1, arg2), irá ativar o callback toda vez que a quantidade de tempo passar.

function loop(texto) {
  console.log(texto);
}
//setInterval(loop, 1000, "Passou 1s");

// loop a cada segundo
let i = 0;
const meuLoop = setInterval(() => {
  console.log(i++);
  if (i > 10) {
    clearInterval(meuLoop);
  }
}, 1000);

// clearInterval(var), podemos para um intervalo com o clearInterval. Para isso precisamos atribuir o setInterval a uma variável.
*/

import exercicio from "./modules/scriptExerc.js";
exercicio();
