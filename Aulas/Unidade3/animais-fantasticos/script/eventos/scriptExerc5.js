// Quando o usuário clicar nos links internos do site, adicione a classe ativo ao item clicado e remova dos demais itens caso eles possuam a mesma
//Previna o comportamento padrão desses links
const linkInterno = document.querySelectorAll('a[href^="#"]'); // Pega apenas links internos

function ativo(event){
  event.preventDefault();
  const selecionado = event.currentTarget; 
  linkInterno.forEach((link) =>{
    link.classList.remove('Ativo');
  });
  selecionado.classList.add('Ativo');
  /* linkInterno.forEach((link) =>{
    link.classList.add()
  }); */
};

linkInterno.forEach((link) => {
  link.addEventListener('click', ativo);
});

// Selecione todos os elementos do site começando a partir do body, ao clique mostre exatamente quais elementos estão sendo clicados

// const todosElementos = document.querySelectorAll('*');
const todosElementos = document.querySelectorAll('body *');

function handleElemento(event){
  // event.currentTarget.remove();
}

todosElementos.forEach((elemento) => {
  elemento.addEventListener('click', handleElemento);
});

// Utilizando o código anterior, ao invés de mostrar no console, remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site. 

function handleTexto(event){
  console.log(event.key)
  if(event.key === 't'){
    document.documentElement.classList.toggle('aumentaFonte');
  };
};

window.addEventListener('keydown', handleTexto);