const ages = [
  ['Suzie', 1983, 2015],
  ['Miranda', 1983, 2015],
  ['Ferdinand', 1988, 2015]
];

function ageCalculator(name, yearOfBirth, currentYear) {
  let age = currentYear - yearOfBirth;
  let notif = name + " is " + age + " years old.";
  return notif;
}
console.log(ageCalculator("Suzie", 1983, 2015));
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));