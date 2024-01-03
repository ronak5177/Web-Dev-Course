// The Mirror Mirror:
//    Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function reversedString(str){
    let arr = Array.from(str)
    arr.reverse()
    return str + arr.join("") 
}

let str = "GoodMorning"
console.log(reversedString(str))