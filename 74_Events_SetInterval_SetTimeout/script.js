let button = document.getElementById("btn")

button.addEventListener("mouseover", ()=>{
    document.querySelector(".box").innerHTML = "<b>Button was clicked</b> Mouse over event"
    document.body.style.backgroundColor = "yellow"
})

button.addEventListener("mouseup", ()=>{
    document.querySelector(".box").innerHTML = "<b>Button was clicked</b> Mouse up event"
    document.body.style.backgroundColor = "green"
})
button.addEventListener("contextmenu", ()=>{
    document.querySelector(".box").innerHTML = "<b>Button was clicked</b> don't right click"
    document.body.style.backgroundColor = "pink"
})

// document.addEventListener("keydown", (e)=>{
//     document.querySelector(".box").innerHTML = e
//     console.log(e)
//     document.body.style.backgroundColor = "beige"
// })


const random = ()=>{
    return Math.floor(Math.random() * 255)
}

// console.log(random(), random(), random())
// setInterval(()=>{
//     document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()}`
// }, 1000)

// clearInterval(2)

setTimeout(() => {
    document.body.style.backgroundColor = `rgb(${random()}, ${random()}, ${random()}`
}, 5000);

