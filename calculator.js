"use strict"
const ps = require("prompt-sync")
 const prompt =ps()
 var firstNumber = prompt("Enter first number: ");
 var operator = prompt("Enter operator(+, -, /, *, **, sqrt): ");
 var secondNumber = prompt("Enter second Number: ");
let answer = " "
 if (operator == "+" ){
answer = Number(firstNumber) + Number(secondNumber);
console.log(`${firstNumber} ${operator} ${secondNumber} = ${answer}`)
 }
 else if( operator == "-"){
     answer = Number(firstNumber) - Number(secondNumber);
     console.log(`${firstNumber} ${operator} ${secondNumber} = ${answer}`)
 }else if (operator == "/"){
     answer = Number(firstNumber )/Number(secondNumber);
     console.log(`${firstNumber} ${operator} ${secondNumber} = ${answer}`)
 } else if (operator == "*"){
     answer = Number(firstNumber)*Number(secondNumber);
     console.log(`${firstNumber} ${operator} ${secondNumber} = ${answer}`)
 }else if (operator == "**"){
     answer = Number(firstNumber)**Number(secondNumber)
     console.log(`${firstNumber} ${operator} ${secondNumber} = ${answer}`)
 }else if (operator == "sqrt"){
     answer = Math.sqrt(Number(firstNumber))
     console.log(`Square root of ${firstNumber} is ${answer}`)
 }else{
     console.log("Wrong Input")
 }
