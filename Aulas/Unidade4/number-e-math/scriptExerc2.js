/* Segunda Tentativa */

// Retorne um número aleatório
// entre 1050 e 2000
const aleatorio = Math.floor(Math.random()*(2000 - 1050 + 1))+1050;
console.log(aleatorio);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
let numerosArray = numeros.split(', ');
console.log(Math.max(...numerosArray));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
 'R$ 230 ', 'r$ 200'];

function limpaLista(preco){
  preco = +preco.trim().toUpperCase().replace(',', '.').replace('R$ ','');
  preco = Math.round(preco);
  return +preco;
}
let soma = 0;
listaPrecos.forEach((preco) => {
  soma += limpaLista(preco);
});

console.log('Resultado da soma da lista:', soma.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}))