import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [cards, setCards] = useState([])

  const fetchData = async ()=>{
    let data = await fetch("https://jsonplaceholder.typicode.com/posts")
    let result = await data.json()

    setCards(result)
    console.log(result)

  }

  useEffect(()=>{
    fetchData()
  },[])
  

  return (
   <>
      <Navbar />
      <div className="container">
        {cards.map((card)=>{
          return <div key={card.id} className="card">
            <h2>{card.title}</h2>
            <p>{card.body}</p>
          </div>
        })}
        
      </div>
   </>
  )
}

export default App
