import React from 'react'
import "../app/globals.css";
import Link from 'next/link';
const BannerOne = () => {
  return (
    <div className='bannerOne h-64 flex justify-center items-center flex-col gap-5'>
      <h2 className='text-4xl text-white font-bold capitalize'>Over 174,000+ hotels and homes across 35+ countries</h2>
      <div className='flex w-9/12'>
        <input type="text" className='w-4/12 h-16 outline-none border-r-2 border-zinc-200 rounded-l-md'/>
        <input type="text" className='w-3/12 h-16 outline-none border-r-2 border-zinc-200'/>
        <input type="text" className='w-3/12 h-16 outline-none border-r-2 border-zinc-200'/>
       <button className='bg-green-600 hover:bg-green-700 w-2/12 text-white text-[1.3rem] rounded-r-md font-semibold' ><Link href='/hotels'> Search</Link></button>
      </div>
    </div>
  )
}

export default BannerOne
