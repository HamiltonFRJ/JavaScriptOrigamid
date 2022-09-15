import ValidarCPF from "./modules/validar-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCPF = new ValidarCPF();

console.log(validarCPF.formatar("1115553.3322"))