// Async Array Mapping:
//    Write an asynchronous function that takes an array of numbers and returns a new array of Promises where each number is multiplied by 2 after a delay of 500 milliseconds.


let arr = [7, 2, 9, 11, 5, 13, 10]

function delayFunction(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(56)
        }, 3000);
    })
}

function arrayMapping(numbers){
    return (
        numbers.forEach(async (element) => {
            await delayFunction()
            console.log(element*2)            
        })

    ) 
}

arrayMapping(arr)
