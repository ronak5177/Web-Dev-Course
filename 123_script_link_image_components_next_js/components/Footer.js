import React from 'react'

const Footer = () => {
  return (
    <footer className='flex justify-around bg-slate-800 text-white text-md p-4'>
        <div className="text-center">Copyright © Facebook | All rights reserved</div>
        <ul className="flex gap-4">
            <a href="/"><li>Home</li></a>
            <a href="/about"><li>About</li></a>
            <a href="/contact"><li>Contact</li></a>
        </ul>
    </footer>
  )
}

export default Footer
