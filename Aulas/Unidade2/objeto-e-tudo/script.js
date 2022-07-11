var nome = 'Hamilton';
nome = nome.toLowerCase();
console.log(nome.length);
console.log(nome)
nome.length;
nome.charAt(1);
nome.replace('on', 'om'); // Hamiltom


11.8.toFixed(); // Arredonda o número

var altura = 1.8;

altura.toString(); // '1.8'
altura.toFixed(); // '2'

function areaQuadrado(lado){
  return lado * lado;
}

areaQuadrado.toString();
/*
function areaQuadrado(lado){
  return lado * lado;
}
*/
areaQuadrado.length; // 1 parâmetro(s)/ argumentos

var btn = document.querySelector('.btn');

btn.classList.add('azul'); // adiciona a classe azul
btn.innerText; // 'Clique'
btn.addEventListener('click', function(){
  console.log('Clicou')
})

