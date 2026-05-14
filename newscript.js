// Create multiplication table using loop
// Create:
// Input field
// Button
// Check if entered number is even or odd


// let toprow = [1,2,3,4,5,6,7,8,9];
// let siderow = [1,2,3,4,5,6,7,8,9];

// for(i=0; i<toprow.length; i++) {


// }






// create a loop to print prime numbers


console.log('List of Prime numbers from 1 - 100')


prime = true;

for (z=2; z<=100; z++){
    for (a=2; a<10; a++) {
        if (z === a)
            break;
        
        else if(z % a == 0 ){
            prime = false;
            break;
        }
        else prime = true;
         
        }
    if (prime == true){
        console.log(z);
    }
    }
