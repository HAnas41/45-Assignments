// Stages of Life: Determine a person’s life stage with an if-else chain.

let age: number = 25;
if(age < 2) {
    console.log("the person is a baby");
}
else if(age < 4) {
    console.log("the person is todler");
}
else if(age < 13 ) {
    console.log("the person is a kid");
}
else if(age < 20 ) {
    console.log("the person is a teenger");
}
else if(age < 65) {
    console.log("the person is an adult");
}
else {
    console.log("the person is an elder");
}