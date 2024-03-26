//  Sandwiches: Summarize sandwich orders with varying ingredients.

function make_sandwich(...items: string[]) {
console.log(`make sandwich with ${items.join(',')}.`);
}
make_sandwich("ham","cheese");
make_sandwich("cucumber", "lattuce", "tomato");
make_sandwich("avacado", "muturd", "mayo", "ketchup");
