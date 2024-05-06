// Large Shirts: Default values in make_shirt().

function make_shirts(size: string= "large", message: string = "I love typescript") {
    console.log(`Making a ${size} shirt with message ${message} on it.`);
}
make_shirts(); // show default message and size
make_shirts("medium"); // show default message and medium size
make_shirts("small", "Iam coming") // show small size and message