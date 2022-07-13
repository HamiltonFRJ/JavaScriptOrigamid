// Transforme o objeto abaixo em uma Constructor Function
// const pessoa = {
//   nome: 'Nome pessoa',
//   idade: 0,
//   andar(){
//     console.log(this.nome + 'andou');
//   }
// }

function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;
  console.log(this);
  this.andar = function(){
    console.log(this.nome + ' andou');
  }
}

// Crie 3 pessoas, João - 20 anos,
// Maria - 25 anos, Bruno - 15 anos

const Joao = new Pessoa('João', 20);
const Maria = new Pessoa('Maria', 25);
const Bruno = new Pessoa('Bruno', 15);

Bruno.andar();

// Crie uma Constructor Function (Dom) para manipulação de
// listas de elementos do dom. Deve conter as seguintes
// propriedades e métodos:
//
// elements, retorna NodeList com os elementos selecionados
// addClass(classe), adiciona a classe a todos os elementos
// removeClass(classe), remove a classe a todos os elementos

function Dom(seletor){
  const seletores = document.querySelectorAll(seletor)
  this.elements = seletores;
  this.adicionaAtivo = function(classe){
    // const remove = document.querySelectorAll('ativo');
    // this.removeBeforeInput = function(classe){
    //   return this.remove.classList.remove('ativo');
    // };
    // this.removeBeforeInput();
    seletores.forEach((element) => {
      element.classList.add('Ativo');
    })
  }
  this.removeAtivo = function(classe){
    seletores.forEach((element) => {
      element.classList.remove('Ativo');
    })
  }
}

const li = new Dom('li');
li.adicionaAtivo('primeira-lista');
