import Navbar from '@/components/Navbar'
import SingleHotelCard from '@/components/SingleHotelCard'
import React from 'react'

const page = () => {
  return (
    <>
    <Navbar />
    <div className='m-5 '>
      <SingleHotelCard />
      <SingleHotelCard />
      <SingleHotelCard />
    </div>
    </>
  )
}

export default page
