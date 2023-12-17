// alert("Hello World !!")
console.log("Hello from console ...")

// let x = prompt("Give me id: ")
let x = prompt("Give me id: ")
let isNumber = confirm("Are you sure you have given an id ? ")

if (isNumber){
    console.log("Your given number is  ", x)
}
else{
    console.log("You didn't provided any number")
}

console.log(x)
