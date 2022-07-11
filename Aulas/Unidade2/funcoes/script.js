function areaQuadrado(lado){
  return lado * lado;
}

console.log(areaQuadrado(2));

function pi(){
  return 3.14;
}

var total = 5 * pi();
console.log(pi())

function imc(peso, altura){
  const imc = peso / (altura ** 2);
  return imc;
}
console.log(imc(80, 1.80));

function corFavorita(cor){
  if(cor === 'Azul'){
    return 'Você gosta do céu';
  } else if(cor === 'Verde'){
    return 'Você gosta de florestas'
  } else{
    return 'Você não gosta de nada';
  }
}

console.log(corFavorita('Azul'));

addEventListener('click', function() {
  console.log('Clicou');
})


//Função sem retorno 
//Nesse caso, se usar o console no navegador ele apresenta uma mensagem de undefined por não encontrar o return da função

function imc2(peso, altura){
  const imc = peso / (altura ** 2);
  console.log(imc)
}

imc2(80, 1.80);

function terceiraIdade(idade){
  console.log(typeof idade);
  if(typeof idade !== 'number'){
    return 'Por favor preencha um número!';
  } else if(idade >= 60){
    return true;
  } else{
    return false;
  }
}

console.log(terceiraIdade(48));

var totalPaises = 193;
function faltaVisitar(paisesVisitados){
  // var totalPaises = 193;
  return `Falta visitar ${totalPaises - paisesVisitados} países`;
}
// As variáveis criadas dentro de funções não são encontradas fora dela

console.log(totalPaises);

var profissao = 'Estudante';
var nome = 'Hamilton';

function dados(){
  var idade = 21;
  function outrosDados(){
    var endereco = 'Minas Gerais';
    var idade = 21;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`
  }
  return outrosDados();
}

console.log(dados());

addEventListener('scroll', function(){
  console.log(`${nome}`)
})