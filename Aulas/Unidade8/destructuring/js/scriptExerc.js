// Extraia o backgroundColor, color e margin do btn
const btn = document.querySelector("button");
const btnStyles = getComputedStyle(btn);
// console.log(btnStyles);
const { backgroundColor, color, margin, fontFamily } = btnStyles;
console.log(`O backgroundColor do botão é: ${backgroundColor},
O color do botão é: ${color},
O margin do botão é: ${margin},
A fonte do botão é: ${fontFamily}, `);

// Troque os valores das variáveis abaixo
let cursoAtivo = "JavaScript";
let cursoInativo = "HTML";

[cursoAtivo, cursoInativo] = [cursoInativo, cursoAtivo];
console.log(cursoAtivo, cursoInativo);

// Corrija o erro abaixo
const cachorro = {
  nome: "Bob",
  raca: "Labrador",
  cor: "Amarelo",
};
// const { bobCor: cor } = cachorro;
const { cor: bobCor } = cachorro;
console.log(bobCor);
