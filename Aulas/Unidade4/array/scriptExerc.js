let comidas = ['Pizza', 'Frango', 'Carne', 'Macarrão'];
// Remova o primeiro valor de comidas e coloque em uma variável
const primeiraComida = comidas[0];
//const primeiraComida = comidas.shift();

// Remova o último valor de comidas e coloque em uma variável
const ultimaComida = comidas.pop();

// Adicione 'Arroz' ao final da array
comidas = comidas.concat('Arroz');
// comidas.push('Arroz');

// Adicione 'Peixe' e 'Batata' ao início da array
comidas.splice(0,0, 'Peixe', 'Batata Frita');
// comidas.unshift('Peixe', 'Batata');

// Arrume os estudantes em ordem alfabética
let estudantes = ['Marcio', 'Brenda', 'Joana', 'Kleber',
'Julia'];

estudantes = estudantes.sort();

// Inverta a ordem dos estudantes
estudantes = estudantes.reverse();

// Verifique se Joana faz parte dos estudantes
console.log(estudantes.includes('Joana')); // true

// Verifique se Juliana faz parte dos estudantes
console.log(estudantes.includes('Juliana')); // false


let html = `<section>
 <div>Sobre</div>
 <div>Produtos</div>
 <div>Contato</div>
 </section>`
// Substitua section por ul e div com li,
// utilizando split e join
html = html.split('section');
html = html.join('ul')
html = html.split('div');
html = html.join('li')

// Remova o último carro, mas antes de remover
// salve a array original em outra variável

const carro = ['Palio', 'Ka', 'Gol', 'Uno', 'Onix'];
const carroNovo = carro.slice();

carroNovo.pop();


