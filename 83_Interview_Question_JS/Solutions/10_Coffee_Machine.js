// The Coffee Machine:
// In your coffee shop application, you need to simulate the process of brewing coffee asynchronously. Write an async function named brewCoffee that takes the type of coffee and returns a promise. The promise should resolve with a message indicating that the coffee is ready after a random delay.

const randomDelay  = (coffee)=>{
    const time = Math.ceil(Math.random() * 7)
    setTimeout(() => {
        resolve(coffee)
    }, time * 1000);
}
const brewCoffee = (coffee)=>{
    return new Promise((resolve)=>{
        const time = Math.ceil(Math.random() * 7)
        setTimeout(() => {
            resolve(coffee)
        }, time * 1000);
    })
}

let x = brewCoffee("Latte")

x.then((coffee)=>console.log(`Your ${coffee} is ready !!`))
x.catch(err=>console.log(err))