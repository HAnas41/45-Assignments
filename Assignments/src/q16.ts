// Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
// and you can only invite two guests.

let visitorss: string[] = ["anas", "humna", "hamza", "abdullah", "kinza", "rimsha", "alishba"];

console.log("Unfortunately, I can only invite two people for dinner.");

while (visitorss.length > 2) {
    let removedvisitorss = visitorss.pop();
    console.log(`Sorry, ${removedvisitorss}, I can't invite you to dinner.`);
}

visitorss.forEach(visitors => {
    console.log(`Dear ${visitors}, you're still invited to dinner.`);
});

visitorss.splice(0, visitorss.length);
console.log(visitorss); // Shows an empty list
