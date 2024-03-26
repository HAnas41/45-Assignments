//  Ordinal Numbers: Display numbers with their ordinal suffixes.

let numbers: number[] = [1,2,3,4,5,6,7,8,9];
numbers.forEach(numbers => {
    let suffixes = "th";
    if(numbers === 1) {
        suffixes = "st";
    } 
    else if(numbers ===2) {
        suffixes = "nd";
    }
    else if(numbers === 3){
        suffixes = "rd";
    }
    console.log(`${numbers} ${suffixes}`);
    
});