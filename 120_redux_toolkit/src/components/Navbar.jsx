import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Navbar = () => {
    const count = useSelector((state) => state.counter.value)
  return (
    <div>
      I'm navbar and the count is : {count}
    </div>
  )
}

export default Navbar
