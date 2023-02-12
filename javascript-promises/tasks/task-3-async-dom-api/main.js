const button = document.querySelector(".btn");
const container = document.querySelector(".toast-wrapper");
const intervalArr = [];

button.addEventListener("click", (e) => {
  let newDiv = document.createElement("div");
  newDiv.classList.add("academyLeaf");
  newDiv.innerText = "infoShare Academy!";
  container.append(newDiv);
  if (container.childElementCount) {
    setTimeout(() => {
      //container.childNodes[container.childNodes.length - 1].remove();
      newDiv.remove();
    }, 2000);
  }
});
