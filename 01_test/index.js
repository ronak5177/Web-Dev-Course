const arr = [1,2,4,5,6,7]


// let init = 0
const result = arr.reduce((acc, nextVal)=>{
    return acc * nextVal
})

console.log(result)