// operators in javascript

// Arithmetic Operators
// +, -, *, /, %, **, ++, --
let a = 11;
let b = 2;
console.log("a = ",a);
console.log("b = ",b);
console.log("a + b = ", a+b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);
console.log("a % b = ", a % b);
console.log("a ^ b = ", a ** b);
// post 
console.log(a);
console.log("a++ = ", a++); // 12 -> 11
console.log(a);
console.log("a-- = ", a--); // 11 -> 12
console.log(a);
// pre
a = 11;
console.log("++a = ", ++a); // 12
console.log(a);
console.log("--a = ", --a); // 11
console.log(a);


let c = a++; //c =  11 , a = 12 
console.log("c = ",c," a = ",a); 
a = 11;
 c = ++a; //  a = 12 , c = 12 
console.log("c = ",c," a = ",a); 

// Assignment Operators
// =, += , -=, *=, /=, %=, **=

let x = 12;
// 12 = x; // error
console.log("x = ",x);
console.log("x += 7 is ",x += 7); // x = x + 7; // x = 12 + 7 // assignment increment operator
console.log("x -= 6 is ",x -= 6); // x = x - 6;
console.log("x *= 5 is ",x *= 5); // x = x * 5;
console.log("x /= 4 is ",x /= 4); // x = x / 4;
console.log("x %= 3 is ",x %= 3); // x = x % 3;
console.log("x **= 2 is ",x **= 2); // x = x ** 2;

x = 10;
let y = 3;
console.log("x += y is ", x += y); // x = x + y; // 10+3 = 13


// Comparison Operators
// ==, !=, ===, !===, <, >, <=, >=, ?

let var1 = 23;
let var2 = 20;
console.log("var1 == var2 is ", var1 == var2);      // 23 == 20 is false
console.log("var1 != var2 is ", var1 != var2);      // 23 != 20 is true
console.log("var1 === var2 is ", var1 === var2);    // 23 === 20 is false (value + data type is compared)
console.log("var1 !== var2 is ", var1 !== var2);    // 23 !== 20 is true (value + data type is compared)

var2 = "23";
console.log("var1 === var2 is ", var1 === var2);    // 23 === 23 is false (value + data type is compared)
console.log("var1 !== var2 is ", var1 !== var2);    // number (23) !== string (20) is true (value + data type is compared)

let e = 12;
let f = 13;

console.log("e > f is ", e > f);
console.log("e < f is ", e < f);
console.log("e >= f is ", e >= f);
console.log("e <= f is ", e <= f);

