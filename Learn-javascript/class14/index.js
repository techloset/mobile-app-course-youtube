// functions
var num1 = "sdfa"

// function define
// perameters
function sumTwoNumbers(num1, num2, num3,num5) {
//     var num1 = 5;
// var num2 = 10 
var sum = num1 + num2
console.log("sum ==>", sum);

}

// function call


sumTwoNumbers(1,3, 3,4)
sumTwoNumbers(2,3)
sumTwoNumbers(4,5)


// pre defined functions


// function can return a value

function sumThreeNumbers(a=1,b=2,c=3,d,f) {
    console.log("a",a);
    console.log("b",b);
    console.log("c",c);
    var sum = a + b + c;
    return sum
}

var someReturnValue = sumThreeNumbers()
console.log("someReturnValue", someReturnValue);
