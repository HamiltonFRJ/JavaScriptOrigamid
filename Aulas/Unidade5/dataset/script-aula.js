const h1 = document.querySelector("h1");

console.log(Object.prototype.toString.call(h1));
HTMLHeadingElement.prototype;

console.log(h1.dataset); // DOMStringMap {}

// dataset
// propriedade de HTMLElement, essa propriedade é um objeto do tipo DOMStringMap. Dentro desse objeto existe uma coleção de chave / valor, com todos os atributos do elemento html que começarem com data- .

let div = document.querySelector("div");

console.log(div.dataset);
console.log(div.dataset.cor);

div = document.querySelector("[data-cor='azul']");

delete div.dataset.width;

const divs = document.querySelectorAll("[data-anima]");
divs.forEach((div) => {
  div.classList.add(div.dataset.anima);
});

// adiciona em ada div
// uma classe com o mesmo nome
// que o valor de data

// Data vs Class
// A vantagem de se utilizar data atributes é que torna mais fácil evirtarmos conflitos com estilos do CSS. Além de deixar a estrutura da tag mais organizada

// Por padrão o JavaScript não aceita - (traço) como caractere válido para nomear propriedades. Então qualquer traço será removido e a letra seguinte transformada em maiúscula.

const div2 = document.querySelector("[data-anima-scroll]");
div2.dataset;
// {animaScroll: 'left'}
div2.dataset.animaScroll; // left
div2.dataset.tempoTotal = 1000;
// Na div2 vira data-tempo-total="1000"
delete div2.dataset.animaScroll; // remove o atributo
