import React, {useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'


const Button = () => {

  const value = useContext(counterContext)
  return (
    <>
        <div>
        <button onClick={() => value.setCount((prev) => prev + 1)}>
          count is {value.count}
        </button>
        </div>
 
        <Component1 />
    
        {/* <Component1 count={count}/> */}
    </>
  )
}

export default Button
