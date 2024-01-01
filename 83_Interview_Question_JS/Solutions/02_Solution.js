// The Double Trouble:
//    You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.

let numbers = [ 3, 5, 7, 7, 13, 4, 5, 5, 11, 9, 3, 3, 25]

const arr = numbers.filter((x, i)=>{
    if (x === numbers[i+1]){
        return false 
    } return true
})

const doubles = arr.map(x=> x**2)
console.log(doubles)