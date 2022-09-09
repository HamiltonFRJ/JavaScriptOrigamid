const regexpCEP = /\d{5}[-\s]?\d{3}/g;

const ceps = ["00000-000", "00000 000", "00000000"];

for (cep of ceps) {
  console.log(cep, cep.match(regexpCEP));
}

const regexpCPF = /(?:\d{3}[.-\s]?){3}\d{2}/g;

const regexpCNPJ = /\d{2}[.-]?(?:\d{3}[.-]?){2}\/?\d{4}[.-]?\d{2}/g;

const regexpTelefone = /(?:\+?55\s?)?(?:\(?\d{2}\)?[\s-]?)?\d{4,5}[-\s]?\d{4}/g;

const regexpEmail = /[\w.-]+@[\w-]+\.[\w.-]+/gi;

const regexpTAG = /<\/?[\w\s="']+\/?>/gi;
const regexpTAG2 = /(?<=<\/?)[\w]+/gi;