const frutas = ["Banana", "Maçã", "Laranja"];
const frase = "Isso é JavaScript";

// fetch("https://pokeapi.co/api/v2/pokemon/").then(({ headers }) => {
//   console.log(headers);
// });

// for (const fruta of frutas) {
//   console.log(fruta);
// }

// for (const char of frase) {
//   console.log(char);
// }

const buttons = document.querySelectorAll("button");

for (const btn of buttons) {
  btn.style.background = "white";
}
console.log(...buttons);

const carro = {
  marca: "Ford",
  modelo: "Ka",
  ano: 2018,
};

// Erro, não é iterável
// for (const item of carro) {
//   console.log(item);
// }

Object.defineProperties(carro, {
  rodas: {
    value: 4,
    enumerable: false, // caso true, será puxado no for abaixo
  },
});

for (const item in carro) {
  console.log(item, carro[item]);
}

for (const f in frutas) {
  console.log(frutas[f]);
}

const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);

// for (const style in btnStyles) {
//   console.log(`${style}: ${btnStyles[style]}`);
// }

let i = 0;

do {
  console.log(i++);
} while (i <= 3);
