// Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
// and you can only invite two guests.

var visitorss = ["anas", "humna", "hamza", "abdullah", "kinza", "rimsha", "alishba"];
console.log("Unfortunately, I can only invite two people for dinner.");

while (visitorss.length > 2) {
    var removedvisitors = visitorss.pop();
    console.log("Sorry, ".concat(removedvisitors, ", I can't invite you to dinner."));
}

visitorss.forEach(function (visitor) {
    console.log("Dear ".concat(visitor, ", you're still invited to dinner."));
});

visitorss.splice(0, visitorss.length);
console.log(visitorss); // Shows an empty list
