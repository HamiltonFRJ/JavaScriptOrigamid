// new Promise()
// Promise é uma função construtora de promessas. Existem dois resultadosp ossíveis de uma promessa, ela pode ser resolvida, com a execução do primeiro argumento, ou rejeitada se o segundo argumento for ativado.
const promessa = new Promise((resolve, reject) => {
  let condicao = true;
  if (condicao) {
    setTimeout(() => {
      resolve({ nome: "Hamilton", idade: 21 });
    }, 1000);
  } else {
    reject(Error("Um erro ocorreu."));
  }
});

// Then -> ativa apenas quando a promise é resolvida
// promessa.then((resolucao) => console.log(resolucao));

// then().then
// O método then() retorna outra Promise. Podemos colocar then() e fazer um encadeamento de promessas. O valor do primeiro argumento de cada then, será     o valor do retorno do anterior

const retorno = promessa
  .then((resolucao) => {
    resolucao.profissao = "Designer";
    return resolucao;
  })
  .then((resolucao) => {
    console.log(resolucao);
  })
  .catch((rejeitada) => {
    console.log(rejeitada);
  })
  .finally(() => {
    console.log("Acabou O_O");
  });

// const retorno = promessa
// .then((resolucao) => {
//   resolucao.profissao = "Designer";
//   return resolucao;
// })
// .then((resolucao) => {
//   console.log(resolucao);
// }), (rejeitada) => {
//   console.log(rejeitada);
// });

// catch()
// o Método catch(), do protótipo de Promises, adiciona um callback a promise que será ativado caso a mesma seja rejeitada.

// finally()
// finally() executará a função anônima assim que a promessa acabar. A diferença do finally é que ele será executado independentemente do resultado, se for resolvida ou rejeitada.

// Promise.all()
// Retornará uma nova promise aassim que todas as promises dentro dela forem resolvidas ou peo menos uma rejeitada. A resposta é uma array com as respostas de cada promise.

const login = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Login efetuado com sucesso!");
  }, 2000);
});
const dados = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Dados Carregados!");
  }, 3000);
});

const tudoCarregado = Promise.all([login, dados]);
