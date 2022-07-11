// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  const marca = 'Fiat';
  let portas = 4;
  
  console.log(cor, marca, portas);
}
// console.log(var, marca, portas); // está mandando imprimir var, não a variavel... 
// Além disso, o código declar como item global a cor, porém apenas em bloco nas outras... O certo seria o console dentro do bloco, assim como feito.

// Como corrigir o erro abaixo?
const dois = 2;
function somarDois(x) {
  return x + dois;
}
// const dois foi declarado apenas dentro do bloco de somarDois
function dividirDois(x) {
  return x + dois;
}
console.log(somarDois(4)); // Não estava com console log
console.log(dividirDois(6)); // Não estava com console log

// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);

//Trocar a var numero para let.