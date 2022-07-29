// function.aplly() - O apply(this, [arg1, arg2, ...]) funciona como o call, a única diferença é que os argumentos da função são passados através de uma array.

const numeros = [3, 4, 6, 1, 34, 44, 32];
Math.max.apply(null, numeros);
Math.max.call(null, 3, 4, 5, 6, 7, 20);

// Podemos passar null para o valor de this, caso a função não utilize o objeto para funcionar.

const li = document.querySelector("li");

function itemPossuiAtivo(item) {
  return item.classList.constais("ativo");
}

const filtro1 = Array.prototype.filter.call(li, itemPossuiAtivo);
const filtro2 = Array.prototype.filter.apply(li, [itemPossuiAtivo]);

// function.bind() diferente de call e apply, bind(this, arg1, arg2, ...) não irá executar a função mas sim retornar a mesam com o novo contexto de this.

const filtrarLi = Array.prototype.filter.bind(li, (item) => {
  return item.classList.constais("ativo");
});

filtrarLi();

const $ = document.querySelectorAll.bind(document);

const carro = {
  marca: "Ford",
  ano: 2018,
  acelerar: function (aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  },
};
const honda = {
  marca: "Honda",
};

const acelerarHonda = carro.acelerar.bind(honda);

console.log(acelerarHonda(300, 20));

function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.8);

imc(1.8, 70); // 21.6
imc180(70); // 21.6
