// Cars: Create detailed car objects with flexible properties.

function make_car(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car: {
        manufacturer: string;
        model: string;
        [key: string]: any; // Index signature
    } = { manufacturer, model };

    options.forEach(([key, value]) => car[key] = value);
    return car;
}

console.log(make_car("Toyota", "Corolla", ["color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["color", "blue"], ["sunroof", true]));

