// Function is called, the return value will end up in x
// let x = multiplicationOfTwo(5, 3);

// function multiplicationOfTwo(a, b) {
// Function returns the product of a and b
//   return a * b;
// }

// console.log(x)

function sum(a, b, c = 5) {
  return a + b + c;
}

console.log(sum(12, 20))
let result = sum(10, 20);
console.log(result);


// arrow function 
let average = (a, b, c)=>{
    return ((a+b+c)/3)
}

console.log(average(5, 20, 60))