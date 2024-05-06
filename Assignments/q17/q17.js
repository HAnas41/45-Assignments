//Seeing the World: Think of at least five places you’d like to visit.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ["Pakistan", "Australia", "Japan", "Austria", "Itlay"];
console.log("original order:", places); //show original order
console.log("Alphabetical order:", __spreadArray([], places, true).sort()); // show alphabetical order
console.log("original order:", places); //original order
console.log("Reverse Alphabetical order:", __spreadArray([], places, true).sort()); //reverse order
console.log("original order:", places); //original order
places.reverse();
console.log("Reversed order:", places); //reversed order
places.reverse();
console.log("original order:", places); // original order                     
places.reverse();
console.log("Alphabetical order:", places); // alphabetical order
