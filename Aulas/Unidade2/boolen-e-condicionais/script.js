var possuiGraduacao = true;
var possuiDoutorado = true;

if(possuiGraduacao){
  console.log("Possui graduação");
} else if(possuiGraduacao){
  console.log("Possui Doutorado");
} else {
  console.log("Não possui nada");
}

var nome = 'Hamilton';
// nome = 5 == true 
// nome = 0 == false
// undefined == false
// NaN == false

if(nome){
  console.log("Nome: " + nome);
} else {
  console.log("Nome não existe");
}

console.log(!!null)

var x = 10;

console.log(x == 10);

/* Comparações
10 == '10'; // true
10 == 10; // true
10 === '10'; // false
10 === 10; // true
10 != 15 // true
10 != '10' // false
10 !== '10' // true
*/

// Operadores And
true && true; // true
true && false; // false
false && true; // false
false && false; // true
"Gato" && "Cão"; // "Cão"
(5 - 5) && (5 + 5); // 0
"Gato" && false; // false
(5>= 5) && (3 < 6); // true

if((5 - 5) && (5 + 5)){
  console.log("Verdadeiro");
} else{
  console.log("Falso");
}

if((5 - 10) && (5 + 5)){
  console.log("Verdadeiro");
} else{
  console.log("Falso");
}

var condicional = (5 - 10) && (5 + 5);
if(condicional){
  console.log("Verdadeiro");
}else {
  console.log("Falso");
}

// Operadores Or
true || true; // true
true || false; // true
false || true; // true
'Gato' || 'Cão'; // Gato
(5 - 5) || (5 + 5); //10
'Gato' || false; // Gato
(5 >= 5) || (3 < 6); // true

var condicional2 = (5 - 5) || (5 + 6) || (10 -2);
console.log(condicional2);

// Switch

var corFavorita = 'Azul';

switch(corFavorita){
  case 'Azul':
    console.log('Olhe para o céu.');
    break
  case 'Vermelho':
    console.log('Olhe para rosas.');
    break
  case 'Amarelo':
    console.log('Olhe para o sol.');
    break
  default:
    console.log('Feche os olhos.')
}