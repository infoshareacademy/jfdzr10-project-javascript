const startCount = document.getElementById("startCount");
const stopCount = document.getElementById("stopCount");
const counter = document.getElementById("counter");

let count = -1;
let counterInterval = null;

const countFunction = () => {
  if (count === -1) {
    startCount.innerText = "Podaj liczbę";
    stopCount.style.display = "none";
    clearInterval(counterInterval);
  } else {
    counter.innerText = `${count}`;
    count -= 1;
  }
};

startCount.addEventListener("click", (event) => {
  if (count === -1) {
    count = prompt("podaj liczbę");
  }
  startCount.innerText = "Start";
  stopCount.style.display = "block";
  counterInterval = setInterval(countFunction, 1000);
});

stopCount.addEventListener("click", (event) => {
  clearInterval(counterInterval);
});
