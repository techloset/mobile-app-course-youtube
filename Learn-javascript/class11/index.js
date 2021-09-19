var myFutureDate = "2025-08-15T15:22:09.222Z"
var lastDate = "2016-08-15T15:22:09.222Z"
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
var getHours = currentDate.getHours();
var getDate = currentDate.getDate();
var getMins = currentDate.getMinutes();
var getTime = currentDate.getTime();
var getMonth = currentDate.getMonth();
var getDay = currentDate.getDay(); 
// 0 - 7
// 0 - 30
console.log("current date", currentDate);
console.log("current date - yearn", currentYear);
console.log("current date - get hours", getHours);
console.log("current getDate", getDate);
console.log("current getMins", getMins);
console.log("current getTime", getTime);
console.log("current getMonth", getMonth);
console.log("current getDay", getDay);

// write a js program to get current day of the week?
var days = ['sun', 'mon', 'tue', 'wed', 'thur', 'fri', 'sat']
console.log("current day of week is ==>" ,days[getDay]);


// write a js program to get current month of the year?
var months = ['jan', 'feb','..']
console.log("current day of week is ==>" ,months[getMonth]);


// slice(start, end)
// substring(start, end)
// let newText = text.replace("Microsoft", "W3Schools");
// let text2 = text1.toUpperCase(); 
// let text3 = text1.concat(" ", text2);
// text.trim()  
// text.charAt(0)
// text.split(",")  
// indexOf