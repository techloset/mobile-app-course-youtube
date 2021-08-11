// score < 50 => fail
// score > 50 , score < 60 , grade c
// score > 60, < 70, B
// score > 70, < 80, A
// score > 80, < 100, A+
var score = 30;
// all condition will be run and check if score is valid or not
// if (score < 50) {
//     console.log("Fail");
// }

// if (score >= 50 && score < 60) {
//     console.log("Student Grade is C");
// }

// if (score >= 60 && score < 70) {
//     console.log("Student Grade is B");
// }

// if (score >= 70 && score < 80) {
//     console.log("Student Grade is A");
// }

// if (score >= 80 && score < 100) {
//     console.log("Student Grade is A+");
// }

// if else if

// once condition will be true rest of condition will not check further more
if (score < 50) {
  console.log("Fail");
} else if (score >= 50 && score < 60) {
  console.log("Student Grade is C");
} else if (score >= 60 && score < 70) {
  console.log("Student Grade is B");
} else if (score >= 70 && score < 80) {
  console.log("Student Grade is A");
} else {
  console.log("Student Grade is A+");
}

// switch statement
// write a js program to check to show day with welcome message
var day = "Mon";
// if (day === "Mon") {
//     console.log("Hello, Today is Monday");
// }
// if (day === "Tus") {
//     console.log("Hello, Today is Tus");
// }
// if (day === "Wed") {
//     console.log("Hello, Today is Wd");
// }
// if (day === "Thu") {
//     console.log("Hello, Today is Thu");
// }

// if (day === "Fri") {
//     console.log("Hello, Today is Fri");
// }

// if (day === "Sat") {
//     console.log("Hello, Today is Sat");
// }
// if (day === "Sun") {
//     console.log("Hello, Today is Sun");
// }
// if else if
if (day === "Mon") {
  console.log("Hello, Today is Monday");
} else if (day === "Tus") {
  console.log("Hello, Today is Tus");
} else if (day === "Wed") {
  console.log("Hello, Today is Wd");
} else if (day === "Thu") {
  console.log("Hello, Today is Thu");
} else if (day === "Fri") {
  console.log("Hello, Today is Fri");
} else if (day === "Sat") {
  console.log("Hello, Today is Sat");
} else {
  console.log("Hello, Today is Sun");
}
// switch statement
switch (day) {
  case "Mon":
    console.log("Today is Monday");
    break;
  case "Tus":
    console.log("Today is Tus");
    break;
  case "Wed":
    console.log("Today is Wed");
    break;
  case "Thu":
    console.log("Today is Thu");
    break;
  case "Fri":
    console.log("Today is Fri");
    break;
  case "Sat":
    console.log("Today is Sat");
    break;
  case "Sun":
    console.log("Today is Sun");
    break;

  default:
    break;
}
