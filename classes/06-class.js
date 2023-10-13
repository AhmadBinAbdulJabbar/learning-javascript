// string methods/properties

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

let str = "This is a string";
console.log(str);

// str[3] = 'j'; 
// console.log(str);

// str = "ahmad";
// console.log(str);

console.log(str.length);

console.log(str.slice(5,7));
console.log(str.slice(-6));

console.log(str.substring(0,4));

console.log(str.substr(5,2));


let aNewString = "       new string          ";
console.log(aNewString);
console.log(aNewString.trim());
console.log(aNewString.trimStart());
console.log(aNewString.trimEnd());


let replaceStr = str.replace("string", "computer");
console.log(str);
console.log(replaceStr);

let strNew = "please visit Microsoft and Microsoft!";
let strReplace = strNew.replaceAll("Microsoft", "Google")
console.log(strNew);
console.log(strReplace);

let upperStr = strNew.toUpperCase();
console.log(strNew);
console.log(upperStr);

let lowerStr = strNew.toLowerCase();
console.log(lowerStr);

let strConcat = strNew.concat(replaceStr ,upperStr,lowerStr);
console.log(strConcat);

let str1 = "string";
let strPad = str1.padStart(3,0);
console.log(strPad);

console.log(str1.charAt(3));
console.log(str1.charCodeAt(3));
console.log(strNew.indexOf("Microsoft"));
console.log(strNew.lastIndexOf("Microsoft"));

let newStr2 = "please , ali, umer, ahmad";
console.log(newStr2.split(","));