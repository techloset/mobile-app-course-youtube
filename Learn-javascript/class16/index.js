
var numbers = [1,2,3,4,5,6,7,8,9,10]

console.log("numbers length", numbers.length);

// write a js program to multiply an array with 2 of all indexes and console the new array?
// console.log("Old Numbers",numbers);
var newNumbers = []
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    newNumbers.push(element*2)
}
// console.log("New Numbers", newNumbers);


// var mapNewArray = numbers.map(()=>)

// Loops in General
// for loop
// while loop
// do while loop

// loops for arrays
// map
var result = numbers.map((element, index) => element > 5);
// filter
// var result = numbers.filter((element, index) =>element > 5);
// forEach
//  var result = numbers.forEach((element, index) => {
//     return element * 2
//     console.log("element=>", element, "index=>", index);
// });
console.log("result", result);

// arrow functions

function someTwoNumbers(a,b) {
    return a+b
}
const someTwoNumbersWithArrow = (a,b) => a+b

// benefits of arrow method 1- more compact, short code, better performance

// console.log("someTwoNumbers(2,3)",someTwoNumbers(2,3));
// console.log("someTwoNumbersWithArrow",someTwoNumbersWithArrow(2,3));

// Loops in array common points
// for each, map, and filter loop will work arrays
// how many times loop will repeat will be based on array length
// we have to pass call back function in peram of for each, map, and filter method

// differ points
// for each loop can't return value
// map, filter loop can return values
// map loop returned values can be only equal to original array
// filter loop returned values can be only equal to original array or less than original array