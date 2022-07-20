const carros = ['Ford', 'Fiat', 'VW', 'Honda'];
carros.splice(1,0, 'Kia', 'Mustang'); // [] adiciona a partir do index passado, o segundo valor é quantos itens quer remover do array
// o console log do splice apresenta os itens removidos
console.log(carros.splice(1,2, 'Kia', 'Mustang')); // ['Kia', 'Mustang']
carros; // ['Ford', 'Kia', 'Mustang', 'Fiat', 'VW', 'Honda']

// [].copyWithin(alvo, inicio, final) a partir do alvo, ele irá copiar a array comeándo do inicio até o final e vai preencher a mesma com essa cópia. Caso omita os valores de iício e final, ele irá utilizar como inicio o 0 e final o valor total da array.

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(2, 0, 3);
// ['Item1', 'Item2', 'Item1', 'Item2']
// Nesse caso, a partir do indice 2, ele repete o que está na array a partir do indice 0, contando 3 itens.
// Ele não copiou tudo que foi pedido por conta do tamanho do array

['Item1', 'Item2', 'Item3', 'Item4'].copyWithin(-1);
// ['Item1', 'Item2', 'Item3', 'Item1']

['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana');
// ['Banana', 'Banana', 'Banana', 'Banana']
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 2);
// ['Item1', 'Item2', 'Banana', 'Banana']
['Item1', 'Item2', 'Item3', 'Item4'].fill('Banana', 0, 2);
// ['Banana', 'Banana', 'Item3', 'Item4']

// Métodos de acesso [].concat()
// Os métodos abaixo não modificam a array original, apenas retornam uma array modificada. []concat() irá concatenar a array com o valor passado.
const transportes1 = ['Barco', 'Aviao'];
const transportes2 = ['Carro', 'Moto'];
const transportes = transportes1.concat(transportes2);
// ['Barco', 'Aviao', 'Carro', 'Moto'];

let meioTransportes = [].concat(transportes1, transportes2, 'Trem');
// ['Barco', 'Aviao', 'Carro', 'Moto', 'Trem'];
meioTransportes = ['Helicoptero'].concat(transportes1, transportes2);
// ['Helicoptero', 'Barco', 'Aviao', 'Carro', 'Moto', 'Trem'];

// [].includes(valor) verifica se a array possui o valor e retorna true ou false. [].indexOf(valor) verifica se a array possui o valor e retorna o index do primeiro valor na array. Já o [].lastIndexOf(valor) retorna o index do último.
const linguagens = ['html', 'css', 'js', 'php', 'python'];

linguagens.includes('css'); // true
linguagens.includes('ruby'); // false
linguagens.indexOf('ruby'); // -1
linguagens.indexOf('python'); // 4
linguagens.indexOf('js'); // 2
linguagens.lastIndexOf('js'); // 5

// [].join(separador) junta todos os valores da array e retorna uma string com eles. Se você passar um valor como parâmetro, este será utilizado durante a junção de cada item da array.
linguagens.join(); // 'html,css,js,php,python,js'
linguagens.join(' '); // 'html css js php python'

let htmlString = '<h2>Título Principal</h2>'
htmlString = htmlString.split('h2');
// ['<', '>Título Principal</', '>']
htmlString = htmlString.join('');

// [].slice(inicio, final) retorna os itens da array começando pelo início e indo até o valor de final.
console.log(linguagens.slice(3)); // ['php', 'python']
console.log(linguagens.slice(1, 4)); // ['css', 'js', 'php']

const cloneLinguagens = linguagens.slice(2);

// cloneLinguagens = linguagens.slice(); != cloneLinguagens = linguagens;
// Isso por que se algum método ou execução altera linguagens, também alterará o clone.
// Ao usar o slice, você coloca o resultado do método dentro do clone. Portanto, alterando o "linguagens", não afetará o clone.