// slice(start, end)
// substring(start, end)
// let newText = text.replace("Microsoft", "W3Schools");
// text1.toUpperCase(); 
// text1.concat(" ", text2);
// text.trim()  
// text.charAt(0)
// text.split(",")  
// indexOf

var helloPakistan = "I love, pakistan, Pakistan Zindabad"
var getStringLength = helloPakistan.length
console.log("getStringLength", getStringLength);

var subString = helloPakistan.slice(2, 6);
console.log("subString", subString);
// write a js program to get pakistan word from the string I love, pakistan, 
var subStringWord = helloPakistan.slice(8,16)
console.log("subStringWord", subStringWord);

// write a js program, to replace  pakistan to new Pakistan from the string  "I love, pakistan,
var replacedString = helloPakistan.replace("pakistan","Pakistan");
console.log("replacedString", replacedString);

// write a js program to convert all strings chart to upper case, 
var upperCaseString = helloPakistan.toLocaleUpperCase()
console.log("upperCaseString", upperCaseString);

// write a js program to convert all strings chart to lower case, 
var lowerCaseString = helloPakistan.toLocaleLowerCase()
console.log("lowerCaseString", lowerCaseString);

// write a js program check weather day is sun or not

var day = "Sunday"

if(day.toLowerCase() === 'sunday'){
console.log("today is sunday");
}
else {
    console.log("today is not sunday");
}

var string1 = "i love"
var string2 = "pakistan"
var mergedString = string1 + " " + string2
// var mergedString = string1.concat(string2)
console.log("mergedString", mergedString);

var userName = "naveedtrainer "
var trimString = userName.trim()
console.log("trimString", trimString);

var charAtString = userName.charAt(2)
console.log("charAtString", charAtString);

var indexOfString = userName.indexOf('v')
console.log("charAtString", indexOfString);


var someString = "i, love, pakistan"
console.log("split string", someString.split(','));

// write a js program to convert numbers "1,2,3,4,5,6,7,8,9,10" string into array of int numbers

var numberString = "1,2,3,4,5,6,7,8,9,10";
var numbersArray = numberString.split(',');
var numbers = []
for (let index = 0; index < numbersArray.length; index++) {
    const element = numbersArray[index];
    console.log("element", parseInt(element)) 
    numbers.push(parseInt(element))
}
console.log("numbersArray", numbers);








