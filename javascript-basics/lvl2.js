(function () {
  console.log("Witamy na zajęciach projektowych z JS!");
})();

let team4 = [];

const adrianBaran = {
  firstName: "Adrian",
  surName: "Baran",
  age: 34,
  height: 180,
  address: {
    city: "Gdańsk",
    street: "Gdzies",
    postalCode: "21-630",
    hobby: ["Games", "Books", "Astronomy"],
    pet: true,
  },
};

const ktosTam = {
  firstName: "Ktos",
  surName: "Tam",
  age: 25,
  height: 154,
  address: {
    city: "Gdańsk",
    street: "Tam",
    postalCode: "20-630",
    hobby: ["Pushups", "Walking", "Counting"],
    pet: false,
  },
};

team4.push(adrianBaran);
team4.push(ktosTam);

const sayHello = (obj) =>
  `Mam na imię ${obj.firstName}, mieszkan w mieście ${obj.address.city}, moje hobby to ${obj.address.hobby[0]}, ${obj.address.hobby[1]}, ${obj.address.hobby[2]}`;
team4.map((m) => console.log(sayHello(m)));

const captain = (person) => {
  person.isGroupLeader = true;
};
captain(team4.find((f) => f.firstName == "Adrian"));
