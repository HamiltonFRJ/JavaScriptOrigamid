// Crie uma função para verificar se um valor é Truthy
var alternativa;
function verificaVerdadeiro(alternativa){
  if(alternativa == true){
    return console.log('A alternativa é verdadeira.')
  } else if(alternativa == false){
    return console.log('A alternativa é verdadeira.')
  } else{
    return console.log('A alternativa não foi identificada, certifique de especificar um valor verdadeiro ou falso.')
  }
}
verificaVerdadeiro(true);
// Crie uma função matemática que retorne o perímetro de um quadrado, lembrando: perímetro é a soma dos quatro lados do quadrado

function calculaPerímetro(lado){
  return lado * 4;
}
console.log(calculaPerímetro(4));

// Crie uma função que retorne o seu nome completo, ela deve possuir os parâmetros: nome e sobrenome
var nome = 'Hamilton',
    sobrenome = 'Francisco',
    idade = 21,
    endereco = 'Minas Gerais';

function identidade(){
  return console.log(`O ${nome + ' ' + sobrenome} está com ${idade} anos de idade, e mora em ${endereco}`);
}
identidade();

// Crie uma função que verifica se um número é par

function verificaNumeroPar(numero){
  if(numero % 2 == 0){
    return console.log(`O número ${numero} é par`)
  } else{
    return console.log(`O número ${numero} é ímpar`)
  }
}
verificaNumeroPar(9958);
// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)
function tipoDeVariavel(tipo){
  return typeof tipo;
}
tipoDeVariavel('10');


// addEventListener é uma função nativa do JavaScript, o primeiro parâmetro é o evento que ocorre e o segundo o Callback, utilize essa função para mostrar no console o seu nome completo quando o evento 'scroll' ocorrer.

/* addEventListener('scroll', function(){
  console.log(`${nome + ' ' + sobrenome}`)
})
*/ 

//Corrija o erro abaixo
/*
function precisoVisitar(paisesVisitados){
  var totalPaises = 193;
  return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
}
function jaVisitei(paisesVisitados){
  return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
}

precisoVisitar(20);
jaVisitei(20);
*/
var totalPaises = 193;

function precisoVisitar(paisesVisitados){ 
  return console.log(`Ainda faltam ${totalPaises - paisesVisitados} países para visitar`);
}
function jaVisitei(paisesVisitados){
  return console.log(`Já visitei ${paisesVisitados} do total de ${totalPaises} países`);
}

precisoVisitar(20);
jaVisitei(20);
