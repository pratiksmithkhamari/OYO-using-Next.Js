import React from 'react'
import Image from 'next/image'
const BannerThree = () => {
  return (
    <div className='flex justify-between mx-12 border border-slate-300 mt-11 rounded-md h-24 overflow-hidden items-center'>
      <div className='flex gap-5 items-center'>
        <div className='ml-4'>
        <Image src={'/fire.jpg'} alt='bannerThree' width={80} height={80} className=''/>
        </div>
         
         <div className='capitalize '>
            <h3 className='font-bold text-2xl text-zinc-800'>Get access to exclusive deals</h3>
            <h3 className='text-[1.2rem] text-slate-600 font-semibold'>Only the best deals reach your inbox</h3>
         </div>
      </div>
      <div className='w-[50%] flex gap-4'>
         <input type="email" placeholder='e.g.,riteshagrawal@gmail.com' className='w-[55%] h-12 outline-none border-2 p-2 rounded-md'/>
         <button className='w-[20%] bg-red-600  text-white font-semibold px-4  py-2 rounded-lg'>Notify Me</button>
      </div>
    </div>
  )
}

export default BannerThree
