// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var usuario = {
  nome: 'Hamilton',
  sobrenome: 'Francisco',
  idade: 21,
  tomDePele: 'branco',
  sexo: 'masculino',

  mostraUsuario(){
    return console.log(`${this.nome + ' ' + this.sobrenome} está com ${this.idade} anos de idade, é do sexo ${this.sexo + ' e ' + this.tomDePele}.`)
  }
}
// Crie  um método no objeto anterior, que mostre o seu nome completo
usuario.mostraUsuario();

// Modifique o valor da propriedade preco para 3000
var carro = {
  preco: 1000,
  portas: 4,
  marca: 'Audi',
}

carro.preco = 3000;

// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cao = {
  raca: 'Labrador',
  idadeCao: 10,
  cor: 'Preto',

  latir(viuHomem){
    if(viuHomem){
      return console.log('RAU AU ROU!!!');
    } else{
      return console.log('ZzZzZzZ');
    }
  }
}

cao.latir(false);
