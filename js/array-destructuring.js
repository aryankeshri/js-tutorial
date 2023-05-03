console.log(`----------- Array Destructuring JavaScript -----------`);

const person = {
  firstName: "Aryan",
  lastName: "Keshri",
  contact: "8229911499",
  language: ["Hindi", "English", "Kanada", "Panjabi"],
};

const items = [1, 3, 5, 7];
const nestedArrayItems = [1, 3, [5, 7], 9];

// Desturturing
console.log("Original Array: ", items);
const [a, b, c, d] = items;
console.log(`a: ${a}, b: ${b}, c: ${c}, d: ${d}`);

console.log("Original object Array: ", person.language);
const [lang1, lang2, lang3] = person.language;
console.log(`Lang1: ${lang1}, lang2: ${lang2}, lang3: ${lang3}`);

console.log("Original Array: ", nestedArrayItems);
const [n1, ,n3] = nestedArrayItems;
console.log(`n1: ${n1}, n3: ${n3}`);

const [na1, ,[na31, na32]] = nestedArrayItems;
console.log(`na1: ${na1}, na31: ${na31}`);


// Object destructuring
const hotel = {
  hotelName: "ITC",
  hotelLocation: "Bangalore",
  roomType: ["AC1", "Delux", "villas"],
  openingHours: {
    sunday: {open: "9:00 AM", close: "1:00 PM"},
    rest: {open: "9:00 AM", close: "10:00 PM"},
  },
};

console.log("Original Object: ", hotel);

const {hotelName, hotelLocation, roomType} = hotel;
console.log(hotelName, hotelLocation, roomType);

const {hotelName: hotelTitle, hotelLocation: hotelLoclity} = hotel;
console.log(hotelTitle, hotelLoclity);

// set default values
const {chekoutTime = []} = hotel;
console.log('Default value if chekoutTime is not present in object: ', chekoutTime);

const {openingHours: hotelWorkingTime = []} = hotel;
console.log('hotelWorkingTime: ', hotelWorkingTime);

// Nested Object destructuring
const {hotelName: title, openingHours} = hotel;
console.log('name of hotel: ', title, ', opening Hours: ', openingHours);

const {sunday, rest} = openingHours;
console.log('sunday: ', sunday, ', rest of the week: ', rest);

const {open, close} = sunday;
console.log('open time: ', open, ', close time: ', close);

const {openingHours: {sunday: {open: hotelOpenTime, close: hotelCloseTime}}} = hotel;
console.log('open time: ', hotelOpenTime, ', close time: ', hotelCloseTime);


