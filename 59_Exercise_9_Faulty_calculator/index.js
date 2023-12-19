const sum = (a, b)=>{
    // perform a+b 10% of the time
    // + ====> -
    const accuracy = Math.random()*100
    
    if (accuracy <= 10){
        return a+b
    }
    return a-b
    
}
const multiplication = (a, b)=>{
    // perform a*b 10% of the time
    // * ====> +
    const accuracy = Math.random()*100
    if (accuracy <= 10){
        return a+b          
    }
    return a*b
    
}
const substraction = (a, b)=>{
    // perform a-b 10% of the time
    // - ====> /
    const accuracy = Math.random()*100
    if (accuracy <= 10){        
        return a/b
    }
    return a-b
    
}
const division = (a, b)=>{
    // perform a/b 10% of the time
    // / ====> **
    const accuracy = Math.random()*100
    if (accuracy <= 10){
        return a**b 
    }
    return a/b
}


console.log(sum(10, 20))
console.log(substraction(10, 20))
console.log(multiplication(10, 20))
console.log(division(10, 20))