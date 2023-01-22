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

const ticktacktoe = [
  ["x", "o", "x"],
  ["x", "x", "o"],
  ["o", "**", "o"],
];

console.log("zadanie 1");
console.log(ticktacktoe[2][1]);

const multiplyBy2 = (array) => array.map((e) => e * 2);

console.log("zadanie 2");
console.log(multiplyBy2([1, 5, 8, 21]));
console.log(multiplyBy2([17, 123124, 3]));

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

console.log("zadanie 3");
values.forEach((e) => {
  if (e) console.log(`${e} is truthy`);
  else console.log(`${e} is falsy`);
});

const check = (array) => {
  switch (array.length) {
    case 1:
      return "#green";
    case 2:
      return "#red";
    case 3:
      return "#blue";
    default:
      return "#black";
  }
};

console.log("zadanie 4");
console.log(check([1]));
console.log(check([1, 2]));
console.log(check([1, 2, 3]));
console.log(check([1, 2, 3, 4]));

console.log("zadanie 5");

const stringLength = (array) => array.map((e) => e.length);

console.log(stringLength(["hello", "world", "dog", "sophisticated"]));

const sortFunction = (a, b) => {
  if (a.first_name > b.first_name) return 1;
  if (a.first_name < b.first_name) return -1;
  return 0;
};

console.log("zadanie 6");
console.log(people.sort(sortFunction));

const numbers = [
  11, -10, 50, 5, -8, 9, 20, 21, -4, 11, -5, -12, 100, 20, 14, 8, 19, 44, -21,
  -53, 17, -21,
];

console.log("zadanie 7");
console.log(numbers.filter((e) => e >= 20));
console.log(numbers.reduce((a, b) => a + b));
console.log(
  numbers.reduce((a, b) => {
    if (b < 0) return a + b;
    return a;
  }, 0)
);
console.log(
  numbers.reduce((a, b, idx) => {
    if (idx % 2 === 0) return a + b;
    return a;
  }, 0)
);

const longestString = (array) =>
  array.reduce((a, b) => {
    if (a.length < b.length) return b;
    return a;
  });

console.log("zadanie 8");
console.log(longestString(["earth", "vegetable", "cat"])); // 'vegetable'
console.log(longestString(["dog", "snake", "grasshopper"])); // 'grasshopper'
console.log(longestString(["home", "born", "on"])); // 'home'
console.log(longestString(["nice tasks", "could have been better"]));

const flatArray = (array) =>
  array.reduce((res, cur) => {
    if (Array.isArray(cur)) {
      return [...res, ...flatArray(cur)];
    }
    return [...res, cur];
  }, []);

console.log("zadanie 9");
console.log(
  flatArray([
    ["a", "b"],
    [1, 2],
  ])
);
console.log(
  flatArray([
    ["red", "blue"],
    ["green", "red", "yellow"],
    ["black", "blue"],
    ["pink", "black", "white"],
    [["blue"], ["pink", "black", "white"]],
  ])
);

const deleteComment = (comments, idx) => {
  const _comments = [...comments];
  _comments.splice(idx, 1);
  return _comments;
};

const comments = ["comment1", "comment2", "comment3", "comment4", "comment5"];

console.log("zadanie 10");
console.log(deleteComment(comments, 1));

const showOnlyUsersWithRace = (race) => {
  const filtredArray = people.filter((e) => e.race === race);
  if (typeof race === "string") return filtredArray;
  return "This race doesn't exist";
};

console.log("zadanie 11");
console.log(showOnlyUsersWithRace("Cambodian"));
console.log(showOnlyUsersWithRace(1));
console.log(showOnlyUsersWithRace("Polish"));

console.log("zadanie 12");
console.log(
  people.map(
    (e) =>
      `${e.title} ${e.first_name} ${e.last_name} work as ${e.job_title} in ${e.company}`
  )
);

console.log("zadanie 13");
console.log(
  people.map((e) => ({
    id: e.id,
    first_name: e.first_name,
    last_name: e.last_name,
    full_name: `${e.first_name} ${e.last_name}`,
  }))
);

console.log("zadanie 14");
const ageTogether = people
  .filter((e) => e.age >= 30 && e.gender === "Female")
  .reduce((a, b) => {
    console.log(`${b.first_name} is ${b.age} years`);
    return a + b.age;
  }, 0);
console.log(`Together they have ${ageTogether}`);

console.log("zadanie 15");
console.log(
  people
    .map((e) => ({
      ...e,
      height: e.age + 100,
      weight: e.age + 10,
      bmi: (e.age + 10) / ((e.age + 100) / 100) ** 2,
    }))
    .filter((e) => e.bmi >= 18.5 && e.bmi <= 24.99)
    .map((e) => e.first_name)
);

const inventors = [
  {
    birthDate: "1706-01-06",
    deathDate: "1790-04-17",
    name: "Benjamin Franklin",
  },
  {
    birthDate: "1452-04-15",
    deathDate: "1519-05-02",
    name: "Leonardo da Vinci",
  },
  {
    birthDate: "1400-01-01",
    deathDate: "1468-02-03",
    name: "Johannes Gutenberg",
  },
  {
    birthDate: "1743-04-13",
    deathDate: "1826-07-04",
    name: "Thomas Jefferson",
  },
];

const sortByAgeFunc = (a, b) => {
  const aDate = new Date(a.birthDate);
  const bDate = new Date(b.birthDate);
  return bDate - aDate;
};

console.log("zadanie 16");
console.log(inventors.sort(sortByAgeFunc));

const dayOfTheWeekYouWereBorn = (dateInString) => {
  const date = new Date(dateInString);
  const weekdays = [
    "Niedziela",
    "Poniedziałek",
    "Wtorek",
    "Środa",
    "Czwartek",
    "Piątek",
    "Sobota",
  ];
  return weekdays[date.getDay()];
};

console.log("zadanie 17");
console.log(dayOfTheWeekYouWereBorn("July 17 1999"));

const daysUntilChristmas = () => {
  const christmas = new Date("2023-12-12");
  const today = new Date();
  const dateDiff = christmas - today;
  return Math.ceil(dateDiff / (1000 * 3600 * 24));
};

console.log("zadanie 18");
console.log(daysUntilChristmas());
