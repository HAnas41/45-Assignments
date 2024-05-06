// Hello Admin: Greet users differently, especially 'admin'.

let username: string[] = ["admin", "user1", "user2", "user3", "user4"];
username.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see astatus report");
    } else {
        console.log(`hello ${username}, thank you for logging in again`);
    }
});





































