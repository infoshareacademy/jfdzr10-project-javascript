const junior = () => {
  setTimeout(() => {
    document.body.style.backgroundColor = "#999";
    reqular();
  }, 5000);
};
junior();

const reqular = () => {
  const conf = confirm("Zmienić kolor?");
  if (conf) {
    document.body.style.backgroundColor = "#fff";
  }
};

document.querySelector("input").addEventListener("change", (e) => {
  setTimeout(() => {
    document.body.style.backgroundColor = e.target.value;
  }, 5000);
});
