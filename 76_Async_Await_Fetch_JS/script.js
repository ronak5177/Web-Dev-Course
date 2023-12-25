// const getData = async ()=>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             resolve(4637)
//         }, 3500);
//     })
// }

const getData = async ()=>{
      let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
      let data = await x.json()
      return data
}

async function main(){
    console.log("Loading Modules")
    
    console.log("Load data")
    
    let data = await getData()
    
    console.log(data)  
    console.log("Process data")
    
}

main()
