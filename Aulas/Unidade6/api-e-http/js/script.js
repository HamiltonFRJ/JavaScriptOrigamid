// fetch("https://pokeapi.co/api/v2/pokemon")
//   .then((response) => response.json())
//   .then((pokemon) => {
//     console.log(pokemon);
//   });

const url = "https://jsonplaceholder.typicode.com/posts";

// const options = {
//   method: "POST",
//   body: '{"title": "JavaScript"}',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
// };

// fetch(url, options)
//   .then((r) => r.json())
//   .then((json) => {
//     console.log(json);
//   });

// GET
const optionsGET = {
  method: "GET"
};
fetch(url, optionsGET)
  .then((r) => r.json())
  .then((json) => {
    console.log(json);
  });

// POST 
const optionsPOST = {
  method: "POST",
  body: '{"title": "JavaScript"}',
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
};
fetch(url, optionsPOST)
  .then((r) => r.json())
  .then((json) => {
    console.log(json);
  });

// PUT
// const optionsPUT = {
//   method: "PUT",
//   body: '{"title": "JavaScript"}',
//   headers: {
//     "Content-Type": "application/json; charset=utf-8",
//   },
// };
// fetch(url, optionsPUT)
//   .then(r => r.json())
//   .then(json => console.log(json));

// HEAD
const optionsHEAD = {
  method: "HEAD"
};
fetch(url, optionsHEAD)
  .then(r => {
    r.headers.forEach(console.log);
    console.log(r.headers.get('Content-Type'));
  });

const url2 = "https://www.google.com"; // Bloqueado pelo Cors

fetch(url2)
  .then(response => response.text())
  .then(json => console.log(json));

