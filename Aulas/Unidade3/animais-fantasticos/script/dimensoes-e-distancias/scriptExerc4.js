// Verifique a distância da primeira imagem em relação ao topo da página
const img = document.querySelector('img');
const TopImg = img.offsetTop;
console.log(TopImg);

// Retorne a soma da largura de todas as imagens
const AllImg = document.querySelectorAll('img');
function SomaTamImagens(){
  let SomaLargura = 0;
  AllImg.forEach((item) => {
    SomaLargura += item.offsetWidth;
  });
  console.log(SomaLargura);
}

window.onload = function(){ // Onload faz com que a operação seja feita apenas após carregador todo o site. Imagens não possuem o tamanho padrão, e são requisitadas no servidor após a execução, então é necessário calcular a soma delas depois de todo código estiver carregado.
  SomaTamImagens();
}

// Verifique se os links da página possuem o mínimo recomendado para telas utilizadas com o dedo. (48px/48px de acordo com o google)
/* const digital = window.matchMedia('a (max-width: 48px, max-height: 48px)').matches;
if(digital){
  console.log('Tamanho de link aprovado');
} else{
  console.log('Tamanho de link incorreto');
}
*/
const links = document.querySelectorAll('a');

links.forEach((link) => {
  const linkWidth = link.offsetWidth;
  const linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48){
    console.log('Tamanho de link aprovado');
  }
  else{
    console.log('Tamanho de link reprovado');
  }
});

// Se o browser for menor que 720px, adicione a classe menu-mobile ao menu
const janela = window.matchMedia('(max-width: 720px)').matches;
if(janela){
  const menu = document.querySelector('.menu');
  menu.classList.add('menu-mobile');
} else{
  console.log('Menu de desktop');
};