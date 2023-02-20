const main = document.querySelector("main");
const button = document.querySelector("button");

let counterValue = 10;

// Junior
// console.log("start");

// const count = () => {
// 	if (counterValue <= 0) {
// 		console.log("koniec");
// 		clearInterval(counterStart);
// 	} else {
// 		console.log(counterValue);
// 		counterValue--;
// 	}
// };
// const counterStart = setInterval(count, 1000);

// Regular
// main.textContent = "start";

// const count = () => {
// 	if (counterValue <= 0) {
// 		main.textContent = "koniec";
// 		clearInterval(counterStart);
// 	} else {
// 		main.textContent = counterValue;
// 		counterValue--;
// 	}
// };
// const counterStart = setInterval(count, 1000);

// Senior
let countNumber;
let interval;

const startCounter = () => {
	main.textContent = "start";

	const count = () => {
		if (countNumber <= 0) {
			main.textContent = "koniec";
			clearInterval(interval);
		} else {
			main.textContent = countNumber;
			countNumber--;
		}
	};
	interval = setInterval(count, 1000);
};

// button.addEventListener("click", () => {
// 	if (interval) {
// 		clearInterval(interval);
// 		main.textContent = "stop";
// 		interval = null;
// 		return;
// 	}

// 	countNumber = 10;
// 	startCounter();
// });

// Dr Strange Level

button.addEventListener("click", () => {
	if (interval) {
		clearInterval(interval);
		main.textContent = "stop";
		interval = null;
		return;
	}

	countNumber = +prompt("od jakiej liczby zaczynamy?");
	startCounter();
});
