// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002.
var copasDoBrasil = [1959, 1962, 1970, 1994, 2002]

// Interaja com a array utilizando um loop, para mostrar no console a seguinte mensagem, 'O Brasil ganhou a copa de ${ano}'
for(var i = 0; i < copasDoBrasil.length; i++){
  console.log(`O Brasil ganhou a copa de ${copasDoBrasil[i]}`)
}

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera
var frutas = ['Banana', 'Maçã', 'Pera', 'Uva', 'Melância']

console.log('Procurando fruta:')
for(var i = 0; i <= frutas.length; i++){
  console.log(frutas[i])
  if(frutas[i] === 'Pera'){
    console.log(`A ${frutas[i]} foi encontrada na posição ${i + 1}, finalizando...`)
    break;
  }
}
// Coloque a última fruta da array acima em uma variável, sem remover a mesma do array.
/* function recolheUltimo(){
  for(var i = 0; i <= frutas.lenght; i++){ 
    if(i == frutas.length){
      recolheUltimo = frutas[i];
      return ultimoElemento;
    }
  }
}
*/
var recolheUltimo = frutas[frutas.length - 1];
// var recolheUltimo = frutas.slice(-1);
// var recolheUltimo = frutas[4];

console.log(recolheUltimo);

console.log(frutas);


