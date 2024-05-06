// Large Shirts: Default values in make_shirt().
function make_shirts(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love typescript"; }
    console.log("Making a ".concat(size, " shirt with message ").concat(message, " on it."));
}
make_shirts(); // show default message and size
make_shirts("medium"); // show default message and medium size
make_shirts("small", "Iam coming"); // show small size and message
