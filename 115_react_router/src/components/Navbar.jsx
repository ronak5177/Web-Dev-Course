import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  
  return (
    <nav>
        <ul>
            <NavLink className={(e)=>{return e.isActive?"black":""}} to="/"><li>Home</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"black":""}} to="/about"><li>About</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"black":""}} to="/login"><li>Login</li></NavLink>
            <NavLink className={(e)=>{return e.isActive?"black":""}} to="/user"><li>User</li></NavLink>
        </ul>
    </nav>
  )
}

export default Navbar
