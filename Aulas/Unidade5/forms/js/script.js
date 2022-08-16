// É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.
document.forms; // lista com os formulários
document.forms.contato; // form com nome contato
document.forms.contato.elements; // elementos
document.forms[0].elements[0].value; // valor do primeiro

// A propriedade *value* retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup, podemos ficar de olho no evento e puxar o valor sempre que ele mudar. *change* dispara quando houver mudanças.

const form = document.querySelector("#contato");
const texto = document.querySelector(".texto");

function handleKeyUp(event) {
  console.log(event.target.value);
  texto.innerText = event.target.value;
}

form.addEventListener("keyup", handleKeyUp);
