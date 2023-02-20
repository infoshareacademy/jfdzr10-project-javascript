const bodyTag = document.body;
bodyTag.style.display = "flex";
bodyTag.style.alignItems = "center";
bodyTag.style.justifyContent = "center";
bodyTag.style.height = "100vh";
bodyTag.style.gap = "20px";

const plusButton = document.createElement("button");
plusButton.innerText = "+";

const minusButon = document.createElement("button");
minusButon.innerText = "-";

const actualNumber = document.createElement("p");
actualNumber.style.fontSize = "48px";

let numberValue = 0;
actualNumber.innerText = numberValue;

const increaseNumber = () => {
	numberValue++;
	actualNumber.innerText = numberValue;
};

const decreaseNumber = () => {
	numberValue--;
	actualNumber.innerText = numberValue;
};

plusButton.addEventListener("click", increaseNumber);

minusButon.addEventListener("click", decreaseNumber);

bodyTag.append(plusButton, actualNumber, minusButon);
