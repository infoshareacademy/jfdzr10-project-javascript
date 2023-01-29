const bodyElement = document.querySelector("body");
const buttonPlus = document.createElement("button");
const counterViewer = document.createElement("input");
const buttonMinus = document.createElement("button");

counterViewer.setAttribute("disabled", true);

buttonMinus.innerText = "-";
buttonPlus.innerText = "+";

let counter = 0;
counterViewer.value = counter;

bodyElement.append(buttonPlus, counterViewer, buttonMinus);

const minusOne = () => (counterViewer.value = --counter);
const plusOne = () => (counterViewer.value = ++counter);

buttonMinus.addEventListener("click", minusOne);

buttonPlus.addEventListener("click", plusOne);
