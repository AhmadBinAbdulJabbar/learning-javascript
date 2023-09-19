// variables 
// let , var, const
// javascript (dynamic type define)

let name = "ahmad"; // string
let age = 22; // number

// variable type is define in runtime
console.log(name);
console.log(typeof name);

name = 123;
console.log(name);
console.log(typeof name);

// string number, null, undefine, symbol, boolean, bigInt, object

let address= "pakistan";
let mobile = 12345689;
let undefinedType = undefined; 
let nullType = null;
let isTrue = true; //boolean

let bigNumber = BigInt("12345607654"); 
console.log(bigNumber);

let num = 123;
num = 12345456;

var myName= "umer";

{
    let blockScope = 123;
    console.log(blockScope);
}
// console.log(blockScope); error

var myName = "ahmad";

const valueCannotBeChanged = 123;
// valueCannotBeChanged = 12000;

console.log(valueCannotBeChanged);

// Object non-primitive 

let student = {
//  key:"value",
    name:"ahmad",
    class:"BSCS-1M",
    age:"23"
};

ahmad = "student";

console.log(student.name);
console.log(student["class"]);

student.name = "umer";
console.log(student.name);

student.rollNo = "11223";
console.log(student);

student = 123;
console.log(student);

