import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("red")
  const [count, setCount] = useState(0)
  const [form, setForm] = useState({email: "", phone: ""})

  const handleCount = ()=>{
    setCount(count=> count+1)
  }

  const handleMouseOver = (e)=>{
    e.target.style.backgroundColor = "blue"
    setColor("blue")
    console.log(e.target.style)
  }
  const handleMouseLeave = (e)=>{
    e.target.style.backgroundColor = "red"
    setColor("red")
    console.log(e.target.style)
  }

  const handleChange = (e)=>{
    setForm({...form, [e.target.name]:e.target.value})
    console.log(form)
  }

  return (
    <>
      <div className='red' onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>{count}</div>
      <div>
      <button onClick={handleCount}>click me</button>
      </div>


      <input type="text" name='email' value={form.email?form.email:""} onChange={handleChange}/>
      <input type="text" name='phone' value={form.phone?form.phone:""} onChange={handleChange}/>
    </>
  )
}

export default App
