let visitors = ["Anas", "Humna", "Abdullah Zahid"];
console.log("Great news! I found a bigger dinner table!");
visitors.unshift("Kinza");
visitors.splice(visitors.length / 2, 0, "Rimsha");
visitors.push("Alishba");
visitors.forEach(vsistor => {
    console.log(`${visitors}, would you like to  join me for dinner? `);
});
export {};
