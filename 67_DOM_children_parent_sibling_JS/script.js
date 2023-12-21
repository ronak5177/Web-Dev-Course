console.log("Hello world")


const cont = document.body.childNodes[1]

console.log(cont.lastChild)
cont.lastElementChild.style.color = "blue"
cont.lastElementChild.style.backgroundColor = "pink"

console.log(cont.lastElementChild.parentElement)


// document.body.firstElementChild  //returns container
// document.body.firstElementChild.childNodes

document.body.firstElementChild.children
// HTMLCollection(5) [div.box, div.box, div.box, div.box, div.box]

document.body.firstElementChild.children[0]
document.body.firstElementChild.children[3].nextElementSibling