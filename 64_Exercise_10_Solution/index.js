const getWord = (first, second, third)=>{
    let rand = Math.random()
    let word;
    
    if (rand < 0.33){
        word = first
    }
    else if (rand >= 0.33 && rand < 0.66){
        word = second
    } else{
        word = third
    }
    return word
}

const a = getWord("Crazy", "Amazing", "Fire")
const b = getWord("Engine", "Foods", "Garments")
const c = getWord("Bros", "Limited", "Hub")

console.log(`${a} ${b} ${c}`)
