import Countdown from "./module/countdown.js";

const tempoNatal = new Countdown("24 December 2022 23:59:59 GMT-0300");

console.log(tempoNatal.total);
setInterval(() => {
  console.log(tempoNatal.total);
}, 1000);
