console.log("window: ", window);
console.log("window.localStorage.: ", window.localStorage);
console.log("localStorage: ", localStorage);


// setitem
localStorage.setItem("username", "Aryan");
localStorage.setItem("password", "Password");
localStorage.setItem("remove", "unwanted");
console.log("After setItem in localStorage: ", localStorage);

// getitem
const localStorageUsername = localStorage.getItem("username");
console.log("get item from loaclStorage: ", localStorageUsername);

// update
localStorage.setItem("username", "Aryan_Keshri");
console.log("After update in localStorage: ", localStorage);

// remove
localStorage.removeItem("remove");
console.log("After remove in localStorage: ", localStorage);

// Store complex data structure like Array of objects
const cars = [
  {name: "Tata", model: "Altroz"},
  {name: "Maruti", model: "Swift"}
]

console.log("cars: ", cars);
console.log("cars type of data sturucture: ", typeof cars);

const carsString = JSON.stringify(cars);
console.log("cars: ", cars);
console.log("cars type of data sturucture: ", typeof cars);

localStorage.setItem("cars", carsString);
console.log("After setItem in localStorage: ", localStorage);

const loaclStorageCars = localStorage.getItem("cars");
console.log("get item from loaclStorage: ", loaclStorageCars);

const localStorageParseCars = JSON.parse(loaclStorageCars);
console.log("localStorageParseCars type of data sturucture: ", typeof localStorageParseCars);
console.log("parse localStorageParseCars: ", localStorageParseCars);

