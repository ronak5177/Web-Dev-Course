import React from 'react'

const Navbar = () => {
  return (
   <nav className= 'flex justify-around bg-slate-700 text-white px-5 py-4'>
    <div className="logo">
        <span className='font-bold text-xl mx-5'>ToDoApp</span>
    </div>
    <ul className=" flex gap-4 mx-5">
        <li className='cursor-pointer hover:font-bold transition-all duration-100'>Home</li>
        <li className='cursor-pointer hover:font-bold transition-all duration-100'>Your Task</li>
    </ul>
   </nav>
  )
}

export default Navbar
