console.log("DOM API");
const header = document.getElementById("header");
console.log(header);

header.classList.add("header");

document.querySelector("#header").innerText = 'Jestem nagłówkiem'
//
const listItems = ["a", "b", "c", "d"];

const olList = document.createElement("ol");
console.log("ol");

listItems.forEach((element) => {
    const newListItem = document.createElement("li");
    newListItem.innerText = element;
    olList.append(newListItem);
});

document.body.append(olList);
console.log(listItems);
//
document.querySelector