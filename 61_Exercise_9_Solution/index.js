/* Create a Faulty calculator using javascript

This faulty calculator does the following:
1. It takes two Numbers as an input from User
2. It perform wrong operations as follows: 

+ ---> -
* ---> +
- ---> /
/ ---> **

It performs wrong operation 10% of the TimeRanges
*/
rand = Math.random()
console.log(rand)

a = prompt("Enter first number")
b = prompt("Enter operation")
c = prompt("Enter second number")


const obj = {
    "+" : "-,",
    "*" : "+",
    "-" : "/",
    "/" : "**"
}

if (rand > 0.1){
    // Perform correct operation    
    console.log(`Your result of ${a} ${b} ${c} =  ${eval(`${a} ${b} ${c}`)}`)
    alert(`Your result of ${a} ${b} ${c} = ${eval(`${a} ${b} ${c}`)}`)
} else{
    // Perform wrong operation
    b = obj[b]
    console.log(`Your result of ${a} ${b} ${c} =  ${eval(`${a} ${b} ${c}`)}`)
    alert(`Your result of ${a} ${b} ${c} =  ${eval(`${a} ${b} ${c}`)}`)
}

