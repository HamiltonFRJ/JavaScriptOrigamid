const pais = 'Brasil';
const cidade = new String('Rio');

pais.charAt(0); // B
cidade.charAt(0); // R

String.prototype;

const lista = document.querySelectorAll('li');

const listaAnimais = ['Chachorro', 'Gato', 'Cavalo', 'Vaca'];

// Transforma em um array
const listaArray = Array.prototype.slice.call(lista);
const listaArrayNova = Array.from(lista);

// ListaArray.slice - OK - Prototype
// ListaArrayNova.from - NOT OK 

// [1,2,3].slice(); // Existe
// [1,2,3].from(); // Não Existe

// See the diference in the command bellow 

Object.getOwnPropertyNames(Array);
Object.getOwnPropertyNames(Array.prototype);

// A transformação de um item para Array é muito significativa pela quantidade maior de métodos que existem no Array se comparada por exemplo a uma NodeList

const Carro = {
  marca: 'Ford',
  preco: 32000,
  andar(){
    return true;
  }
}

// Carro = Object
// Object has prototype
// marca = String
// String has prototype
// preco = Number
// Number has prototype
// andar = Function
// Function has prototype
// andar() = IS NOT A FUNCTION = EXECUTION OF FUNCTION
// andar() - Return something - ** Only return matter ** 
// andar() = Boolean
// Boolean has prototype
// Carro.marca.chatAt = Function
// Carro.marca.chatAt(0) = String

// Verifique o nome do construtor com .constructor.name
