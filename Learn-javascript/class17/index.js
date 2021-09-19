// try
// catch
// SetTimeOut & SetInterval
// spread operator doing the concat job
// Destructuring
// Rest Syntax
// Async Await

// error Handling
console.log("line10");
console.log("line11");

try {
    console.log("try exc");
    // break 
    // alert()
    var num = 2/0;
}
catch(err){
console.log("err", err);
}
finally{
console.log("finally run");
}


console.log("line25");
console.log("line236");

// Destructuring

var car = {
    name: 'cultus',
    engine: '121',
    color: 'white',
    company: {
     name: 'honda'
    }
}
var {name, engine, color} = car;
console.log("car color", car);
console.log("car  color by dest", color);


const country  =  car.company.country || 'default';
console.log("print undefined value",country);

// try {
//     car?.company?.prices?.forEach(element => {
//         console.log("element",element);
//     });
// } catch (error) {
//     console.log("error",error);
// }

// spread operator

const obj1 = {
    name: 'naveed',
    company: 'techloset solutions'
}

const obj2 = {
    country: 'pakistan',
    dist: 'gujranwala'
}


const finalObject = {
    ...obj1,
    ...obj2
}

var arr1 = [1,2,3,4,5]
var arr2 = [6,7,8,9,10]
var finalArr = [...arr1, ...arr2]
console.log("finalObject",finalArr);



// set time out  SetTimeOut & SetInterval

console.log("log 1");
function callback() {
console.log("log 2");
}
// setTimeout(callback, 3000);
console.log("log 3");


// setInterval(callback, 1000)


// Rest Syntax

function sum(...arg) {
    console.log("arg", arg);
}

sum(1,3,5, 10,11, 12,14)


// Async Await

 function wait() {
    setTimeout(() => {
        return "return by wait method"
    }, 3000);
}

async function showResult() {
    var result =await wait();
    console.log("result", result);
}
showResult()




var numbers = [1,2,3,4,5,15,21,1, "naveed"]

var isExist = numbers.includes("lo")
console.log("isExist",isExist);

var newNumbers = numbers.sort((a,b)=>a-b)
console.log("newNumbers", newNumbers);


// Math Methods
var random = Math.random()
Math.max(...numbers)
console.log("random",random);
Math.round(234.6323)
Math.ceil(23.33)
Math.floor(23.834)





