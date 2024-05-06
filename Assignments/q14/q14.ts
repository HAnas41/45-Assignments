        // Changing Guest List: One of your guests can't make it to the dinner, 
        // so you need to send out a new set of invitations with a replacement guest.

// Original guest list
let guests: string[] = ["Anas",  "Humna", "Hamza"];

// Guest who can't attend
let unableToAttend: string = "Hamza";
console.log(`${unableToAttend} can't make it to dinner.`);

// Replace the guest
let newGuest: string = "Abdullah Zahid";
guests[guests.indexOf(unableToAttend)] = newGuest;

// New invitations
guests.forEach(guests => {
    console.log(`Dear ${guests}, would you like to join me for dinner?`);
});
























































