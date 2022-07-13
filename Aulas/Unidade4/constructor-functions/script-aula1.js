/* const carro = {
  marca: 'Marca',
  preco: 0,
}
 
const city = carro;
city.marca = 'Honda';
city.preco = 40000;

const palio = carro;
palio.marca = 'Fiat';
palio.preco = 30000;
*/ 
function Carro() {
  this.marca = 'Marca';
  this.preco = 0;
}

const city = new Carro();
city.marca = 'Honda';
city.preco = 44000;
const ka = new Carro();
ka.marca = 'Ford';
ka.preco = 24000;

/* Outro método 
function Carro(marcaNova, precoNovo) {
  this.marca = marcaNova;
  this.preco = precoNovo;
}
*/ 

function Carro2(marca, precoInicial) {
  const taxa = 1.2;
  const precoFinal = precoInicial * taxa;
  this.marca = marca;
  this.preco = precoFinal;
  console.log(this);
}

const honda = new Carro2('Honda', 44000);
const mazda = new Carro2('Mazda', 87000);

/* Variáveis dentro do objeto são protegidas
this.'' fica exposta, const não!!
*/

