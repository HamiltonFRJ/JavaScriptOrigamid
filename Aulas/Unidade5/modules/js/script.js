import initScrollSuave from "./modules/scroll-suave.js";
import initAnimacaoScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tabnav.js";
import {teste1 as tt1, teste2 as tt2} from "./modules/teste.js"
import * as novoTeste from "./modules/novoTeste.js"


initScrollSuave();
initAnimacaoScroll();
initAccordion();
initTabNav();
tt1();
tt2();
novoTeste.estudo();
console.log(novoTeste.obj);

// Valores do export 
// Podemos expotar objetos, funções, classes, números, strings e mais.
// export const ano = 2000;
// export const obj = {nome: 'Ford'};
// export const str = "Hamilton";
// export class carro {};

/* Características
* Strict Mode
* 'use' strict mode por padrão em todos os arquivos
*
* Variáveis ficam no module apenas
* Não vazam para o escopo globo.
*
* This fora de um objeto faz referência a undefined
* Ao invez de fazer referência ao window.
*
* Assíncrono
*/

// Use Strict
// O modo estrito previne algumas ações consideradas erros.
// Basta adicionarmos 'use strict' no topo de um arquivo, que entrará neste modo.
// nome = 'Ford'; // erro, variável global
// delete Array.prototype; // erro, não deletável
// window.top = 200; // erro, não pode mudar
// const arguments = 3.14; // erro, escrito em palavra reservada

// Por padrão todo module está no modo estrito

