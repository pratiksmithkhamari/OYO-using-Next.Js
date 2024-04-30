import React from 'react'



const NavTwo = ({title,details,logo}) => {
  return (
    <>
    <div className='flex gap-3 border-r-2 h-full items-center p-3'>
      <div className='text-2xl'>{logo}</div>
      <div className=''>
        <h2 className='capitalize font-semibold'>{title}</h2>
        <p className='capitalize text-sm text-slate-500 line-clamp-1'>{details} </p>
      </div>
      
    </div>
    
    </>
  )
}

export default NavTwo
