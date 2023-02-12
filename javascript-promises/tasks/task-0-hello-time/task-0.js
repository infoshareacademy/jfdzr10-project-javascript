const colorInput = document.getElementById("colorInput");
const counter = document.getElementById("counter");

colorInput.addEventListener("change", (event) => {
  let count = 4;
  const counterInterval = setInterval(() => {
    counter.innerText = `Kolor zmieni się za ${count}`;
    count -= 1;
  }, 1000);
  setTimeout(() => {
    document.body.style.background = event.target.value;
    clearInterval(counterInterval);
    counter.innerText = "";
  }, 5 * 1000);
});
