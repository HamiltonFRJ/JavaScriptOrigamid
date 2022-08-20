// Fetch API
// Permite fazermos requições HTTP através do métoido fetch().
// Este método retorna a resolução de uma Promise. Podemos então utilizar o then para interagirmos com a respota, que é um objeto do tipo response.

// const doc = fetch("./arquivo.txt");

// doc.then((response) => {
//   response.text().then((body) => {
//     console.log(body);
//   });
// });

// OU

// doc
//   .then((r) => r.text())
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body;
//     console.log(body);
//   });

// O conteúdo do response, possui um corpo com o conteúdo da resposta. Esse corpo pode ser transformado utilizando métodos do protótipo do objeto response. Estes retornam outras promises.

// Servidor Local
// O fetch faz um requisiçõ HTTP/HTTPS. Se você iniciar um site local diretamente pelo index.html, sem um servidor local, o fetch não irá funcionar

// .json()
// Um tipo de formato de dados muito utilizado com JavaSccrip é o JSON (JavaScript Object Notation), pelo fato dele possuir basicamente a mesma sintaxe que a de um objeto js..
// .json() transforma um corpo em json em um objeto JavaScript

const local = fetch("https://viacep.com.br/ws/01001000/json/");

local
  .then((response) => response.json())
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    conteudo.innerText = body.logradouro;
    console.log(body);
  });

// .text()
// Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.

const style = document.createElement("style");

const estilo = fetch("./css/style.css");

estilo
  .then((response) => response.text())
  .then((body) => {
    const conteudo = document.querySelector(".conteudo");
    style.innerHTML = body;
    conteudo.appendChild(style);
  });

// HTML e TEXT
// Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.

const sobre = fetch("./sobre.html");
const div = document.createElement("div");
sobre
  .then((r) => r.text())
  .then((body) => {
    div.innerHTML = body;
    const titulo = div.querySelector("h1");
    document.querySelector("h1").innerText = titulo.innerText;
    console.log(titulo);
  });
