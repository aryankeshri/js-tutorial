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
console.log(arr);
console.log(arrSlice);
console.log(arrSliceNegative);
console.log(arrSliceBothNegative);