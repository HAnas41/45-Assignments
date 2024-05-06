// More Guests: You've found a bigger dinner table, so there's room for more guests.

// Original guest list
let visitors: string[] = ["Anas", "Humna", "Abdullah Zahid"];
console.log("Great news! I found a bigger dinner table!");

// Adding more guests
visitors.unshift("Kinza");                             // adding Kinza to the beginning of the list
visitors.splice(visitors.length / 2, 0, "Rimsha");     // adding Rimsha to the middle of the list
visitors.push("Alishba");                              // adding Alishba to the end of the list

visitors.forEach(visitor => {
    console.log(`${visitor}, would you like to join me for dinner?`);
});




































