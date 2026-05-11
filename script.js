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