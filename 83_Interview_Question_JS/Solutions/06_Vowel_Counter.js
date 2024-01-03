// The Vowel Counter:
//    You need to create a function that counts the number of vowels in a given string. Consider both uppercase and lowercase vowels.


function countVowels(str, vowels){
    let count=0;
    for (const s of str) {
        if (vowels.includes(s)){
            count+=1
        }
    }
    return count
}
const str = "aeiouAEIOU"
const vowels = Array.from(str)

const mystring = "Hello Genius"

console.log(countVowels(mystring, vowels))