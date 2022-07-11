// Verifique se a sua idade é maior do que a de algum parente
var idadeFilho = 21,
    idadePrimo = 28,
    idadePrima = 24;

if(idadeFilho > idadePrimo){
  if(idadeFilho > idadePrima){
    console.log("Você é o mais velho entre seus primos.");
  }
}else if(idadePrimo > idadePrima){
  console.log("Seu primo é o mais velho entre seus primos.");
}else if(idadePrima > idadePrimo){
  console.log("Sua prima é a mais velha dos primos.");
}else {
  console.log("Os Primos possuem idades iguais.");
}
// Dependendo do resultado coloque no console 'É maior', 'É igual

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2); // -> true
console.log(!!expressao);

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; // true
var idade = 28; // true
var possuiDoutorado = false; // false
var empregoFuturo; // false
var dinheiroNaConta = 0; // false

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if (china > brasil){
  console.log(`A China possui ${china - brasil} milhões de habitantes a mais que o Brasil`)
} else{
  console.log(`O Brasil possui ${brasil - china} milhões de habitantes a mais que a China`)
}

// O que irá aparecer no console? -> Falso
if(('Gato' === 'gato') && (5 > 2)) {
 console.log('Verdadeiro');
} else {
 console.log('Falso');
}

// O que irá aparecer no console? -> Cão
if(('Gato' === 'gato') || (5 > 2)) {
 console.log('Gato' && 'Cão'); 
} else {
 console.log('Falso');
}