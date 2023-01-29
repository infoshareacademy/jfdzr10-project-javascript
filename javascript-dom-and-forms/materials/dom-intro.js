const header = document.querySelector("#header");
console.log(header);
header.innerHTML = "Jestem nagłówkiem";
// to samo co wyżej
// const headerElement = document.getElementById("header");

// let obj = {
//   name: "sdasd",
// };

// obj.name = "Janek";

// notacja: obiekt.właściwość = 'nowa wartość';
// headerElement to obiekt, innerText to właściwość, 'Blabla' to nowa wartość dla wlaściwości 'innetText'
headerElement.innerText = "Blabla"; // zmiana wartości jakiejś właściwości (tutaj innerText)

headerElement.remove(); // usuwanie elementów z DOM

const bodyElement = document.getElementsByTagName("body")[0]; // getElementsByTagName zwraca listę elementów DOM, dlatego wskazujemy na index elementu, który nas interesuje

const buttonElement = document.createElement("button"); // tworzenie elementu typu 'button'
buttonElement.innerText = "kliknij"; // zmiana tekstu w przycisku - tak jak zmiana w headerElement wyżej
buttonElement.classList.add("jakaś-tam-moja-klasa"); // dodanie klasy do listy klas elementu 'button' który wczśniej stworzyliśmy

function buttonClickListener() {
  alert("Kliknięto");
}

buttonElement.addEventListener("click", function () {
  alert("Kliknięto");
});
// lub:
buttonElement.addEventListener("click", () => alert("Kliknięto"));
// lub
buttonElement.addEventListener("click", buttonClickListener);

bodyElement.append(buttonElement); // dodanie elementu 'buttonElement' do elementu 'bodyElement' - czylu po prostu dodanie naszego przycisku do znacznika body
