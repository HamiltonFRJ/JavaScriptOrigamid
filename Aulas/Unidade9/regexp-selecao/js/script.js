// Procura: a
const padraoRegexp = /a/;

const texto = "JavaScript";
const novoTexto = texto.replace(padraoRegexp, "");
console.log(novoTexto);

const regexp = /[-.]/g;
"111.222-333-44".replace(regexp, "");
// 11122233344

const regexp2 = /Bra[sz]il/g;

"Brazil é com z: Brasil".replace(regexp2, "Prazer");
