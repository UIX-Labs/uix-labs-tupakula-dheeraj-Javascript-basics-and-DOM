// Print hello World
// Write your code here
console.log("Hello World");

// Write your code above

//Declare a variable i and set its value to 5
// Write your code here
for(let i = 0; i > 5 ; i++) {
    console.log(i)
}
// Write your code above

//Write the if else statement to console "Number is odd" if the value of i is odd and "Number is even" if the value of i is even.
// Write your code here
for(let i = 0; i < 5 ; i++) {
    if(i % 2 == 0) {
        console.log(i +" is even number.")
    }
    else {
        console.log(i+" is odd number.")
    }
}

// Write your code above

//Declare a string variable which is always constant and set is value to 'triangle'.
// Write your code here
const shape = 'Triangle';

function findSide(type) {
    switch (type) {
        case 'Triangle':
            return 3;
        case 'Square':
            return 4;
        case 'Circle':
            return Infinity;
        default:
            return "Unknown shape";
    }
}

console.log("Number of sides in a " + shape + ":", findSide(shape));
// Write your code above

//Write a function 'findSide' which takes an argument 'type' and return the number of sides in that shape
// Write your code here

// Write your code above
const side = findSide('Circle');
console.log('Side', side);