const regexp = /\w+/gi;

// Se passarmos uma string, não precisamos dos // e devemos utilizar \\ para meta characters, pois é necessário escapar a \ especial. As Flags são o segundo argumento

const regexpObj1 = new RegExp("\\w+", "gi");
const regexpObj2 = new RegExp("/w+/", "gi");

console.log("JavaScript Linguagem 101".replace(regexpObj1, "X"));

const regexpTelefone = new RegExp(
  "(?:\\+?55\\s?)?(?:\\(?\\d{2}\\)?[-\\s]?)?\\d{4,5}[-\\s]?d{4}",
  "g"
);

// const regexp = /\w+/gi;

regexp.flags; // "gi"
regexp.global; // true
regexp.ignoreCase; // true
regexp.multiline; // false
regexp.source; // "\w+"

const regexpJava = /Java/g;
const frase = "JavaScript e Java";

regexpJava.lastIndex; // 0
regexpJava.test(frase); // true
regexpJava.lastIndex; // 4
regexpJava.test(frase); // true
regexpJava.lastIndex; // 17
regexpJava.test(frase); // false
regexpJava.lastIndex; // 0
regexpJava.test(frase); // true (reinicia)

console.log(regexpJava.exec(frase)); // [ 'Java', index: 13, input: 'JavaScript e Java', groups: undefined ]

let regexpResult;
while ((regexpResult = regexpJava.exec(frase)) !== null) {
  console.log(regexpResult);
}

const regexp2 = /\w{2,}/g;
const regexpSemG = /\w{2,}/;

const frase2 = "JavaScript, TypeScript e CoffeScript";

console.log(frase2.match(regexp2));
//[ 'JavaScript', 'TypeScript', 'CoffeScript' ]

console.log(frase2.match(regexpSemG));
// [
//   'JavaScript',
//   index: 0,
//   input: 'JavaScript, TypeScript e CoffeScript',
//   groups: undefined
// ]

const script = /Script/g;

const resultado = frase2.split(script);
console.log(resultado);

const tags = "<ul><li>Item 1<li/><li>Item 2</li><ul>";
