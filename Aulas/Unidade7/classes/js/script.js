// function Button(text, background) {
//   this.text = text;
//   this.background = background;
// }

// Button.prototype.element = function () {
//   const buttonElement = document.createElement("button");
//   buttonElement.innerText = this.text;
//   buttonElement.style.background = this.background;
//   return buttonElement;
// };

// const blueBotton = new Button("Comprar", "blue");

// console.log(blueBotton.element());

class Button {
  constructor(text, background) {
    this.text = text;
    this.background = background;
  }
  element() {
    const buttonElement = document.createElement("button");
    buttonElement.innerText = thjis.text;
    buttonElement.style.background = this.background;
    return buttonElement;
  }
}

const blueButton = new Button("Comprar", "red");
