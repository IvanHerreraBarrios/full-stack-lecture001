let a;
let b;

a = 10;
b = 15;

let c = a > b;
console.log('a > b', c);

//---------------------------

let x, y, z;

x = prompt("Enter the value of x");
y = prompt("Enter the value of y");
z = prompt("Enter the value of z");

if (x > y) {
    console.log("X is greater");
} else {
    if (y > x) {
        console.log("y is greater");
    } else {
        console.log("They are equals");
    }
}

let todayIsTuesday = true;
let weStartTheCourse = false;

let and_ = todayIsTuesday && weStartTheCourse;
console.log("and", and_);
let or_ = todayIsTuesday && weStartTheCourse;
console.log("or", or_);
let todayIsNotTuesday = !todayIsTuesday;
console.log("todayIsNotTuesday", todayIsNotTuesday);
let weDontStartTheCourse = !weStartTheCourse;
console.log("weDontStartTheCourse", weDontStartTheCourse);