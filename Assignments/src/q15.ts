// More Guests: You've found a bigger dinner table, so there's room for more guests.

// Original guest list
let visitors: string[] = ["Anas", "Humna", "Abdullah Zahid"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
visitors.unshift("Kinza");                             // adding kinza beginning of the list
visitors.splice(visitors.length / 2, 0, "Rimsha");     // adding rimsha middle of the list
visitors.push("Alishba");                              // adding alishba end of the list

visitors.forEach(vsistor => {
    console.log(`${visitors}, would you like to  join me for dinner? `);
});



































