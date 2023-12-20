// let a = [1, 92, 5, 6, 34]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element)
// }

// Foreach loop: used for array 
// a.forEach((value, index, array)=>{
//     console.log(value, index, array)
// })

let obj = {
    a:1,
    b:2,
    c:3
}

// For in loop : return key (used for obj)
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         const element = obj[key];
//         console.log(key, element)   
//     }
// }

// For of loop: return value (used for array)
let arr = [1, 92, 5, 6, 34]
for (const value of arr) {
    console.log(value)
}