import React, { memo } from 'react'

const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is rendered")
  return (
    <div>
      I'm a {adjective} Navbar
      <button onClick={()=>getAdjective()}>{getAdjective()}</button>
    </div>

  )
}

export default memo(Navbar)

// without memo Navbar will rerender everytime when state is changed.
// export default Navbar
