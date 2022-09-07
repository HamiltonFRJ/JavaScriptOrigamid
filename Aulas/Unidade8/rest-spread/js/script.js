function perimetroFolha(lado, totalLados = 4, ...rest) {
  // totalLados = totalLados || 4;
  const argArray = Array.from(arguments);
  argArray.forEach((arg) => {
    console.log(arg);
  });
  return lado * totalLados;
}

perimetroFolha(10, 4, "Rest"); //40
// perimetroFolha(10); // NaN - Sem a alteração no parâmetro ou a definida na função

function anunciarGanhadores(premio, ...ganhadores) {
  console.log("1® Lugar: " + premio);
  ganhadores.forEach((ganhador) => {
    console.log(ganhador + " ganhou um premio.");
  });
}
const ganhadores = ["Pedro", "Marta", "Maria"];
anunciarGanhadores("Hamilton", ...ganhadores);

const frutas = ["Banana", "Maçã", "Laranja"];
const legumes = ["Batata", "Cenoura"];

const comidas = [...frutas, "Hamburguer", ...legumes];
console.log(comidas);

const numeroMaximo = Math.max(4, 5, 25, 6, 7, 8, 9, 10); // 25
const listaNumeros = [1, 15, 24, 56, 78, 21, 43, 76, 9];
const numeroMaximoSpread = Math.max(...listaNumeros);
console.log(numeroMaximoSpread);

const btns = document.querySelectorAll("button"); // Nodelist
const btnsArray = [...btns]; // Converte para Array
// Mesma coisa de:
// const btnsArray = Array.from(btns);

console.log(btnsArray);
