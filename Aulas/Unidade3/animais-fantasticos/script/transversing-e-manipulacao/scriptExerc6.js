// Duplique o menu e adicione ele em copy
const menu = document.querySelector('.menu');
const copyright = document.querySelector('.copy');
const cloneMenu = menu.cloneNode(true);

copyright.appendChild(cloneMenu);
// Selecione o primeiro DT da dl de Faq
const faq = document.querySelector('.faq')
const firstDT = faq.querySelector('dt:first-child');

// Selecione o DD referente ao primeiro DT
const firstDD = firstDT.nextElementSibling;

// Substitua o conteúdo html de .faq pelo de .animais
const animais = document.querySelector('.animais');

faq.innerHTML = animais.innerHTML;

