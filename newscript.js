// Create multiplication table using loop
// Create:
// Input field
// Button
// Check if entered number is even or odd


let toprow = [1,2,3,4,5,6,7,8,9];
let siderow = [1,2,3,4,5,6,7,8,9];
let ones =[];
let twos = [];
let threes = [];
let fours = [];
let fives = [];
let sixes = [];
let sevens = [];
let eights = [];
let nines = [];

let primes = [];


function timesTable(){

for(i=0; i<9; i++) {
    for (j=0; j<siderow.length; j++) {
      
        switch (i) {

            case 0:
                ones.push(toprow[i] * siderow[j]);
            break;

            case 1:
                twos.push(toprow[i] * siderow[j]);
            break;

            case 2:
                threes.push(toprow[i] * siderow[j]);
            break;

            case 3:
                fours.push(toprow[i] * siderow[j]);
            break;

            case 4:
                fives.push(toprow[i] * siderow[j]);
            break;

            case 5:
                sixes.push(toprow[i] * siderow[j]);
            break;

            case 6:
                sevens.push(toprow[i] * siderow[j]);
            break;

            case 7:
                eights.push(toprow[i] * siderow[j]);
            break;

            case 8:
                nines.push(toprow[i] * siderow[j]);
            break;

      
        }
    }
}


table = [ones, twos, threes, fours, fives, sixes, sevens, eights, nines];

console.log(table);
}



// create a loop to print prime numbers

function findPrimes() {

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
       primes.push(z);       
        
    }
    
    }
    console.log(primes);
}