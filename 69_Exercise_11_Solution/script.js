let a = 4

function factorial(number){
    if (number<=0){
        return 1
    }
    let arr = Array.from(Array(number+1).keys())
    let c = arr.slice(1,).reduce((a, b)=> a*b)
    return c
}


function factFor(number){
    if (number<=0){
        return 1
    }
    let fact = 1
    for (let i = 1; i <= number; i++) {
        fact *= i       
    }

    return fact
}

console.log(factorial(a))
console.log(factFor(a))