// async function puxarDados() {
//   try {
//     const dadosResponse = await fetch('./json/dados.json');
//     const dadosJSON = await dadosResponse.json();

//     document.body.innerText = dadosJSON.aula;
//   } catch (erro) {
//     console.log(erro);
//   }
// }

// puxarDados();

async function puxarDados() {
  const dadosResponse = fetch('./json/dados.json');
  const clienteResponse = fetch('./json/clientes.json');

  const jsonDados = await (await dadosResponse).json();
  const jsonClientes = await (await clienteResponse).json();

  console.log(jsonDados);
  console.log(jsonClientes);
}

puxarDados();

async function asyncSemPromise() {
  await new Promise(resolve => {
    setTimeout(() => {
      console.log('Depois de 1 segundo');
      resolve();
    }, 1000);
    console.log('Acabou!')
  })
}

asyncSemPromise();