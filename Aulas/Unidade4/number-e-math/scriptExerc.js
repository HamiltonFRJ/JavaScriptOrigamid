// Retorne um número aleatório entre 1050 e 2000
console.log(Math.floor(Math.random()*(2000-1050+1))+1050);

// Retorne o maior número da lista abaixo
let numeros = '4, 5, 20, 8, 9';
numeros = numeros.split(', ');
const maxNumber = Math.max(...numeros); // Spread
console.log(maxNumber);

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
 'R$ 230 ', 'r$ 200'];

function limpaPreco(preco) {
  preco = +preco.trim().toUpperCase().replace('R$ ', '').replace(',', '.');
  preco = +preco.toFixed(2);
  return preco;
}
let somaTotal = 0;
listaPrecos.forEach((preco) => {
  somaTotal += limpaPreco(preco);
})

console.log(somaTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

for(let i = 0; i < listaPrecos.length; i++){
  console.log(limpaPreco(listaPrecos[i]))
}