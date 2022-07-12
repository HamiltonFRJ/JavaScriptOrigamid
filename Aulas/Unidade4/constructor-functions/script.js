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

const city = new Carro('Honda', 44000);
*/