// debugger;
let item = 1;
function funcao1() {
  let item2 = 2;
  function funcao2() {
    let item3 = 3;
  }
  funcao2();
}

funcao1();

function contagem() {
  let total = 0;
  return function incrementar() {
    total++;
    console.log(total);
  };
}

const ativarIncremento = contagem();
ativarIncremento(); // 1
ativarIncremento(); // 2
ativarIncremento(); // 3
