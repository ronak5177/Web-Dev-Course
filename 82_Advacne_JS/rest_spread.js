// Hoisting --> JavaScript Hoisting refers to the process whereby the interpreter appears to move the declaration of functions, variables, classes, or imports to the top of their scope, prior to execution of the code


// console.log(host); // gives undefined but doesn't throw any error when declared with var

// Rest
// let [x, y, z, ...rest] = [1, 5, 8, 11, 4, 7, 34, 71]
// console.log(x, y, z, rest)


// Rest in object
// let obj = { a: 1, b: 2, c: 4, d: 56, e: 6, f: 7 };

// if I want only a c d and not others 
// let {a, _,  c, ...others} = obj
// console.log(a, _, c, others)

// Rest in array
// let arr = [3, 5, 8, 10, 15, 23, 72]
// let [a, b, c, ...xyz] = arr
// let [a, , b, ...xyz] = arr


function sum(n1, n2, n3){
    return n1+n2+n3
}

// Spread Operator
let arr2 = [5, 6, 7]
// console.log(sum(...arr2))
// console.log(sum(arr2[0], arr2[1], arr2[2]))


// Quick quiz
// const a1 = "the"
// const b2 = "no"
// const c1 = {a1, b2} 
// console.log(c1)  


// Example of hoisting
var host = 1 

hello("Ronak") // this will works

function hello(name){
    console.log(`Hello ${name}`)
}