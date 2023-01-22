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

console.log("Z11");

const showOnlyUsersWithRace = (race) => {
  const ppl = people.filter((f) => f.race == race);
  if (ppl.length) {
    console.log(ppl);
  } else {
    console.log("This race doesn't exist");
  }
};
showOnlyUsersWithRace("Cambodian");
showOnlyUsersWithRace(1);

console.log("Z12");

people.map((m) =>
  console.log(
    `${m.title} ${m.first_name} ${m.last_name} work as ${m.job_title} in ${m.company}`
  )
);

console.log("Z13");

const deleteKeys = (obj) => {
  return obj.map((m) => {
    let nObj = {
      id: m.id,
      first_name: m.first_name,
      last_name: m.last_name,
    };

    nObj.full_name = m.first_name + " " + m.last_name;
    return nObj;
  });
};
console.log(deleteKeys(people));

console.log("Z14");

const oldFemales = people.filter((f) => {
  if (f.age > 30 && f.gender == "Female")
    return `${f.first_name} is ${f.age} years old`;
});

console.log(oldFemales);

console.log("Z15");

const editObj = (arr) => {
  arr.map((m) => {
    m.height = m.age + 100;
    m.weight = m.age + 10;
    m.bmi = m.weight / (m.height / 100) ** 2;
    return m;
  });
  return arr
    .filter((f) => f.bmi >= 18.5 && f.bmi < 24.99)
    .map((m) => m.first_name);
};
console.log(editObj(people));

console.log("Z16");

console.log("Z17");

const dayOfTheWeekYouWereBorn = (stringDate) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const d = new Date(stringDate);
  return `You were born on ${days[d.getDay()]}`;
};
console.log(dayOfTheWeekYouWereBorn("November 30 1993"));
console.log("Z18");

const daysUntilChristmas = (stringDate) => {
  let date_1 = new Date(stringDate);
  let date_2 = new Date("12/24/2023");

  const days = (date_1, date_2) => {
    let difference = date_1.getTime() - date_2.getTime();
    let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
  };
  return `${days(date_1, date_2)} days left until Christmas!`;
};
//work in progress
console.log(daysUntilChristmas("November 30 1993"));
console.log("Z19");

const students = [
  { name: "Zbigniew", tasksDone: 150, hoursSpent: 160 },
  { name: "Krystyna", tasksDone: 1, hoursSpent: 1 },
  { name: "Krzysztof", tasksDone: 100, hoursSpent: 80 },
  { name: "Seba", tasksDone: 200, hoursSpent: 40 },
  { name: "Dagmara", tasksDone: 50, hoursSpent: 100 },
];

const requirements = {
  minHoursSpent: 80,
  minTasksDone: 100,
};

const checkJuniorReq = (students, requirements) => {
  const goodStudents = students.filter(
    (f) =>
      f.tasksDone >= requirements.minTasksDone &&
      f.hoursSpent >= requirements.minHoursSpent
  );
  const badStudents = students.filter(
    (f) =>
      f.tasksDone < requirements.minTasksDone ||
      f.hoursSpent < requirements.minHoursSpent
  );
  return `${[...goodStudents.map((m) => m.name)].join(
    ", "
  )} - gratulacje! Ciężka praca popłaca! ${[
    ...badStudents.map((m) => m.name),
  ].join(", ")} - DO ROBOTY LENIE!`;
};
console.log(checkJuniorReq(students, requirements));

console.log("Z20");
