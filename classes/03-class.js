
// For input from user prompt is used 
// let num = prompt("Enter a number?");
// console.log(num,typeof num);
// num = Number.parseInt(num);
// console.log(num,typeof num);

// // console.log("number you entered = ",num);

// // For output to user alert is used 
// alert("You entered " + num);


// conditional statements
// if, if else, if else if (if else ladder)
// switch

// let marks = prompt("Enter your marks");
// marks = Number.parseInt(marks);

// simple
// if (marks > 60) {
//     alert("You are pass");
// }

// // if else 
// if (marks >= 60) {
//     alert("You are pass");
// }
// else{
//     alert("You are fail");
// }

// if else if (if else ladder)
// if (marks >= 90) {
//     alert("grade : A+");
// }
// else if (marks >= 80) {
//     alert("grade : A");
// }
// else if(marks >= 70){
//     alert("grade : B");
// }
// else if (marks >= 60) {
//     alert("Grade : C");
// }
// else
// {
//     alert("Grade : D");
// }


// wrong conditions
// if (marks >= 60 && marks < 70) {
//     alert("grade : C");
// }
// else if (marks >= 70 && marks < 80) {
//     alert("grade : B");
// }
// else if(marks >= 80 && marks < 90){
//     alert("grade : A");
// }
// else if (marks >= 90) {
//     alert("Grade : A+");
// }
// else
// {
//     alert("Grade : D");
// }

// syntax
// switch (key)
// {
//     case value // key === value -> true
// }

// switch (marks) {

//     case 90: // marks = 91 == 90 true
//         console.log("Grade : A+");
//         break;

//     case 80:
//         console.log("Grade : A");
//         break;

//     case 70:
//         console.log("Grade : B");
//         break;

//     case 60:
//         console.log("Grade : C");
//         break;

//     default:
//         // console.log("Grade : D");
//         break;
// } 

let firstOperand = prompt("Enter first operand: ");
// firstOperand = Number.parseInt(firstOperand);


let operatorInput = prompt("Enter operator: ");

let secondOperand = prompt("Enter second operand: ");
// secondOperand = Number.parseInt(secondOperand);


switch (operatorInput) {
    case '+':
        alert("answer = " + (firstOperand+secondOperand));
        break;

    case '-':
        alert("answer = " + (firstOperand-secondOperand));
        break;

    case '*':
        alert("answer = " + (firstOperand*secondOperand));
        break;

    case '/':
        alert("answer = " + (firstOperand/secondOperand));
        break;

    default:
        alert("Enter operator +, -, *, / only.");
        break;
}


// basic loops


