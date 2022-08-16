// É comum utilizarmos inputs de formulários para criarmos uma interface entre funções de JavaScript e o usuário final do site. Para isso precisamos aprender como pegar os valores dos formulários.
// document.forms; // lista com os formulários
// document.forms.contato; // form com nome contato
// document.forms.contato.elements; // elementos
// document.forms[0].elements[0].value; // valor do primeiro

// A propriedade *value* retorna o valor do elemento no formulário. Se adicionarmos um callback ao keyup, podemos ficar de olho no evento e puxar o valor sempre que ele mudar. *change* dispara quando houver mudanças.

// const form = document.querySelector("#contato");
// const texto = document.querySelector(".texto");

// function handleKeyUp(event) {
//   const target = event.target;

//   if (!target.checkValidity()) {
//     target.classList.add("invalido");
//     contato.email.setCustomValidity("Nome não aceito");
//     contato.email.setCustomValidity("O email não é válido");
//     target.nextElementSibling.innerText = target.validationMessage;
//   }
//   console.log(event.target.checkValidity());
//   console.log(event.target.value);
//   texto.innerText = event.target.value;
// }

// form.addEventListener("keyup", handleKeyUp);

// Validação
// O método *checkValidity* verifica se um input com o atributo required é válido ou não.
// A propriedade *validationMessage* possui a mensagem padrão de errodo do browser. É possível modificar com setCustomValidity('')
// <input type="email" name"email" id "email" required>

// function handleKeyUp(event) {
//   console.log(event.target.value);
//   // document.body.style.backgroundColor = event.target.value;
// }

// form.addEventListener("change", handleKeyUp);

// function handleKeyUp(event) {
//   if (event.target.checked) {
//     console.log(event.target.value);
//   }
// document.body.style.backgroundColor = event.target.value;
// }

const contato = document.querySelector("#contato");
const dados = {};

function handleChange(event) {
  dados[event.target.name] = event.target.value;
  console.log(dados);
}

contato.addEventListener("change", handleChange);
