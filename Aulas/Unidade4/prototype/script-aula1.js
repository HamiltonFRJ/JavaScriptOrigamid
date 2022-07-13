function Pessoa(nome, idade){
  this.nome = nome;
  this.idade = idade;

  this.abracar = function(){
    return 'Abraçou';
  }
}

Pessoa.prototype.andar = function(){
  return this.nome + ' Pessoa andou';
}

Pessoa.prototype.nadar = function(){
  return this.nome + ' Pessoa nadou';
}

const andre = new Pessoa('Andre', 28);

console.log(Pessoa.prototype);
// console.log(andre.prototype); Andre é um objeto, não função

// A ordem é fieta primeiro no objeto, depois no prototypo

// Os prototypos são criados apenas uma vez. Ao criar a função no objeto, você cria uma nova toda vez ao incrementar algo no objeto.

// O novo objeto acessa os métodos e propriedades do protótipo através da propriedade __proto__. É papel da engine fazer essa busca, não devemos falar com __proto__ diretamente.

// Acessam o mesmo método mas __proto__ não terá acesso ao this.nome

andre.andar();
andre.__proto__.andar();

// Herança de prototipo
// O objetvo possui acesso aos métodos e propriedades do protótipo do construtor responsável por criar este objeto. O objeto abaixo possui acesso a métodos que nunca definimos, mas são herdados do protótipo de Object.

Object.prototype;
andre.toString();
andre.isPrototypeOf();
andre.valueOf();