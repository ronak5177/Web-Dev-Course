// The Sum Selector:
//    You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation.

let numbers = [6, 2, 5, 1, 10, -3, 2, 14]

let flag = true
let i=0
let sum=0
while(flag){
    if (numbers[i]<0){
        flag = false
        break;
    }
    sum += numbers[i]
    i++;
}

console.log(sum)