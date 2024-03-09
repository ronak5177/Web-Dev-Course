import {useEffect} from 'react'

const Navbar = ({color}) => {
  // Case 1: Run on every render
  useEffect(()=>{
    alert("Hello User, I'll run on every render")
  })

  // Case 2: Run only on first render
  useEffect(()=>{
    alert("This will run only on first render")
  }, [])

//   Case 3: Run only on certain value change
  useEffect(()=>{
    alert("Color was updated")
  }, [color])


  // Example of cleanup function
  useEffect(()=>{
    return ()=>{
      alert("Component was unmounted")
    }
  }, [])
  return (
    <div>
     This is navbar of {color}
    </div>
  )
}

export default Navbar
