// console.log(window.history);
// console.log(window.history.back());
// console.log(window.history.forward());
// window.history.pushState(null, null, "sobre.html");

// window.addEventListener("popstate", () => {
//   console.log(`teste`);
// });

const links = document.querySelectorAll("a");

function handleClick(event) {
  event.preventDefault();
  fetchPage(event.target.href);
}

async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  console.log(url);
}

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
