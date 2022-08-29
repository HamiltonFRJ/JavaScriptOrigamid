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
  window.history.pushState(null, null, event.target.href);
}

async function fetchPage(url) {
  const pageResponse = await fetch(url);
  const pageText = await pageResponse.text();
  replaceContent(pageText);
}

function replaceContent(newText) {
  const newHtml = document.createElement("div");
  newHtml.innerHTML = newText;
  const oldContent = document.querySelector("content");
  const newContent = newHtml.querySelector("content");

  oldContent.innerHtml = newContent.innerHTML;
  document.title = newHtml.querySelector("title").innerText;
}

links.forEach((link) => {
  link.addEventListener("click", handleClick);
});
