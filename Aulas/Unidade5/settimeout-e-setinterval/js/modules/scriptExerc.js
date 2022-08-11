export default function exercicio() {
  // Mude a cor da tela para azul e depois para vermelho a cada 2s.

  /* Minha solução
  const corpoSite = document.body;

  for (let i = 0; i < 10; i++) {
    corpoSite.classList.add("red");
    setTimeout(() => {
      corpoSite.classList.toggle("red");
    }, 2000 * i);
    setTimeout(() => {
      corpoSite.classList.toggle("blue");
    }, 2000 * i);
  }
  */

  function mudarClasse() {
    document.body.classList.toggle("active");
  }

  setInterval(mudarClasse, 2000);

  // Crie um cronometro utilizando o setInterval. Deve ser possível;
  // iniciar, pausar e resetar (duplo clique no pausar).

  const iniciar = document.querySelector(".start");
  const pausar = document.querySelector(".stop");
  const tempo = document.querySelector(".tempo");

  iniciar.addEventListener("click", iniciarTempo);
  pausar.addEventListener("click", pausarTempo);
  pausar.addEventListener("dblclick", resetarTempo);

  let i = 0;
  let timer;
  function iniciarTempo() {
    timer = setInterval(() => {
      tempo.innerText = i++;
    }, 1000);
    iniciar.setAttribute("disabled", "");
  }
  function pausarTempo() {
    clearInterval(timer);
    iniciar.removeAttribute("disabled");
  }
  function resetarTempo() {
    tempo.innerText = 0;
    i = 0;
  }
}
