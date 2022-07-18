const frase = 'ta';

console.log(frase.repeat(5));

let listaItens = 'Camisas Bonés Calças Bermudas Vestidos Saias';
listaItens = listaItens.replace(/[ ]+/g, '. ');
console.log(listaItens);

listaItens = listaItens.replace(/[. ]+/g, ', '); // g por causa de global
console.log(listaItens);

listaItens = listaItens.replace('Bermudas', 'Shorts');
console.log(listaItens);

let preco = 'R$ 1200,43';
preco = preco.replace(',', '.');
console.log(preco);

const arrayLista = listaItens.split('s, '); // Quebra em um array, separando pelos caracteres passados
// Se passar uma string vazia, ele quebra por caractere, todo caracteres de torna uma posição de um array
// Se passar nada dentro do split ele quebra em uma só posição de array
console.log(arrayLista);

const htmlText = '<div>O melhor item</div><div>A melhor lista</div>';
const htmlArray = htmlText.split('div');
const htmlNovo = htmlArray.join('section');
// O join junta os itens da array e os separa conforme o parâmetro passado
const frutasArray = ['Banana', 'Melancia', 'Laranja'];
console.log(frutasArray.join('*'));
 // Pode ser usado para juntar uma string e separá-lo pelo parâmetro para depois ser separada como um array com o comando de split

 const sexo1 = 'Feminino';
 const sexo2 = 'feminino';
 const sexo3 = 'FEMININO';

 console.log(sexo1.toUpperCase() === sexo3);

 const valor = ' R$ 23.00  ';
 console.log(valor.trim());  // 'R$ 23.00'
 console.log(valor.trimStart());  // 'R$ 23.00  '
 console.log(valor.trimEnd());  // ' R$ 23.00'

 // Trim - remove os espaços