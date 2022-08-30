// new Date()
// O construtyor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

export default function initFuncionamento() {
  const funcionamento = document.querySelector("[data-semana]");
  const diasSemana = funcionamento.dataset.semana.split(",").map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(",").map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto =
    horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberta && horarioAberto) {
    funcionamento.classList.add("aberto");
  }
}

// const agora = new Date();
// const futuro = new Date("Dec 25 2022");

// console.log(agora.getDay()); // Dia da semana - Sabado - Conta o 0
// console.log(futuro);

// o Método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970
// function transformarDias(tempo) {
//   return tempo / (24 * 60 * 60 * 1000);
// }

// const diasAgora = transformarDias(agora.getTime());
// const diasFuturo = transformarDias(futuro.getTime());

// console.log(transformarDias(agora.getTime()));

// console.log(diasFuturo - diasAgora);
