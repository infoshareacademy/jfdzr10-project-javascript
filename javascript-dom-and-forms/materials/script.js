// 1
console.log("DOM API");
const header = document.getElementById("header");
console.log(header);

// 2
header.classList.add("header");

// 3
header.innerText = "Jestem nagłówkiem";

// 4
const listItems = ["a", "b", "c", "d"];
const list = document.createElement("ol");
listItems.forEach((item) => {
  const listItem = document.createElement("li");
  listItem.innerText = item;
  list.appendChild(listItem);
});
document.body.appendChild(list);

// 5
const test = document.querySelectorAll("li");
console.log(test);
