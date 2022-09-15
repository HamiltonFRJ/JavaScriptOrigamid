import ValidarCPF from "./modules/validar-cpf.js";

const cpf = document.querySelector("#cpf");
const validarCPF = new ValidarCPF();

console.log(validarCPF.formatar("11´15553.3322"))