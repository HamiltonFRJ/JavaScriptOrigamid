// Object.getOwnProipertyDescriptors(obj)
// Lista todos os métodos e propeirdades de um objeto, com as suas devidas configurações
Object.getOwnPropertyDescriptors(Array);
// Lista com métodos e propriedades e Array

Object.getOwnPropertyDescriptors(Array.prototype);
// Lista com métodos e propriedades do protótipo de Array

Object.getOwnPropertyDescriptor(window, "innerHeight");
// Puxa de uma única propriedade

// Object.keys(obj)
// Retorna uma array com as chaves de todas as propriedades diretas e enumeráveis do objeto
Object.keys(Array);
// [] vazia, pois não possui propriedades enumeráveis
const carro = {
  marca: "Ford",
  ano: 2018,
};
console.log(Object.keys(carro)); // (2) ['marca', 'ano']

// Object.values(obj)
// Retorna uma array com os valores do objeto.
console.log(Object.values(carro)); // (2) ['Ford', 2018]

// Object.entries(obj)
// retorna uma array com array's contendo a chave e o valor
console.log(Object.entries(carro));
// (2) [Array(2), Array(2)]
// 0: (2) ['marca', 'Ford']
// 1: (2) ['ano', 2018]

// Object.getOwnPropertyNames(Array)
// Retorna uma array com todas as propriedades diretas do objeto (não retorna as do protótipo).

console.log(Object.getOwnPropertyNames(Array)); // (6) ['length', 'name', 'prototype', 'isArray', 'from', 'of']
console.log(Object.getOwnPropertyNames(carro)); // (2) ['marca', 'ano']

// Object.getPropotypeOf()
// Retorna o protótipo do objeto.
const frutas1 = ["Banana"];
console.log(Object.getPrototypeOf(frutas1)); // Mesma coisa de Array.prototype
console.log(Object.getPrototypeOf("")); // Protótipo de String

// Object.is(obj1, obj2)
// Verifica se os objetos são iguais e retorna true ou false.
const frutas2 = ["Banana"];
console.log(Object.is(frutas1, frutas2)); // false

const novaFruta = frutas1;
console.log(Object.is(frutas1, novaFruta)); // true

// Object.freeze()
// Impede qualquer mudança nas propriedades.
Object.freeze(carro);

// Object.seal()
// Previne a adição de novas propriedades e impede que as atuais sejam deletadas, mas permite a alteração das existentes
Object.seal(carro);

// Object.preventExtensions()
// Previne a adição de novas propriedades, mas permite o delete de antigas.
Object.preventExtensions(carro);

// Verificação do status do Objeto

console.log(Object.isFrozen(carro)); // true
console.log(Object.isSealed(carro)); // true
console.log(Object.isExtensible(carro)); // false - não é extensivel
