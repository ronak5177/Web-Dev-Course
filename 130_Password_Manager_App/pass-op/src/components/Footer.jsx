import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-800 text-white flex flex-col items-center gap-2 w-full'>
        <div className="logo font-bold text-xl">
          <span className='text-green-500'>&lt;</span>
          Pass
          <span className='text-green-500'>OP/&gt;</span>

        </div>
        <div className='flex justify-center items-center gap-1'>
        Created with <img className='w-6' src="icons/heart.png" alt="heart" /> by Ronak Patel

        </div>
    </div>
  )
}

export default Footer