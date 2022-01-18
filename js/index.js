// This is MTM1526 - A01 Printing Output 
// Written by Saya(Masayo) Williams
// January 18, 2022

// ****** TASK 1 ******

// alert( "description of alerted_value: " + alerted_value );
let a = 3;
let b = 5;
let c;

let output = ""; // define output with an empty value
// add each value below to 'output'
output += 'let a = 3;\n';
output += 'let b = 5;\n';
output += 'let c;\n';
output += '-----------------\n';
output += 'a + b = ' + (a + b) + '\n';
output += 'a - b = ' + (a - b) + '\n';
output += 'a * b = ' + (a * b) + '\n';
output += 'a / b = ' + (a / b) + '\n';
output += 'a % b = ' + (a % b) + '\n';
output += '(a += b): ' + (a += b) + '\n';
output += '(a -= b): ' + (a -= b) + '\n';
output += '(a *= b): ' + (a *= b) + '\n';
output += '(a /= b): ' + (a /= b) + '\n';
output += '(a %= b): ' + (a %= b) + '\n';
output += '(a == b): ' + (a == b) + '\n';
output += '(a != b): ' + (a != b) + '\n';
output += '(a > b): ' + (a > b) + '\n';
output += '(a < b): ' + (a < b) + '\n';
output += '(!a && !c): ' + (!a && !c) + '\n';
output += '(!a || !c): ' + (!a || !c) + '\n';

alert(output); // alert with values of 'output'

// ****** TASK 2 ******

// define variables and values to below
let first_name = "Saya";
let last_name = "Williams";
let email = "will1051@algonquinlive.com";

// assign new value to 'output'
output = `My name is ${first_name} ${last_name}.\n  
You can contact me at ${email}.`;

alert(output); // alert with new values of 'output'
