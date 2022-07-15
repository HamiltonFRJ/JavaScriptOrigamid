// Native 
// Objetos nativos são aqueles definidos na especificação da linguagem e são implementados independente do host(navegador)
// Object
// String
// Array 
// Function

// Host
// Objetos Host são aqeules implementados pelo próprio ambiente. Por exemplo, no browser possuímos objetos no DOM, como DomList, HTMLCollection e outros. Em Node.js os objetos do Host são diferentes, já que não estamos em um ambiente do browser.
// NodeList
// HTMLCollection
// Element

// User
// Objetos do user, são os objetos definidos pelo seu aplicativo. Ou seja, qualquer objeto que você criar ou que importar  de alguma biblioteca externa.
const Pessoa = {
  nome: `Hamilton`,
  idade: 21,
};

// Diferentes versões
// Browsers diferentes, versões diferentes e itens diferentes...

// Bibliotecas
// Bibliotecas como jQuery foram criadas para resolver o problema de inconsistências entre browsers e adicionar funcionalidades que não existiam nativamente. A padronização dos browsers e a implementação de soluções nativas, torna as mesmas obsoletas.

// $('a').addClass('ativo');
// $('a').hide();
// $('a').show();

// Como verificar se existe ou não no JS
// O typeof retorna o tipo de dado. Caso esse dado não exista ou não tenha sido definido, ele irá retornar undefined. Ou seja, quando não for undefined quer dizer que existe.

if(typeof Array.from !== 'undefined');
if(typeof NodeList !== 'undefined');

// API
// Application Programming Interface, é uma interface de software criada para a interação com outros softwares. Ou seja, toda interação que fazemos com o browser utilizando Objetos, Métodos e Propriedades, estamos na verdade interagindo com a API do browser.