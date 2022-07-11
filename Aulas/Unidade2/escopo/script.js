'use strict' // define uma leitura restrita das variáveis, evitando erros bobos.

function mostrarCarro(){
  var carro = 'Fusca';
  console.log(carro);
}
mostrarCarro(); // Fusca no console
//console.log(carro); // Erro, carro is not defined

// Escopo evita o conflito entre nomes.

/*
function mostrarCarro(){
   carro = 'Fusca'; // variável global.
  console.log(carro);
}
*/
if (true){
  let carro = 'Fusca';
  console.log(carro);
}
// var vaza do bloco, let não. 
// {} Criam um bloco
{
  var carro2 = 'Fusca';
  const ano = 2022;
}
console.log(carro2); // Carro
// console.log(ano); // Erro ano is not defined 
var i = 50;

for(let i = 9; i < 10; i++){ // Não pode criar como var, ele é usado só é usado temporariamente no for, caos contrário ele afetará a linha 36.
  console.log(`Número ${i}`);
}

console.log(i * 10); 

const mes = 'Dezembro';
// mes = 'Janeiro'; // Erro, tentou modificar o valor
const semana = 'Quarta'; // Erro, declarou sem valor

const data = {
  dia: 17,
  mes: 'Abril',
  ano: 2022,
}

data.dia = 29; // Funciona
// data = 'Janeiro'; // erro

let ano;
ano = 2018;
ano++;
console.log(ano); //2019

/* let */ ano = 2020; // erro, redeclarou a variável

