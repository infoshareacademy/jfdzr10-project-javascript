console.log("DOM API");

const header = document.querySelector("#header");
header.classList.add("header");
header.innerText = "Jestem nagłówkiem";

const listItems = ["a", "b", "c", "d"];

const bodyElement = document.querySelector("body");
const createOl = document.createElement("ol");

listItems.forEach((element) => {
  const createLi = document.createElement("li");
  createLi.innerText = element;
  createOl.appendChild(createLi);
});

bodyElement.appendChild(createOl);

const allLiElements = document.querySelectorAll("li");

allLiElements.forEach((element) => {
  element.classList.add("listItem");
});

header.classList.remove("header");

header.remove();

const toggleBackgroundColor = () => {
  bodyElement.style.backgroundColor == "#123123";
};

const toggleButton = document.createElement("button");
toggleButton.innerText = "KLIKNJ MNIE";

bodyElement.appendChild(toggleButton);

toggleButton.addEventListener("click", toggleBackgroundColor());
