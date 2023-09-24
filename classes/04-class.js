// loops

// while, do-while
// for,  forin, forof, foreach

// while(condition)
// {
//     // block of code
// }

// let userMarks = prompt("Enter your marks: ");

// while ( userMarks < 0 || userMarks > 100) {
//     userMarks = prompt("Wrong input, Please enter again correct marks: ");
// }

// for loop is converted into while loop
// for (;userMarks < 0 || userMarks > 100;) {
//     userMarks = prompt("Wrong input, Please enter again correct marks: "); 
// }

// alert("your marks are " + userMarks);


// do-while loop execute at-least one or more time
let marks;

do {
    marks = prompt("Enter your marks: ");
    marks = Number(marks);
} while (marks < 0 || marks > 100);


// for : we use for loop where we know how many times the loop will execute (number of counter variable)
// for loop syntax
// for(initialization of a counter variable; condition ; increment / decrement of counter variable)
// {
//     // block of code
//     // body og loop
// }

// first 100 whole numbers printing
// for(let i = 0; i <= 100; i++)
// {
//     console.log(i);
// }

// while loop is converted into for loop
// let i = 0;
// while (i <= 100 ) { // true always if i++ is not done
//     console.log(i);
//     i++;
// }

// for(let index = 1; index <= 20000; index++)
// {
//     console.log(index);
// }


