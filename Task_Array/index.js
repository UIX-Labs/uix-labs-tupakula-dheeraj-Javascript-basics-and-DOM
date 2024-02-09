let arr = [1, 3, 2, 5, 4];

// Filter the odd number using the filter function of the array and store it in filterArr declared below.


//Write your code below
let filterArr = arr.filter(num => num % 2 !== 0);
//Write your code above
console.log("Filtered Array:-", filterArr);

// Find the square of each number of the array using map fumction and store it in squaredArray variable declared below. Output should be [1,9,4,16]
let squaredArray =  arr.map(num => num * num);
//Write your code below

//Write your code above
console.log("Squared array", squaredArray);

//Remove the last element of the array arr using array functions.
//Write your code below
 arr.pop();
//Write your code above
console.log("last element removed", arr);

//Remove the first element of the array using array functions
//Write your code below
arr.shift();

//Write your code above
console.log("first element removed", arr);

//Add 6 to the end of array using array functions
//Write your code below
arr.push(6);
//Write your code above
console.log("last element added", arr);

//Add 7 to the start of the array using the array functions
//Write your code below
arr.unshift(7);
//Write your code above
console.log("first element added", arr);

//Use the slice function to give me the following output:-[3,2,5] and store it in slicedArray declared below.
let slicedArray;
//Write your code below
arr.slice(2,5)
//Write your code above
console.log("sliced array", arr);

//Use the splice function to remove the middle elements [3,2,5] from the array. So the array will be [6,7]
//Write your code below
arr.splice(1,6)
//Write your code above
console.log("After removing middle element using splice", arr);

//Use the splice function to add the middle elements 8,9 in the middle of the array. So the array will be [6,8,9,7]
//Write your code below
arr.splice(1, 0, 8, 9); // Insert at index 1
//Write your code above
console.log("After adding middle element using splice", arr);

//Use the find function to find the first odd number from the array [6,8,9,7] and store it in findNumber variable declared below
let findNumber;
//Write your code below
findNumber = arr.find(num => num % 2 !== 0);
//Write your code above
console.log("Using findNumber", findNumber);