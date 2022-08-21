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

// const local = fetch("https://viacep.com.br/ws/01001000/json/");

// local
//   .then((response) => response.json())
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     conteudo.innerText = body.logradouro;
//     console.log(body);
//   });

// .text()
// Podemos utilizar o .text() para diferentes formatos como txt, json, html, css, js e mais.

// const style = document.createElement("style");

// const estilo = fetch("./css/style.css");

// estilo
//   .then((response) => response.text())
//   .then((body) => {
//     const conteudo = document.querySelector(".conteudo");
//     style.innerHTML = body;
//     conteudo.appendChild(style);
//   });

// HTML e TEXT
// Podemos pegar um arquivo inteiro em HTML, transformar o corpo em texto e inserir em uma div com o innerHTML. A partir dai podemos manipular esses dados como um DOM qualquer.

// const sobre = fetch("./sobre.html");
// const div = document.createElement("div");
// sobre
//   .then((r) => r.text())
//   .then((body) => {
//     div.innerHTML = body;
//     const titulo = div.querySelector("h1");
//     document.querySelector("h1").innerText = titulo.innerText;
//     console.log(titulo);
//   });

// Aula 2

//.blob()
// Um blob é um tipo de objeto utilizado para representação de dados de um arquivo. O blob pode ser utilizado para transofrmarmos requisições de imagens por exemplo. O blob gerqa um URL único.

const imagem = fetch("./imagem.png");

imagem
  .then((r) => r.blob())
  .then((body) => {
    const blobUrl = URL.createObjectURL(body);
    const imagemDom = document.querySelector("img");
    imagemDom.src = blobUrl;
  });

// clone()
// Ao utilizarmos os métodos acima, text, json e blob, a resposta é modificada. Por isso existe o método clone, caso você necessite trasnformar uma resposta em diferentes valores.

// const local = fetch("https://viacep.com.br/ws/01001000/json/");

// local
//   .then((r) => {
//     const r2 = r.clone();
//     r.text().then((text) => {
//       console.log(text);
//     });
//     r2.json().then((json) => {
//       console.log(json);
//     });
//     console.log(r);
//   })
//   .then((body) => console.log(body));

// .headers
// É uma propriedade que possui os cabeçalhos da requisição. É um tipo de dado iterável então podemos utilizar o forEach para vermos cada um deles.

const imagem2 = fetch("https://viacep.com.br/ws/01001000/json/");

imagem2.then((response) => {
  console.log(response);
  response.headers.forEach(console.log);
});

// .status e .ok
// Retorna o status da requisição. Se foi 404, 200, 202 e mais. .ok retorna um valor booelano sendo true para uma requisição de sucesso e false para uma sem sucesso.

// .url .type
// /url retorna o url da requisição. .type retorna o tipo da resposta.

fetch("https://viacep.com.br/ws/01001000/json/").then((response) => {
  console.log(response.type, response.url);
});

// types
// basic: feito na mesma origem
// cors: feito em url body pode estar disponível
// erro: erro de conexão
// opaque: no-cors, não permite acesso de outros sites
