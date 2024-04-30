import React from 'react'

const NavbarThree = () => {
    const cities = [
        {
            name:"Bangalore"
        },
        {
            name:"Chennai"
        },{
            name:"Bhubaneswar"
        },{
            name:"Hydrabad"
        },{
            name:"Kolkata"
        },

    ]
  return (
    <div className='flex justify-between h-12 items-center border-b-2 border-slate-200 bg-slate-100'>
      {cities.map((city)=>{
      return (
        <span key={city.name} className='mx-5'>{city.name}</span>
      )
      })}
    </div>
  )
}

export default NavbarThree
