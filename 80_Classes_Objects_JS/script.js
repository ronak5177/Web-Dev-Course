
/*
let obj = {
    a: 1,
    b: "Ronak"
}

console.log(obj)
let animal = {
    eats: true
}

let rabbit = {
    jumps: true
}

rabbit.__proto__ = animal;  // sets rabbit.[[Prototype]] = animal
*/

class Human{
    constructor(name){
        this.name = name
        console.log(`Human object is created with the name ${name}`)
    }

    eats(){
        console.log("Eating")
    }

    dance(){
        console.log("Dancing")
    }
}

class Student extends Human{
    constructor(name){
        super(name)
        console.log(`I'm a object of student, My name is ${name}`)
    }

    eats(){
        console.log("I'm a student and I eat at 10 o'clock")
    }
    read(){
        console.log("reading")
    }
}


let h = new Human("Manav")
let s = new Student("Ronak")


// h.eats()
// s.eats()
// s.read()

s instanceof Student // true
s instanceof Human // true
h instanceof Student // false
g instanceof Human // true