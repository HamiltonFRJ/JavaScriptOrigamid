async function puxarDados() {
  try {
    const dadosResponse = await fetch('./json/dados.json');
    const dadosJSON = await dadosResponse.json();

    document.body.innerText = dadosJSON.aula;
  } catch (erro) {
    console.log(erro);
  }
}

puxarDados();

