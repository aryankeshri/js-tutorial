console.log(`----------- Array Destructuring JavaScript -----------`);

const school = {
  schoolName: "ITC",
  SchoolLocation: "Bangalore",
  sections: ["A1", "B1", "C1"],
  openingHours: {
    sunday: {open: "9:00 AM", close: "1:00 PM"},
    rest: {open: "9:00 AM", close: "10:00 PM"},
  },
};

const list = [1, 3, 5, 7];


// Spread operator
console.log("###### Spread operator ######");
console.log(...list);

const newList = [-1, -23, ...list];
console.log(newList);

console.log([...school.sections]);
console.log([...school.sections, "D1", "D2"]);


// join two array
console.log([...list, ...newList]);
console.log([...list, ...list]);

const phase = "Hello world Aryan!";
console.log(...phase);


// Rest operator
console.log("###### Rest operator ######");
const [a, b, ...others] = list;
console.log(others);


// for-of loop
console.log("###### for-of ######");
for(let sec of school.sections) console.log(sec);


// operational chainning
console.log("###### Operational Chainning ######");
console.log(school?.openingHours?.monday?.open);
console.log(school?.openingHours?.sunday?.open);


// Object looping properties
console.log("###### Object looping of keys ######");
console.log(Object.keys(school));

console.log("###### Object looping of values ######");
console.log(Object.values(school));

console.log("###### Object of entries ######");
console.log(Object.entries(school));
