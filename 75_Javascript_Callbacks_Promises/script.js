const callback2 = (src, arg)=>{
    console.log(`Script2:${src} loaded by ${arg}`)
}

const callback1 = (src, arg, callback2)=>{
    console.log(`Script1:${src} loaded by ${arg}`)
    callback2(src, arg)
}

const loadScript = (src, callback1)=>{
    let sc = document.createElement("script")
    sc.src = src;
    sc.onload = callback1(src, "ronak", callback2)
    document.head.append(sc)
}


loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback1)