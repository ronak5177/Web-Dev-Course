/* Create a business name generator by combining list of adjectives and shop name and another word
Adjectives:

Crazy 
Amazing
Fire 

Shop Name:
Engine
Foods
Garments

Another Word:
Bros
Limited
Hub
*/

console.log(Math.floor(Math.random() * 2))

const adjectives = {
    0: "Crazy", 
    1:"Amazing",
    2:"Fire" 
}

const shopName = {
    0:"Engine",
    1:"Foods",
    2:"Garments"
}

const anotherWord = {
   0: "Bros",
   1:"Limited",
   2:"Hub"
}


const generator = ()=>{
    const a = Math.floor(Math.random() * 2)
    const b = Math.floor(Math.random() * 2)
    const c = Math.floor(Math.random() * 2)

    console.log(`Your business name is: ${adjectives[a]} ${shopName[b]} ${anotherWord[c]}`)

}

generator()