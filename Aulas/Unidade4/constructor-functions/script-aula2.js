// const Dom = {
//   seletor: 'li',
//   element(){
//     return document.querySelector(this.seletor);
//   },
//   ativo(){
//     this.element().classList.add('ativo');
//   },
// }

function Dom(seletor) {
  this.element = function(){
    return document.querySelector(seletor);
  }
  this.ativo = function(classe){
    this.element().classList.add(classe);
  }
};

const li = new Dom('li');
const lastli = new Dom('li:last-child');
const ul = new Dom('ul');

lastli.ativo('ativo');