fetch("./json/dados.json")
  .then((r) => r.json())
  .then((json) => {
    json.forEach((item) => {
      console.log(item.aula);
    });
  });

fetch("./json/dados.json")
  .then((r) => r.text())
  .then((jsonText) => {
    const jsonFinal = JSON.parse(jsonText);
    jsonFinal.forEach((item) => {
      console.log(item.id);
    });
  });

const configuracoes = {
  player: "Google",
  tempo: 25.5,
  aula: "2x1 JavaScript",
};

localStorage.config = JSON.stringify(configuracoes);

console.log(JSON.parse(localStorage.config));
