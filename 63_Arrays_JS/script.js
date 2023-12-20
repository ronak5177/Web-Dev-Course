arr = [1, 4, 5, 89, 12];
// ind 0, 1, 2, 3,  4

// console.log(arr.length)
// console.log(arr[0])
// console.log(arr.toString())   // returns 1,4,5,89,12

// console.log(arr.join(" -- "))

// remove last element
// console.log(arr.pop())
// console.log(arr)

// add at the end
// arr.push(100)
// console.log(arr)
// console.log(arr.push("Ronak"))  // return length of arr

// remove from beginning
// console.log(arr.shift())
// console.log(arr)

// add at beginning
// console.log(arr.unshift(23))
// console.log(arr)

delete arr[3];
// console.log(arr)
// console.log(arr.length)

// concatinate arrays

const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = [7, 8, 9];

// console.log(a1.concat(a2, a3)) // return new array, does not change existing array

// sort according to the first number

let x = [78, 23, 89, 12, 45, 6];

// result would be : 12, 23, 45, 6, 78, 89
// console.log(x)

// if need to perform arithmatic sort use this
// x.sort((a, b) => a - b)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.splice(3, 4, 444, 666)); // removes 4 nums from the origional numbers and add 444, 666
console.log(numbers);

const num = [1, 2, 3, 4, 5, 6];

console.log(num.slice(3)); // [4, 5, 6]
console.log(num.slice(1, 5)); // [2, 3, 4, 5]

