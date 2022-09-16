export default class ValidarCPF {
  constructor(element) {
    this.element = element;
  }
  limpar(cpf) {
    return cpf.replace(/\D/g, "");
  }
  construir(cpf) {
    return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
  }
  formatar(cpf) {
    const cpfLimpo = this.limpar(cpf);
    return this.construir(cpfLimpo);
  }
  validar(cpf) {
    const matchCPF = cpf.match(/(?:\d{3}[.-\s]?){3}\d{2}/g);
    return (matchCPF && matchCPF[0] === cpf);
  }
  validarNaMudanca(cpfElement) {
    if (this.validar(cpfElement.value)) {
      cpfElement.value = this.formatar(cpfElement.value);
    } else {

    }
  }
  adicionarEvento() {
    // !README: Linha 1 e 2 - anotacoes.txt
    this.element.addEventListener("change", () => {
      this.validarNaMudanca(this.element);
    })
  }
  iniciar() {
    this.adicionarEvento();
    return this;
  }
}