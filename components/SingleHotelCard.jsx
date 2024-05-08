import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const SingleHotelCard = () => {
  return (
    <>
    <div className='border-blue-800 border-2 h-[300px] w-full p-3 mt-3  '>
     <div className='flex gap-3'>
         <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/233392/large/ngtucukojqwe.jpg'} height={200} width={200} className='w-[400px] h-[270px]'/>
        <div className='grid grid-rows-3'>
            <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/233392/large/ngtucukojqwe.jpg'} height={100} width={100} className='w-24 h-16'/>
             <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/233392/large/ngtucukojqwe.jpg'} height={200} width={200} className='w-24 h-16'/>
            <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/233392/large/ngtucukojqwe.jpg'} height={200} width={200} className='w-24 h-16'/>
             <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/233392/large/ngtucukojqwe.jpg'} height={200} width={200} className='w-24 h-16'/>
         </div>
        <div className='ml-2'>
            <h1 className='text-2xl font-bold capitalize '>Super OYO victoria royal </h1>
            <p className='line-clamp-1 capitalize text-lg mt-1'>near head post office, puri</p>
            <div className='flex items-center mt-3'>
                <span className='capitalize font-bold text-xl'>facilities: </span>
                <span>free wifi,geyser,power backup,dinning area</span>
            </div>
            <div className='mt-12  flex gap-4 items-center justify-between w-[600px] '>
                <h2 className='font-bold text-2xl flex items-center gap-3'>₹1599 <span className='line-through font-semibold text-slate-600 text-[1.2rem]'>₹7699</span></h2>
               <Link href={'/hotels/:id'}><button className='border-2 border-zinc-800 p-2 bg-transparent rounded-lg text-zinc-700 font-bold '>View Details</button></Link>  
            </div>
        </div>  
    </div>
    </div>
    
    </>
  )
}

export default SingleHotelCard
