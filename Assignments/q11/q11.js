//Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, 
//print a message to them. The message should be the same for each person,
//but personalized with their name.
var nicknames = ["Anas", "Hamza", "Abdullah"];
for (var _i = 0, nicknames_1 = nicknames; _i < nicknames_1.length; _i++) {
    var i = nicknames_1[_i];
    console.log("Hello ".concat(i, ", would you like to learn some typescript today?"));
}
