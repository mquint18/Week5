console.log("Week 4 Javascript");
/*
let age = 34;

if( age >= 18) {
    console.log("Congrats. You are old enough");
}
else {
    console.log("Sorry, try again later");
}


let password = "12345";

if(password == "12345") {
    alert("Congratulations. You have passed the test");
    console.log('successful attempt');
}
else {
    alert("Incorrect password")
    console.log("failed attempt.");
}
    */


function checkage() {
    let age = document.getElementById("age").value;

    if(age >= 18) {
        alert("you are old enough");
    }
    else{
        alert("You are NOT old enough");
    }
}

function checkDate() {
    let date = document.getElementById("date").value;

    if (date > 0 && date <= 30)  {
        alert("This is a valid date. You may continue")
    }
    else {
        alert("This is not a valid date. Try again.")
    }
}
/*
let marks = 80;
if(marks >= 90) {
    console.log("A");
}

else if(marks >=80) {
    console.log("B");
}
else if(marks >=70) {
    console.log("C");
}
else {
    console.log('F')
}
*/
// loops

console.log("Hello 1 time");


for(let i  = 1; i <= 16; i++) {
    console.log("Hello " + i);
}

for(let j=100; j > 0; j--) {
    console.log("Goodbye " + j);
}

for(let k=100; k>=0; k--){
    if(k >= 90){
        console.log("It's hot!");
    }
    else if(k >= 75){
        console.log("It's warm");
    }
    else if (k>=50){
        console.log("It's cool");
    }
    else if(k>= 32){
        console.log("It's cold")
    }
    else {
        console.log("It's freezing!")
    }

}