import React from 'react'

const Navbar = ({logoText1, logoText2}) => {
  return (
   <nav>
        {logoText1} - {logoText2}
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Singin</li>
        </ul>
   </nav>
  )
}

export default Navbar
