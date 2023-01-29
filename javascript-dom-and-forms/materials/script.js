console.log("DOM API");
const header = document.getElementById("header");

console.log(header);
console.log(header.innerText);
//2
header.classList.add("header");
console.log(header);

header.innerText = "Jestem nagłówkiem";

const listItems = ["A", "B", "C", "D"];

const olList = document.createElement("ol");
console.log("ol");
// 4
listItems.forEach((element) => {
  const ilListItem = document.createElement("li");
  ilListItem.innerText = element;
  olList.append(ilListItem);
});
document.body.append(olList);

console.log(listItems);

// 5
document.querySelectorAll("li").forEach((element) => {
  element.classList.add("listItem");
});

//6
header.classList.remove("header");

//7
header.remove();

//8
