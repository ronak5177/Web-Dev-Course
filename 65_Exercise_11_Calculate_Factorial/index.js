// Write a program to calculate factorial of number using reduce and using for loops

// !6 = 6 * 5 * 4 * 3 * 2 * 1

const factorialCalculator = (num)=>{
    let fact = 1
    for (let i = 1; i <= num; i++) {
        fact *= i        
    }
    return fact
}

const factorialUsingReduce = (num)=>{
    let nums=[];
    for (let i = 1; i <= num; i++) {
        nums.push(i);
    }
    const data = nums.reduce((a,b)=> a*b)
    return data
}
console.log(factorialCalculator(5))
console.log(factorialUsingReduce(5))