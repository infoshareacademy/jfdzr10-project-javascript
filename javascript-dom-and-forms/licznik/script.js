const bodyElement = document.querySelector("body");
const CreateButtonPlus = document.createElement("button");
const CreateButtonMinus = document.createElement("button");
CreateButtonPlus.innerText = "+";
CreateButtonMinus.innerText = "-";
const pElement = document.createElement("p");
let number = 0;
pElement.innerText = number;

bodyElement.append(CreateButtonPlus);
bodyElement.append(pElement);
bodyElement.append(CreateButtonMinus);

CreateButtonPlus.addEventListener("click", () => {
  number++;
  pElement.innerText = number;
});

CreateButtonMinus.addEventListener("click", () => {
  number--;
  pElement.innerText = number;
});
