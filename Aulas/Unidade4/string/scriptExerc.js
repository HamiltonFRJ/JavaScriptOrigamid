// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento
let transacoes = [
  {
  descricao: 'Taxa do Pão',
  valor: 'R$ 39',
  },
  {
  descricao: 'Taxa do Mercado',
  valor: 'R$ 129',
  },
  {
  descricao: 'Recebimento de Cliente',
  valor: 'R$ 99',
  },
  {
  descricao: 'Taxa do Banco',
  valor: 'R$ 129',
  },
  {
  descricao: 'Recebimento de Cliente',
  valor: 'R$ 49',
  },
];
console.log(transacoes);
let taxaTotal = 0;
let recebimentoTotal = 0;
transacoes.forEach((item) => {
  const filtroNumero =+ item.valor.replace('R$ ', '');
  if(item.descricao.slice(0,4) === 'Taxa')
    taxaTotal = taxaTotal + filtroNumero;
  else if(item.descricao.slice(0,4) === 'Rece')
    recebimentoTotal = recebimentoTotal + filtroNumero;
});
console.log(taxaTotal);

// transacoes.forEach((item) => {
//   console.log(item.valor);
//   const filtro = item.valor.replace(/[R$ ]+/g, '');
//   let somaTotal = 0;
//   somaTotal = somaTotal + filtro;
//   return console.log(somaTotal);
// });

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';

const transportesNovo = transportes.split(';');
console.log(transportesNovo);

// Substitua todos os span's por a's
const html = `<ul>
<li><span>Sobre</span></li>
<li><span>Produtos</span></li>
<li><span>Contato</span></li>
</ul>`;

let htmlNovo = html.split('span').join('a');
console.log(htmlNovo);

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';

console.log(frase.slice(-1));

// Retorne o total de taxas
const transacoes2 = ['Taxa do Banco', ' TAXA DO PÃO', ' taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let totalTaxas = 0;
transacoes2.forEach((item) => {
  if(item.toLowerCase().trimStart().slice(0,4) === 'taxa')
    totalTaxas++;
}); 
console.log(totalTaxas);