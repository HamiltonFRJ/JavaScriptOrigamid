// Operadores de atribuição
var x = 5;
var y = 10;
x += y; // x = x + y (15)
x -= y; // x = x - y (-5)
x *= y; // x = x * y (50)
x /= y; // x = x / y (0.5)
x %= y; // x = x % y (0)
x **= y; // x = x ** y (9765625)

// Isso server para diminuir o tamanho de bytes dos arquivos, logo, seu tamanho, pois cada caractere conta como um byte.

// Operador Ternário
var idade = 19,
    possuiDiabete = false;
var podeBeber = 
  (idade >= 18 && !possuiDiabete) ? 'Pode Beber' : 'Não pode beber';
// condição ? true : false;
console.log(podeBeber);

// If abreviado
var possuiFaculdade = true;
if(possuiFaculdade) console.log('Possui falculdade'); 
else console.log('Não possui faculdade');
// ou 
if(possuiFaculdade)
  console.log('Possui falculdade');
else
  console.log('Não possui falculdade');


