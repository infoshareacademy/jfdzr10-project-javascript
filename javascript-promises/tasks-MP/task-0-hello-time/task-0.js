// Junior
const changeBodyBackground = (value) => {
	document.body.style.background = value;
};

// setTimeout(() => {
// 	changeBodyBackground('#ccc');
// }, 5000);

// Regular
// let isExecuted = confirm("Would you like to change body background?");

// if (isExecuted) {
// 	setTimeout(() => {
// 		changeBodyBackground("red");
// 	}, 5000);
// }

// Senior
const colorPicker = document.querySelector("#picker");

const changeColor = () => {
	setTimeout(() => {
		changeBodyBackground(colorPicker.value);
	}, 5000);
};

colorPicker.addEventListener("input", changeColor);
