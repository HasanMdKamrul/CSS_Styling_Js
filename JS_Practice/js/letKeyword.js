// ** Let can'nt be redeclared
// ? Let is a block scope element except function declarations
// * Hoisting is happend in both let and var but var can assign memory location undefied where let got a temporary dead zone.


// ** Let can'nt be redeclared

/*let firstName = 'Kamrul';
let firstName = 'Hasan';


console.log(firstName);*/


// ? Let is a block scope element except function declarations

if(true){
    let firstName = 'Kamrul';
    console.log(firstName);
}

// * Hoisting is happend in both let and var but var can assign memory location undefied where let got a temporary dead zone.

// *hoisting possible in var and let both but var can assign value in the variable which let consider as a temporary dead zone

carName = "Volvo";

var carName;        

console.log(carName);

/*
carName = 'Volvo';
let carName;

console.log(carName);*/