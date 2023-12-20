const a = [13, 3, 22, 32, 12, 78];

// const b = a.map((value, index, array)=>{
//     return value**2
// })

const squareArray = a.map((value) => value ** 2);
// console.log(squareArray);

const filterArray = a.filter((e) => {
  return e > 10;
});
// console.log(filterArray);

// Reduce : Reduce an array to single value


const arr2 = [5, 10, 2, 3, 8]
const sum = ((a,b)=>{
    return a+b
})


console.log(arr2.reduce(sum))

// Array.from : used to create an array from any other objects
const value = "Hello!"
console.log(Array.from(value))      // [ 'H', 'e', 'l', 'l', 'o', '!' ]
