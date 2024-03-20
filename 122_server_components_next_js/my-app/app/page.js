"use client"

import Navbar from "@/components/Navbar";

// import { useState, useEffect } from "react";

// import fs from "fs/promises"

export default function Home() {
  // Only works with client component
  // const [count, setCount] = useState(0)

 
  console.log("Hello next js")

  // Only works with server component (default behaviour)
  // let a = fs.readFile(".gitignore")
  // a.then(e=> {console.log(e.toString())})
  return (
    <>
   <Navbar /> 
   <div>
      <div>
    I am component 
    </div>
      {/* the count is {count} */}
      <div>
        
      <button className="bg-blue-600 text-white px-3 py-1 rounded-md mx-3" onClick={()=> setCount(p=>p+1)}> Click Me</button>
      </div>

   </div>
    </>
  );
}
