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

//console.log("Hello 1 time");

/*

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
*/

/*
let total = 0;

for (let a = 1; a<= 5; a++) {
    total  +=a;
    console.log('total is '+ total);
}

let b = 1;
let c = 10;

while(b <= 8) {
    console.log(b);
    b++;
}

while(c>=1){
    console.log(c);
    c--;
}
*/

// print odd and even numbers
/*
for (let z=1; z<=20; z++) {
    if (z % 2 == 0) {
        console.log(z + ' is an EVEN mumber');
    }
    else {
        console.log(z + " is an ODD number");
    }
}
*/

/*
let marks = [36, 23, 47, 90];

for (let e = 0; e <marks.length; e++) {
    console.log("The value of marks at index " + e + " is " + marks[e])

    if (marks[e] >= 50) {
        console.log("Pass");
    }
    else {
        console.log('Fail');
    }
}

let numList = [-2, -5, 0, 34, 18, 89, -21];

    for (let g=0; g<numList.length; g++){
        if (numList[g] < 0) {
            console.log(numList[g] + " is a Negative Number");
        }
        else if(numList[g] > 0) {
            console.log(numList[g] + " is a Positive number");
        }
        else {
            console.log(numList[g] + " is neither positive or negative");
        }
    }
        */

 
