console.log("DOM API");

const header = document.getElementById("header");

console.log(header.innerText);

header.classList.add("header");
header.innerText = "Jestem nagłówkiem";

const listItems = ["a", "b", "c", "d"];

const orderedList = document.createElement("ol");

listItems.forEach((item) => {
	const listItem = document.createElement("li");
	listItem.innerText = item;
	orderedList.append(listItem);
});

document.body.append(orderedList);

const allListItems = document.querySelectorAll("li");

allListItems.forEach((item) => item.classList.add("listItem"));

header.classList.remove("header");
header.remove();

const button = document.createElement("button");

button.innerText = "KLIKNIJ MNIE";

document.body.append(button);

const toggleBackgroundColor = () => {
	!document.body.style.backgroundColor
		? (document.body.style.backgroundColor = "#123123")
		: (document.body.style.backgroundColor = "");
};

button.addEventListener("click", toggleBackgroundColor);
