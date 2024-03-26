let current_users = ["user1", "admin", "user3", "user4", "user5"];
let new_users = ["user1", "user6", "user7", "amdin", "user9"];
new_users.forEach(new_users => {
    if (current_users.some(currentusers => currentusers.toLowerCase() === new_users.toLowerCase())) {
        console.log(`${new_users} will need to enter a new message`);
    }
    else {
        console.log(`${new_users} is available`);
    }
});
export {};
