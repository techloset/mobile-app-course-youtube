// car
var car = ['color', 'price', 1212, 'red', 'model',2015, 'engineNo',23]

var carObj = {
    color : 'red',
    price : 3242,
    model : 2015, 
    engineNumber : 234
}

var fan = {
    color:'w',
    company: 'afs', 
    price: 322
}

car[0] = 2342
fan.color = 'blue'

console.log("fan", fan);
console.log("fan", fan.price);

console.log("car array", car[0]);

// object keys

var fanKeys = Object.keys(fan)

var fanValues = Object.values(fan)

console.log("fanKeys", fanKeys);
console.log("fanValues", fanValues);


var cars = [{
    color : 'red',
    price : 32142,
    model : 2015, 
    engineNumber : 234
},
{
    color : 'black',
    price : 32412,
    model : 2015, 
    engineNumber : 234
},
{
    color : 'white',
    price : 232,
    model : 2015, 
    engineNumber : 234
},
{
    color : 'gray',
    price : 2332,
    model : 2015, 
    engineNumber : 234
}]

// array of objects