const carro = {
  marca: "honda",
  ano: 2019,
};

// const marca = carro.marca;
// const ano = carro.ano;
const { marca, ano } = carro;

console.log(marca);
console.log(ano);

const cliente1 = {
  nome: "Hamilton",
  compras: {
    digitais: {
      livros: ["Livro 1", "Livro 2"],
      videos: ["Video JS", "Video HTML"],
    },
    fisicas: {
      cadernos: ["Caderno 1"],
    },
  },
};

// console.log(cliente.compras.digitais.livros);
// console.log(cliente.compras.digitais.videos);

// const { livros, videos } = cliente.compras.digitais;

const {
  fisicas,
  digitais,
  digitais: { livros, videos },
} = cliente1.compras;

console.log(fisicas);
console.log(digitais);
console.log(livros);
console.log(videos);

const cliente2 = {
  nome: "Hamilton",
  compras: 10,
  email: "hamilton@gmail.com",
};

const { nome, compras } = cliente2;
// ou
const { nome: nomeCliente, compras: comprasCliente } = cliente2;

console.log(nomeCliente, comprasCliente);

const { nomeCompleto, comprasTotal, email = "email@gmail.com", cpf } = cliente2;
console.log(email); // hamilton@gmail.com
console.log(cpf); // undefined

const frutas = ["Banana", "Uva", "Morango"];

const primeiraFruta = frutas[0];
const segundaFruta = frutas[1];
const terceiraFruta = frutas[2];
// Com destructuring
const [primeira, segunda, terceira] = frutas;

const primeiroItem = "Item 1";
const segundoItem = "Item 2";
const terceiroItem = "Item 3";
// ou
const [primeiro, segundo, terceiro] = ["Item 1", "Item 2", "Item 3"];

function handleKeyboard(event) {
  console.log(event.key);
}
// Com Destructuring
function handleKeyboard({ key, keyCode }) {
  console.log(key, keyCode);
}

document.addEventListener("keyup", handleKeyboard);
