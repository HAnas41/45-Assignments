//  More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.

//equality with string

console.log("Testing equality with strings:");
console.log("apple" == "apple"); //true
console.log("apple" == "apple"); //false 

//using the lower case funstion
console.log("testing the lower case:");
console.log("apple".toLowerCase() == "Apple"); //true

// numerical test
console.log("numerical tests");
console.log(10>5); //true
console.log(2>1); //false

//testing using "and" and "or" operators
console.log("test with 'and' and 'or':");
console.log(true && false); //false
console.log(true || false); //true

// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(!fruits.includes("apple")); //true

// Test whether an item is not in a array
console.log("Is 'mango' in fruits?");
console.log(!fruits.includes("mango")); //true