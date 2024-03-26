function make_great(Magicians) {
    Magicians.forEach((magician, index) => {
        Magicians[index] = magician + " the Great";
    });
}
function show_magicians(Magicians) {
    Magicians.forEach(magician => {
        console.log(magician);
    });
}
let Magicians = ["anas", "humna", "hamza"];
make_great(Magicians);
show_magicians(Magicians);
export {};
