import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'


function App() {
  const [myusers, setMyUsers] = useState([]);

  useEffect(async ()=>{
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts")
        let result = await data.json()
        setMyUsers(result)
    } catch (error) {
      alert("Error: ", error)
    }

  }, [])
  return (
    <>
    <Navbar />

    <div className="container flex flex-wrap gap-5 justify-center mt-5">
      {myusers.map((user)=>{
        return <Card body={user.body}/>
      })}

    </div>
   
      
    </>
  )
}

export default App
