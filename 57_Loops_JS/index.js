console.log("Loops in JS");

let a = 100;

// Conventional for loop
// for (let i = 0; i < a; i++) {
//     console.log(i+1)
// }

obj = {
  name: "Ronak",
  role: "Programmer",
  company: "TCS",
};

// for in loop: mostly use for objects
// for (const key in obj) {
//   const element = obj[key];
//   console.log(key, element);
// }


// for of loop: mostly used for arrays

// fruits = ["Apple", "Banana", "Cherry", "Watermelon", "Orange"]
// for (const iterator of fruits) {
//     console.log(iterator)
// }

// let i=1;
// while(i<=10){
//     console.log(i)
//     i++;
// }

let i=15;
do {
    console.log(i)
    i++;
} while (i<=10);