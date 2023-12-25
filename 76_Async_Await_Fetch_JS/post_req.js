async function getData(){
  let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'MERN Stack',
            body: 'Practice set',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
        })
    let data = x.json()
    return data
}

async function main(){
    console.log("Before")
    let res = await getData()
    console.log(res)
    console.log("After")
}

main()