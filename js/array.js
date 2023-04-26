const arr = [1, 4, 7, 6, 8];
const array = ['john', 'paul', 'Neha', 'harry'];
const array2 = ["a", "r", "y", "a", "n"];

const reversedArray = array.reverse();
console.log(reversedArray);

// concat
const concatArray = array.concat(array2);
console.log(concatArray);

// Join
const joinArray = array.join('_')
console.log(joinArray);

// Slice Method
const arrSlice = arr.slice(1,3);
const arrSliceNegative = arr.slice(1,-3);
const arrSliceBothNegative = arr.slice(-4,-1);
console.log('Original Array: ', arr);
console.log('Slice Array: ', arrSlice);
console.log('Slice one negative Array: ', arrSliceNegative);
console.log('Slice both negative Array: ', arrSliceBothNegative);

// Splice Method
// Array.splice(index, deleteValue, valueToBeAdded)
const arrSplice = [1, 4, 7, 6, 8];
const arraySplice = arrSplice.splice(1, 4);
console.log('Splice Array: ', arraySplice);

// at Method
// .at() receives an index of an item to return. When passing a negative index, 
// it counts from the end of the list or string and returns the item or character found.
// Else, it returns undefined
const array3 = [1, 2, "three", 4, 5, true, false];
const atReturn = array3.at(0);
const atLast = array3.at(-1);
console.log(atReturn);
console.log(atLast);

// rock-paper-scissors game
const computerOptions = ["rock", "paper", "scissors"];
const randomIndex = Math.random() * computerOptions.length;

console.log(computerOptions.at(randomIndex));

// map Method
const salaries = [2000, 3000, 250000, 30000, 60000, 750000]
const newSalary = salaries.map((salary) => {
  let increment = (salary * 5) / 100;
  return salary + increment;
});

console.log(`map method: ${newSalary}`);

// filter Method
const gifts = ["ring", "shose", "perfume", "watch", "cloth", "car", "bike"]
const filteredGift = gifts.filter((gift) => {
  if(gift == "watch" || gift == "car"){
    return gift;
  };
});

console.log(`Gifted filtered item: ${filteredGift}`);

// Reducer Method
let sum = arr.reduce((total, item) => {
  console.log(item, total);
  return total + item;
}, 0);
console.log(sum);

// find Method 
const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }

// flat method
const array4 = [1,2,3,4,[5,8,0]];
console.log("Original array before flat method: ", array4);
console.log("Array after flat method: ", array4.flat());

// flatMap Method
const flatMapReturn = inventory.flatMap((item) => {
  if(item.name === "cherries"){
    return [item, {name: "black berry", quantity: item.quantity * 2}]
  } else {
    return [item];
  }
});
console.log("Array after flatMap method: ", flatMapReturn);
