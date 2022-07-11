// Adicione a classe ativo a todos os itens do menu

const itensMenu = document.querySelectorAll('.menu a');
console.log(itensMenu);
itensMenu.forEach((item) => {
  item.classList.add('ativo')
});
//menu.forEach(() => menu.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha ape
itensMenu.forEach((item) => {
  item.classList.remove('ativo')
});

itensMenu[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
console.log(imgs);

imgs.forEach((item) => {
  const possuiAtributo = item.hasAttribute('alt');
  console.log(possuiAtributo);
});

// Modifique o href do link externo no menu
const desenvolvedor = document.querySelector('.menu li:last-child a');
console.log(desenvolvedor);

desenvolvedor.setAttribute('href', '#contato');

/*const link = document.querySelector('a[href^="http"]') 
  link.setAttribute('href', 'https://www.google.com/');

  console.log(link);
*/
