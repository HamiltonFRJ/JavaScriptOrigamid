// new Date()
// O construtyor Date cria um objeto contendo valores como mês, dia, ano, horário e mais. A data é baseada no relógio interno do computador.

export default function initFuncionamento() {}

const agora = new Date();
const futuro = new Date("Dec 25 2022");

// console.log(agora.getDay()); // Dia da semana - Sabado - Conta o 0
// console.log(futuro);

// o Método getTime() mostra o tempo total em milessegundos desde o dia 1 de janeiro de 1970
const diasPassados = agora.getTime() / (24 * 60 * 60 * 1000);
