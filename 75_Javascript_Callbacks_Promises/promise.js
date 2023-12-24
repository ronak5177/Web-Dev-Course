console.log("This is promises")

let promise1 = new Promise((resolve, reject)=>{
    let num = Math.random();
    if (num < 0.5){
        reject("Your request can't be fulfilled hence its rejected")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done")
            resolve("ronak")
        }, 2000);
    }
})

let promise2 = new Promise((resolve, reject)=>{
    let num = Math.random();
    if (num < 0.5){
        reject("Your request can't be fulfilled hence its rejected 2")
    }
    else{
        setTimeout(() => {
            console.log("Yes I am done 2")
            resolve("ronak 2")
        }, 2000);
    }
})

// let p3 = Promise.all([promise1, promise2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(e=>{
//     console.log(e)
// })

// let p3 = Promise.allSettled([promise1, promise2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(e=>{
//     console.log(e)
// })


// let p3 = Promise.race([promise1, promise2])
// p3.then((a)=>{
//     console.log(a)
// }).catch(e=>{
//     console.log(e)
// })

let p3 = Promise.any([promise1, promise2])
p3.then((a)=>{
    console.log(a)
}).catch(e=>{
    console.log(e)
})

// promise1.then((a)=>{
//     console.log(a)
// }).catch((e)=>{
//     console.log(e)
// })