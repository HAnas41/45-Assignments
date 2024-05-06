// Hello Admin: Greet users differently, especially 'admin'.
var username = ["admin", "user1", "user2", "user3", "user4"];
username.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see astatus report");
    }
    else {
        console.log("hello ".concat(username, ", thank you for logging in again"));
    }
});
