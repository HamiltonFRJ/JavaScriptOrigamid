function createButton(text) {
  function element() {
    const buttonElement = document.createElement('button');
    buttonElement.innerText = text;
    return buttonElement;
  }
  return {
    element: element,
    text: text,
  }
}

const comprarBtn = createButton('Comprar');

function criarPessoa1(nome, sobrenome) {
  const nomeCompleto = `${nome} {sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  function nadar() {
    return `${nomeCompleto} nadou`;
  }
  return {
    nome,
    sobrenome,
    andar,
    nadar,
  }
}

'use strict'; // Ao tentar escrever sobre, dá erro, por estar congelado.

function criarPessoa2(nome, sobrenome) {
  const nomeCompleto = `${nome} {sobrenome}`;
  function andar() {
    return `${nomeCompleto} andou`;
  }
  return Object.freeze({
    nome,
    sobrenome,
    andar,
  })
}

function Pessoa(nome) {
  if (!(this instanceof Pessoa)) // ou (!new.target)
    return new Pessoa(nome);
  this.nome = nome;
}
Pessoa.prototype.andar = function () {
  return `${this.nome} andou`;
}
const designer = Pessoa("André");