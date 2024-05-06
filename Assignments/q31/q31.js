// Checking Usernames: Ensure uniqueness in usernames.
var current_users = ["user1", "admin", "user3", "user4", "user5"];
var new_users = ["user1", "user6", "user7", "amdin", "user9"];
new_users.forEach(function (new_users) {
    if (current_users.some(function (currentusers) { return currentusers.toLowerCase() === new_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter a new message"));
    }
    else {
        console.log("".concat(new_users, " is available"));
    }
});
