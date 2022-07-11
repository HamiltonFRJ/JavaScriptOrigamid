var pessoa = {
  nome: 'Hamilton',
  idade: 21,
  profissao: 'Estudante',
  possuiFaculdade: true,
}

pessoa.nome; // 'Hamilton' 

var quadrado = {
  lados: 4,
  area: function(lado){
    return lado * lado;
  },
  perimetro: function(lado){
    return this.lados * lado;
  },
}

console.log(quadrado.area(5));
console.log(quadrado.perimetro(5));

Math.PI; // 3.14
Math.random(); // 0 a 1;

console.log(Math.PI);

console.table();

var carro = {};

console.log(typeof carro); // 'object'

var menu = {
  width: 800,
  height: 50,
  backgroundColor: '#84E',
  metadeHeight(){
    return this.height / 2; // Pega o hegiht de dentro da variavel, sem o this ele vai pegar as variáveis definidas do lado de fora.
  }
}

menu.backgroundColor = '#000';

menu.color = 'blue';
menu.esconder = function(){
  console.log('Escondi');
}

var bg = menu.backgroundColor;

menu.hasOwnProperty('color'); // true -> possui a propriedade?
menu.hasOwnProperty('hasOwnProperty') // false

'sdksjdksjd'.length;