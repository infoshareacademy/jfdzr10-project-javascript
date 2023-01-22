// Dane dla zadań 11-15

const people = [
  {
    id: 1,
    first_name: "Kaylil",
    last_name: "Hovey",
    email: "khovey0@gizmodo.com",
    gender: "Female",
    ip_address: "128.158.239.223",
    title: "Rev",
    job_title: "Recruiting Manager",
    race: "Vietnamese",
    company: "Browseblab",
    age: 33,
  },
  {
    id: 2,
    first_name: "Cesare",
    last_name: "Caroline",
    email: "ccaroline1@tmall.com",
    gender: "Male",
    ip_address: "7.78.224.248",
    title: "Rev",
    job_title: "Computer Systems Analyst II",
    race: "Black or African American",
    company: "Wordtune",
    age: 50,
  },
  {
    id: 3,
    first_name: "Xaviera",
    last_name: "Danilchenko",
    email: "xdanilchenko2@so-net.ne.jp",
    gender: "Female",
    ip_address: "161.223.97.94",
    title: "Mr",
    job_title: "Statistician IV",
    race: "Asian",
    company: "Rhynyx",
    age: 55,
  },
  {
    id: 4,
    first_name: "Shandy",
    last_name: "Sanford",
    email: "ssanford3@uiuc.edu",
    gender: "Female",
    ip_address: "40.218.230.208",
    title: "Honorable",
    job_title: "Data Coordiator",
    race: "Eskimo",
    company: "Topdrive",
    age: 76,
  },
  {
    id: 5,
    first_name: "Muire",
    last_name: "Pothecary",
    email: "mpothecary4@mit.edu",
    gender: "Female",
    ip_address: "82.151.63.26",
    title: "Honorable",
    job_title: "Executive Secretary",
    race: "Chickasaw",
    company: "Realbridge",
    age: 15,
  },
  {
    id: 6,
    first_name: "Mano",
    last_name: "Gwatkins",
    email: "mgwatkins5@auda.org.au",
    gender: "Male",
    ip_address: "134.244.218.162",
    title: "Ms",
    race: undefined,
    job_title: "Automation Special",
    age: 23,
  },
  {
    id: 7,
    first_name: "Frederica",
    last_name: "Shackleton",
    email: "fshackleton6@examiner.com",
    gender: "Female",
    ip_address: "191.141.61.25",
    title: "Honorable",
    job_title: "Help Desk Operator",
    race: "Yuman",
    company: "Yoveo",
    age: 89,
  },
  {
    id: 8,
    first_name: "Garvey",
    last_name: "Islep",
    email: "gislep7@nps.gov",
    gender: "Male",
    ip_address: "101.45.75.228",
    title: "Mr",
    job_title: "Internal Auditor",
    race: "Cambodian",
    company: "Livefish",
    age: 76,
  },
  {
    id: 9,
    first_name: "Aristotle",
    last_name: "Gozard",
    email: "agozard8@exblog.jp",
    gender: "Male",
    ip_address: "87.43.196.133",
    title: "Rev",
    job_title: "Software Test Engineer IV",
    race: "Chippewa",
    company: "Feedspan",
    age: 34,
  },
  {
    id: 10,
    first_name: "Bryon",
    last_name: "Boulder",
    email: "bboulder9@parallels.com",
    gender: "Male",
    ip_address: "251.50.80.89",
    title: "Honorable",
    job_title: "Senior Editor",
    race: "Black or African American",
    company: "Kazu",
    age: 25,
  },
];

console.log("Z1");

const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];
console.log(ticktacktoe[2][1]);

console.log("Z2");

const multiplyBy2 = (arr) => console.log(arr.map((m) => m * 2));

multiplyBy2([1, 5, 8, 21]); // [2, 10, 16, 42]
multiplyBy2([17, 123124, 3]); // [34, 246248, 6]

console.log("Z3");

const values = [
  [],
  {},
  -10,
  1,
  0,
  "",
  "full string",
  " ",
  undefined,
  NaN,
  null,
  "0️⃣",
  "💩",
];

const checkBool = (arr) =>
  arr.map((m) => console.log(!!m ? m + ": truthy" : m + ": falsy"));

checkBool(values);

console.log("Z4");

const arr1 = [1, 2, 3, 4];
const arr2 = [1, 4];
const check = (arr) => {
  let len = arr.length;
  switch (len) {
    case 1:
      return len + ' = "#green"';
    case 2:
      return len + ' "#red"';
    case 3:
      return len + ' "#blue"';
    default:
      return 'Każdy inny = "#black"';
  }
};
console.log(check(arr1));
console.log(check(arr2));

console.log("Z5");

const names = ["Mariusz", "Adrian", "Matuesz", "Mati"];
const stringLength = (arr) => arr.map((m) => m.length);
console.log(stringLength(names));

console.log("Z6");

// console.log(people.sort((a, b) => a.last_name.localeCompare(b.last_name)));
console.log(
  people.sort((a, b) => {
    if (a.last_name < b.last_name) {
      return -1;
    }
    if (a.last_name > b.last_name) {
      return 1;
    }
  })
);

console.log("Z7");

const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

const biggerThen20 = numbers.filter((f) => f >= 20);
const sum = numbers.reduce((a, b) => a + b);
const sumNegative = numbers.filter((f) => f < 0).reduce((a, b) => a + b);
const sumEvenIndexes = numbers
  .filter((f, i) => i % 2 === 0)
  .reduce((a, b) => a + b);

console.log(`Elementy większe lub równe od 20: ${[...biggerThen20]}`);
console.log(`Suma elementów w tablicy: ${sum}`);
console.log(`Suma elementów ujemnych: ${sumNegative}`);
console.log(`Suma elementów parzystych: ${sumEvenIndexes}`);

console.log("Z8");

const longestString = (arr) => {
  const len = arr.sort((a, b) => {
    if (a.length < b.length) {
      return 1;
    }
    if (a.length > b.length) {
      return -1;
    }
  })[0];
  console.log(len);
};

longestString(["earth", "vegetable", "cat"]); // 'vegetable'
longestString(["dog", "snake", "grasshopper"]); // 'grasshopper'
longestString(["home", "born", "on"]); // 'home'
longestString(["nice tasks", "could have been better"]); //'could have been better'

console.log("Z9");

const flatArray = (arrOfArr) => console.log(arrOfArr.flat());
flatArray([
  ["a", "b"],
  [1, 2],
]);
flatArray([
  ["red", "blue"],
  ["green", "red", "yellow"],
  ["black", "blue"],
  ["pink", "black", "white"],
]);

console.log("Z10");
const comments = ["earth", "vegetable", "cat"];
const deleteComment = (arr, id) => {
  arr.splice(id, 1);
  return console.log(arr);
};

deleteComment(comments, 2);
