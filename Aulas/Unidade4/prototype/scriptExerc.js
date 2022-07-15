// Crie uma função construtora de Pessoas
const Pessoa = function(nome, sobrenome, idade){
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;

  // this.nomeCompleto = function(){
  //   return 'O nome completo é: '+ this.nome + ' ' + this.sobrenome;
  // }
}

// Deve conter nome, sobrenome e idade
const hamilton = new Pessoa('Hamilton', 'Francisco', 21);
const nathalia = new Pessoa('Nathalia', 'Marilia', 21);

// Crie um método da pessoa que retorne o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function(){
  return 'O nome completo é: '+ this.nome + ' ' + this.sobrenome;
};

// Liste os métodos acessados por dados criados com NodeList, HTMLCollection, Document

const Lista = function(parametro){
  this.parametro = parametro;
  if(parametro === 'NodeList'){
    return Object.getOwnPropertyNames(NodeList.prototype); 
    // NodeList.prototype
  }
  else if(parametro === 'HTMLCollection'){
    return Object.getOwnPropertyNames(HTMLCollection.prototype);
    // HTMLCollection.prototype;
  }
  else if(parametro === 'Document'){
    return Object.getOwnPropertyNames(NodeList.prototype);
    // Document.prototype;
  }
  else{
    return `O parâmetro passado não foi reconhecido, tente NodeList , HTMLCollection ou Document!!`;
  }
}

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; // HTMLLIElement
console.log(`"li" é: ${li.constructor.name}`);

li.click; // Function
console.log(`"li.click" é: ${li.click.constructor.name}`);

li.innerText; // String
console.log(`"li.innerText" é: ${li.innerText.constructor.name}`);

li.value; // Number
console.log(`"li.value" é: ${li.value.constructor.name}`);

li.hidden; // Boolean
console.log(`"li.hidden" é: ${li.hidden.constructor.name}`);

li.offsetLeft; // Number
console.log(`"li.offsetLeft" é: ${li.offsetLeft.constructor.name}`);

li.click(); // Undefined
console.log(`"li.click()" é: ${li.click().constructor.name}`);

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; // String
// li.hidden.constructor.name retorna Boolean, Boolean é uma String