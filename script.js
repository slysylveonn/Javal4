
let greet = (name = 'Sophie') => {
        greet = `Hello ${name}!`;
        return greet;
   
}

console.log(greet());

let addNumbers = (num1 = 5, num2 = 6) => {
    return (num1 + num2);
}

console.log(addNumbers());

let dog = 'jindo';
function changeValue() {
    dog = 'malamute';
    return `${dog}`;
}

console.log(dog);
console.log(changeValue());


function outerFunction() {
    let count = 0;
    return function() {
        
        count++;
        return count;
    }
}
let counter = outerFunction();
console.log(counter());


function Outer() {
    let mult = 3;
    return function() {
        
        mult= mult*2;
        return mult;
    }
}
let multiplier = Outer();
console.log(multiplier());

