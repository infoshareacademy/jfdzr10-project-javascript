// Zadanie 1

const header = document.querySelector("#header");

console.log(header);
console.log(header.innerHTML);

// Zadanie 2

header.classList.add("header");

// Zadanie 3

header.innerText = "Jestem nagłówkiem";

// Zdanie 4

const listItems = ["a", "b", "c", "d"];

const orderedList = document.createElement("ol");

listItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerText = item;

  orderedList.append(listItem);
});

document.body.append(orderedList);

// Zadanie 5

const listOfItems = document.querySelectorAll("li");

listOfItems.forEach((element) => {
  element.classList.add("listItem");
});

// Zadanie 6

header.classList.remove("header");

// Zadanie 7

header.remove();

// Zadanie 8

const toggleBackgroundColor = (event) => {
  if (!document.body.style.backgroundColor) {
    document.body.style.backgroundColor = "#123123";
  } else {
    document.body.style.backgroundColor = "";
  }
};

const button = document.createElement("button");
button.innerText = "KLIKNIJ MNIE";

button.addEventListener("click", toggleBackgroundColor);

document.body.append(button);

// Zdanie dodatkowe

const parentDiv = document.createElement("div");
parentDiv.style.display = "flex";
parentDiv.style.gap = "10px";
parentDiv.style.alignItems = "center";

const addButton = document.createElement("button");
const subButton = document.createElement("button");
const score = document.createElement("p");

addButton.innerText = "+";
subButton.innerText = "-";
score.innerText = 0;

addButton.addEventListener("click", () => {
  score.innerText = +score.innerText + 1;
});

subButton.addEventListener("click", () => {
  score.innerText = +score.innerText - 1;
});

parentDiv.append(addButton);
parentDiv.append(score);
parentDiv.append(subButton);

document.body.append(parentDiv);
