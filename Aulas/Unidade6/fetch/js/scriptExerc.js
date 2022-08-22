// Utilizando a API https://viacep.com.br/ws/${CEP}/json/
// crie um formulário onde o usuário pode digitar o cep
// e o endereço completo é retornado ao clicar em buscar

// Minha tentativa:
/*
const inputCep = document.querySelector("#cep");
inputCep.addEventListener("change", handleChange);

let resultadoCep = document.querySelector(".cepText");

function handleChange(event) {
  const link = "https://viacep.com.br/ws/" + event.target.value + "/json/";
  const endereco = fetch(link).then((response) =>
    response.json().then((body) => {
      console.log(body);
      resultadoCep.innerHTML = [body.logradouro, body.bairro, body.localidade];
    })
  );
  console.log(endereco);
}
*/

// Origamid
const inputCep = document.getElementById("cep");
const btnBuscar = document.getElementById("btnBuscar");
const enderecoFinal = document.getElementById("enderecoFinal");

btnBuscar.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const cep = inputCep.value;
  pesquisaCep(cep);
}

function pesquisaCep(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => response.text())
    .then((body) => {
      enderecoFinal.innerText = body;
    });
}

// Utilizando a API https://blockchain.info/ticker
// retorne no DOM o valor de compra da bitcoin and reais.
// atualize este valor a cada 30s

const valorBitcoin = document.querySelector(".valorBitcoin");
console.log(valorBitcoin);
// Utilizando a API https://api.chucknorris.io/jokes/random
// retorne uma piada randomica do chucknorris, toda vez que
// clicar em próxima
