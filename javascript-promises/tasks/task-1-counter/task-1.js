const container = document.getElementById("counter");
let counterInterval;
let counter;
const startTimer = (cnt) => {
  if (cnt === "") {
    counter = 11;
  } else if (cnt != "start" && cnt != "koniec!") {
    counter = Number(cnt);
  }
  counterInterval = setInterval(() => {
    container.innerHTML = "";
    if (counter == 11) {
      console.log("start");
      container.innerText = "start";
    } else if (counter <= 10 && counter > 0) {
      container.innerText = counter;
      console.log(counter);
    } else {
      container.innerText = "koniec!";
      console.log("koniec!");
    }
    counter--;
  }, 1000);
};
const clearTimer = () => {
  clearInterval(counterInterval);
};
document.querySelector("button").addEventListener("click", (e) => {
  let currentNumber = container.innerText;
  if (currentNumber == "") {
    let startHere = prompt("Podaj liczbę z przedziału 0-11");
    currentNumber = startHere;
  }

  if (e.target.innerText == "Do") {
    e.target.innerText = "Stop";
    startTimer(currentNumber);
  } else {
    e.target.innerText = "Do";
    clearTimer();
  }
});
