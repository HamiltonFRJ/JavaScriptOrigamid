// Liste 5 objetos nativos
Object;
Function;
Array;
String;
Boolean;
Number;
Math;

// Liste 5 objetos do browser
history;
Document;
Window;
HTMLCollection;
NodeList;
alert;

// Liste 2 métodos, propriedades ou objetos presentes no chrome que não existem no firefox

if(typeof document.webkitVisibilityState !== "undefined"){
  console.log("Existe");
}
else{
  console.log("Não existe");
}

webkitHidden;
webkitVisibilityState;

