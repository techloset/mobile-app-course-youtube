// < > == <= >=

var num1 = 7
var num2 = 7
var result = num1 > num2
var result2 = num2 > num1

console.log("num1 > num2 ==>", result);
console.log("num2 > num1 ==>", result2);

var result3 = num1 < num2
var result4 = num2 < num1

console.log("num1 < num2 ==>", result3);
console.log("num2 < num1 ==>", result4);

var result7 = num1 <= num2
var result8 = num2 >= num1

console.log("num1 <= num2 ==>", result7);
console.log("num2 >= num1 ==>", result8);

var result5 = num1 == num2
var result6 = num2 != num1

console.log("num1 == num2 ==>", result5);
console.log("num2 != num1 ==>", result6);

var result9 = num1 === num2
var result10 = num2 !== num1

console.log("num1 === num2 ==>", result9);
console.log("num2 !== num1 ==>", result10);

// = assignment operator
// == equal to operator
// === equal to operator with data types

// && 
// T && T => T  => 2 == 2 && 5 == 5 >> T
// T && F => F => 2 == 2 && 7 == 5 >> F
// F && T => F => 8 == 4 && 7 == 7 >> F
// F && F => F  => 22 > 52 && 30 < 20 >> F

// ||
// T || T => T  => 2 == 2 || 5 == 5 >> T
// T || F => T  => 2 == 2 || 7 == 5 >> T
// F || T => T =>  8 == 4 || 7 == 7 >> T
// F || F => F => 22 > 52 || 30 < 20 >> F

var num3 = 9
var num4 = 10

var flag = num1 >= num2 && num3 <= num4
console.log("num1 >= num2 && num3 <= num4", flag);

var flag2 = num1 > num2 && num3 <= num4
console.log("num1 > num2 && num3 <= num4", flag2);

// complex statement
var finalStatement = num1 >= num2 && num3 <= num4 || num1 > num2 && num3 != num4 && 2 < 5
console.log("finalStatement", finalStatement);

var firstName = "naveed"
var lastName = "sarwar"
var result = firstName != lastName
console.log("firstName != lastName", result);