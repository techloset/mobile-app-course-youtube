var num1 = 1;
// var num2 = 2;
// var num3 = 3;
// var num4 = 4;
// var num5 = 2;
// var num6 = 3;
// var num7 = 4;
//          numbers[0] = 1
var numbers = [1,2,3,4,5,6,7,8,9,10]
//            names[0]          1         2         3       4
var names = ["naveed", "trainer", "navee", "sarwar", "ali", 2, false, 2.3]
console.log("first variable from array =>", names[0] );
console.log("4th variable / index from array =>", names[4] );
console.log("2nd variable / index from array =>", names[1] );
console.log("last variable / index from array =>", names[7] );
num1 = 3;
names[0] = "Muhammad Ali"
console.log("first variable from array =>", names[0] );
console.log("Array length", names.length);
console.log("last index find through array length", names[names.length - 1]);

// write a js program to print or console whole elements from the array!
for (let index = 0; index < names.length; index++) {
    console.log("index",index);
 console.log("Array values using loop", names[index]);
}

// names[index] >> names[0]
// names[index] >> names[1]

// inc or dec operator ++, --
// var number1 = 1; 
// number1++
// number1 = number1 + 1

// var number1 = 1; 
// number1--
// number1 = number1 - 1
