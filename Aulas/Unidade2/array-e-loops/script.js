var videoGames = ['Switch', 'PS4', 'XBOX'];

// videoGames.pop(); // Remove o ultimo item e retorna ele
videoGames.push('3DS'); // Adiciona o item ao final do array

videoGames.length; // 3

for (var i = 9; i < 10; i++){
  console.log(i);
}
// inicio, condição, incremento.

var i = 9;

while(i < 10){
  console.log(i);
  i++;
}

for(var item = 0; item < videoGames.length; item++){
  console.log(videoGames[item]);
  if(videoGames[item] === 'PS4'){
    break;
  }
}

videoGames.forEach(function(item, index, array){
  console.log(item, index, array);
});

var numero = 45;
var maximo = 50;
for(;numero < maximo;){
  console.log(numero);
  numero++;
}

