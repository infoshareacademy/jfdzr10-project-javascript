const listArr = ["a", "b", "c", "d"];
const header = document.querySelector("#header");
header.classList.add("header");
console.log(header);
header.innerHTML = "Jestem nagłówkiem";

const bodyElement = document.querySelector("body");
const olElement = document.createElement("ol");

listArr.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerText = item;

  olElement.appendChild(listItem);
});

bodyElement.append(olElement);
const listItems = bodyElement.querySelectorAll("li");

listItems.forEach((f) => {
  f.classList.add("listItem");
});

bodyElement.querySelector(".header").remove();

const buttonElement = document.createElement("button");

buttonElement.innerText = "kliknij";

buttonElement.classList.add("toggleBackground");

bodyElement.append(buttonElement);

buttonElement.addEventListener("click", (e) => {
  const toggleBackgroundColor = () => {};
  if (!bodyElement.style.backgroundColor.length) {
    bodyElement.style.backgroundColor = "#123123";
  } else {
    bodyElement.style.backgroundColor = "";
  }
  e.preventDefault();
  toggleBackgroundColor();
});
