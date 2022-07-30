const pessoa = new Object({
  nome: "Hamilton",
});

// Object.create(obj, defineProperties) retorna um novo objeto que terá como protótipo o objeto do primeiro argumento.

// const carro = {
//   rodas: 4,
//   init(marca) {
//     this.marca = marca;
//     return this;
//   },
//   acelerar() {
//     return `${this.marca} acelerou as ${this.rodas} rodas`;
//   },
//   buzinar() {
//     return `${this.marca} buzinou!!`;
//   },
// };

// const honda = Object.create(carro);
// honda.init("Honda").acelerar();

// Object.assign(alvo, obj1, obj2) adiciona ao alvo as propriedades e métodos enumeráveis dos demais objetos. O assign irá modificar o objeto alvo.

// const funcaoAutomovel = {
//   acelerar() {
//     return "Acelerou";
//   },
//   buzina() {
//     return "Buzinou";
//   },
// };
// const moto = {
//   rodas: 2,
//   capacete: true,
// };
// const carro = {
//   rodas: 4,
//   portaMala: true,
// };

// Object.assign(moto, funcaoAutomovel); // Se a propriedade adicionada já existir, ela será
// substituída pelo outro parâmetro
// Exemplo: a função carro já tem 4 rodas, se coloca-lo no moto, a moto fica com 4 rodas ao
// invez de 2
// Object.assign(carro, funcaoAutomovel);
// console.log(moto);

// Object.defineProperties(alvo, propriedades) adiciona ao alvo novas propriedades.
// A diferença aqui é a possibilidade de serem definidas as características dessas propriedades.

// const moto = {
//   capacete: true,
// };
// Object.defineProperties(moto, {
//   rodas: {
//     value: 2,
//     configurable: false, // Impede deletar e mudar o valor
//     writable: true, // Torna possível sobrescrever
//     enumerable: true, // Torna enumeravel
//   },
// });

// delete moto.rodas; // Não é possível deletar, por que foi definido como não configurável - linha 58
// moto.rodas = 3; // É possível sobrescrever em moto.rodas por que o writable foi definido como true

// get e set: É possível definirmos diferentes comportamentos para get e set de uma propriedade. Lembrando que ao acionarmos uma propriedade obj.propriedade, a função get é ativada e ao setarmos obj.propridade = 'Valor' a função de set é ativada.

const moto = {
  capacete: true,
};

Object.defineProperties(moto, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      this._rodas = valor * 4;
    },
  },
});
