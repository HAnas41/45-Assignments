// Changing Guest List: One of your guests can't make it to the dinner, 
// so you need to send out a new set of invitations with a replacement guest.
// Original guest list
var guests = ["Anas", "Humna", "Hamza"];
// Guest who can't attend
var unableToAttend = "Hamza";
console.log("".concat(unableToAttend, " can't make it to dinner."));
// Replace the guest
var newGuest = "Abdullah Zahid";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", would you like to join me for dinner?"));
});
