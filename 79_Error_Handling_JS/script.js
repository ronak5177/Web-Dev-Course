let num1 = parseInt(prompt("Enter first number"))
let num2 = parseInt(prompt("Enter second number"))

// if (isNaN(num1) || isNaN(num2)){
//     throw SyntaxError("You have not entered number")
// }
// console.log(`The sum = ${num1+num2}`)

// let x = 4;
// try {
//     console.log(`The sum is ${num1 * x}`)
// } catch (error) {
//     console.log("Please define a value before performing operation")
// }

//Even without finally the code execution works perfectly fine
// finally{
//     console.log("all the opeartion has been executed")
// }


const main = ()=>{
    let x = 4;
    try {
        console.log(`The sum is ${num1 * x}`)
        return true
    } catch (error) {
        console.log("Please define a value before performing operation")
        return false
    }
    finally{
        console.log("All the opeartion has been executed")
    }
}


let c = main()
console.log(c)