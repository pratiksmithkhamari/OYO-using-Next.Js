import React from 'react'
import Image from 'next/image'
import Navbar from '@/components/Navbar'
const page = () => (
    <>
    <Navbar />
    <div className='flex justify-center '>
        <div className='h-[500px] w-[800px] flex justify-center items-center '>
        <Image src={'https://images.oyoroomscdn.com/uploads/hotel_image/233392/large/qmxbuuaapacr.jpg'} height={800} width={500} alt='single hotel' className='w-[95%] mt-3'/>
        </div>
    </div>
    <div className='flex gap-8 justify-center mt-2 items-center'>
        <div className='text-justify mt-7'>
            <h2 className='text-justify my-4 text-3xl font-bold text-zinc-900 capitalize'>OYO Hotel Jagdish Palace</h2>
            <p className='text-zinc-800 capitalize text-xl line-clamp-1'>27 balia panda housing board colony lighthouse road Baliapanda, Puri</p>
        </div>
        <div >
            <h2 className='h-10 flex justify-center items-center w-14 bg-amber-700 text-yellow-200'>3.4⭐</h2>
            <p className='font-semibold'>5 Ratings</p>
        </div> 
    </div>
        <div className='flex justify-center mr-[45%] mt-3 text-zinc-800'>
           <h1 className='text-2xl font-bold mt-7'>Amenities</h1>
        </div>
        <div className='flex gap-4 mt-3 text-justify justify-center flex-col items-center mb-8'>  
            <ul className='grid grid-cols-3 gap-7 font-semibold text-lg text-zinc-800'>
                <li>AC</li>
                <li>Free Wifi</li>
                <li>Elevator</li>
                <li>Geyser</li>
                <li>Power backup</li>  
                
            </ul>
        </div>
    </>
)

export default page
