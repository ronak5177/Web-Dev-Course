async function sleep() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("inside settimeout");
      resolve(56);
    }, 1000);
  });
}

// IIFE -Immediately Invoked Function Expression
(async function main() {
  // let a = await sleep()
  // console.log(a)
  // // a.then((res)=> console.log(res))

  // let b = await sleep()
  // console.log(b)
  // console.log("function call completed")

  

})();
