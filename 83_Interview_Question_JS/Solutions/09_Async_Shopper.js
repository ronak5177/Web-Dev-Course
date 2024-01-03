// The Asynchronous Shopper:
//    Imagine you are building an online shopping application. Write an asynchronous function called placeOrder that simulates placing an order and returns a promise. The promise should resolve with an order confirmation message after a random delay.

function randomDelay(){
    let time = Math.ceil(Math.random() * 7)
        return new Promise (resolve=>{
        setTimeout(()=>{
            resolve(45)
        }, time* 1000)
    })
}

let arr = ["Book", "Fruit", "Pen", "Dumbell", "ring"]

arr.map(async (x)=> {
    await randomDelay()
    console.log(`Your ${x} is added in the card`)
    return x
})

