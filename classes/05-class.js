// functions and events
// A JavaScript function is a block of code designed to perform a particular task.
// A JavaScript function is executed when "something" invokes it (calls it).

// syntax:
// function name(params) 
// {
// // function body   
// }

// 1.Take something, returns nothing
let val = 1000;
printing(val);
printing(123);
printing(456);
printing("Umer is here");


function printing(value) {
    console.log("value is ", value);
}


// 2.takes nothing, returns something
function sumOfFirst100NaturalNumbers() { // 1 - 100 sum
    // let sum = (100 * (100 + 1)) / 2;
    // return sum;
    return (100 * (100 + 1)) / 2;
}

console.log(sumOfFirst100NaturalNumbers());


// 3. takes nothing, returns nothing;
function pakistan() {
    console.log("Pakistan world cup jeete ga");
}

pakistan(); //calling function

// 2.takes something, returns something;
// two number, returns sum
function sum(a,b)
{
    return a+b;
}


console.log("result = ",sum(10, 20));

// console.log(name);
// var name = "ahmad";



// strings and its methods
// JavaScript strings are for storing and manipulating text.

let str= "hello, world";
console.log(typeof str);

let str2 = '"Pakistan"';
console.log(str2);
let str3 = "'Pakistan'";
console.log(str3);

let str4 = 'Pakistan\'s';
console.log(str4);
let str5 = "\"Pakistan\"";
console.log(str5);


// we use string templates
let var1 = 1230;
console.log("Value" + var1 + " is correct");

console.log(`value of variable is ${var1} is correct`);
console.log(`expression can also be used in ${100 - 2 + 23 /34}`);

// string methods

// String length
// String slice()
// String substring()
// String substr()
// String replace()
// String replaceAll()
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String charAt()
// String charCodeAt()
// String split()