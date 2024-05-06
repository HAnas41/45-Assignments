// Great Magicians: Add "the Great" to magician names.
function make_great(Magicians) {
    Magicians.forEach(function (magician, index) {
        Magicians[index] = magician + " the Great";
    });
}
function show_magicians(Magicians) {
    Magicians.forEach(function (magician) {
        console.log(magician);
    });
}
var Magicians = ["anas", "humna", "hamza"];
make_great(Magicians);
show_magicians(Magicians);
