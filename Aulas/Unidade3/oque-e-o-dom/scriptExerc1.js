// Retorne o url da página atual utilizando o objeto window
let link = window.location.href;
console.log(link);

// Seleciona o primeiro elemento da página que possua a classe ativo
const classeAtiva = document.querySelector('.ativo')
console.log(classeAtiva);

// Retorne a linguagem do navegador
const linguagemNavegador = {
  lingua: window.navigator.language,
  appNome: window.navigator.appCodeName,
}

// Retorne a largura da janela
const tamanhoJanela = window.innerWidth;
