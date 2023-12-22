console.log("Script js initializing")

// let boxes = document.getElementsByClassName("box")
let boxes = document.querySelector(".container").children


const getRandomColor = ()=>{
    let val1 =  Math.floor(Math.random() * (255))
    let val2 = Math.floor(Math.random() * (255))
    let val3 = Math.floor(Math.random() * (255))
    return `rgb(${val1},${val2},${val3})`
}

b = Array.from(boxes)
b.forEach(element => {
    element.style.backgroundColor = getRandomColor()
    element.style.color = getRandomColor()
});
// b.map((e, i)=>{
//     e.style.color = getRandomColor()
// })

