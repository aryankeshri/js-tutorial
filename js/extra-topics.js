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

console.log(...list);

