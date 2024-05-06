// Great Magicians: Add "the Great" to magician names.

function make_great(Magicians: string[]) {
    Magicians.forEach((magician, index) => {
        Magicians[index] = magician + " the Great";
    });
}

function show_magicians(Magicians: string[]) {
    Magicians.forEach(magician => {
        console.log(magician);
    });
}

let Magicians: string[] = ["anas", "humna", "hamza"];

make_great(Magicians);
show_magicians(Magicians);
