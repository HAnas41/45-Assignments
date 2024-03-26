let guests = ["Anas", "Humna", "Hamza"];
let unableToAttend = "Hamza";
console.log(`${unableToAttend} can't make it to dinner.`);
let newGuest = "Abdullah Zahid";
guests[guests.indexOf(unableToAttend)] = newGuest;
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
export {};
