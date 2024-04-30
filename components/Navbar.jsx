import React from 'react'
import NavTwo from './NavTwo'
import { PiHandbagSimple } from "react-icons/pi";
import { BsBuildings } from "react-icons/bs";
import { IoCallOutline } from "react-icons/io5";
import { FaCircleUser } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import NavbarThree from './NavbarThree';
import Link from 'next/link';
const Navbar = () => {
  return (
    <>
    <div className='flex items-center h-20 justify-between border-b-2'>
        <div className='ml-14'>
        <img src='/logo.png' alt="logo" height={110} width={110} className='' />
        </div>

        {/* block components */}
      <div className='flex gap-1 h-full mr-10' >
      <NavTwo  title="Become a member" details='additional 10% off' logo={<PiHandbagSimple />}/>
      <NavTwo title="OYO for business" details='trusted by 5000 corporates' logo={<PiHandbagSimple />}/>
      <NavTwo title="List of property" details='start earning in 30 mins' logo={<BsBuildings />}/>
      <NavTwo title="0123-123-1233" details='call us to book now' logo={<IoCallOutline />}/>
      </div>


     <div className='flex gap-3 items-center'>
     <TfiWorld className='text-[1.5rem]'/> <h2 className='capitalize font-semibold'>english</h2>

     </div>

      {/* login/signup */}
      <div className='flex items-center mr-11 gap-2'>
      <FaCircleUser className='text-2xl' /><Link href={'/login'}><h2 className='font-semibold capitalize'>signin/signup</h2></Link> 
      </div>
    </div>
    {/* cities components */}
    <div>
      <NavbarThree />
    </div>
    {/* banner one  */}
    <div>
    
    </div>
   </>
  )
}

export default Navbar
