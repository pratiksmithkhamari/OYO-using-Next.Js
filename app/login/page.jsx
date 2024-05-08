'use client'

import React, { useState } from 'react'
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
const Log = () => {
  const [name,setName]=useState('')
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const [signin,setSignin] = useState(false)

const navigate = useRouter()




{/* Same as */}
<ToastContainer />

const handleSignin = (prev)=>{
  setSignin(prev=>!signin)
 
}

// register api 
    const handleRegister =async ()=>{
      const resData =  await axios.post('/api/user/user-api',{
        name,email,password
      })
      console.log(resData);
      if(resData){
        Cookies.set('user',resData?.data?.token)
        toast.success("Login Successful")
        console.log(resData);
          navigate.push('/')
      }
  
};

//login api 
    const handleLogin =async ()=>{
      // const  fetchData =  await fetch('/api/user/user-login',{
      //   method:"POST",
      //  headers:{
      //   "Content-type":"application/json"
      //  },
      //  body: JSON.stringify({ email, password })
      // })
      // const data = await fetchData.json()
      // console.log(data);

      
    const resData =  await axios.post('/api/user/user-login',{
        email,password
      })
      console.log(resData);
      if(resData){
        Cookies.set('user',resData?.data?.token)
        toast.success("Login Successful")
        console.log(resData);
          navigate.push('/')
      }
     
    };
   
  return (
    <div className='h-screen w-full bg-background-login bg-no-repeat bg-cover sm:flex sm:flex-col flex'>
      <div className='flex gap-10 ml-8 items-center h-10 '>
      <h2 className='text-4xl text-zinc-800 font-extrabold tracking-tighter cursor-pointer'><Link href={'/'}>OYO</Link></h2>
      <h2 className='text-white font-bold text-xl'>Hotels and homes across 800 cities, 24+ countries</h2>
      
      </div>
      <ToastContainer position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
       />
      
      <div className='flex gap-10 h-screen items-center justify-center text-white backdrop-blur-sm'>
        <div className=' w-[50%] ml-20'>
          <h2 className='text-5xl font-bold w-[80%] mb-4'>There’s a smarter way to OYO around</h2>
          <h2 className='text-[1.3rem] font-semibold '>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</h2>
        </div>

        {/* login form section */}
        
        <div className='w-[50%] min-h-[70%] mt-28 flex  justify-start mb-16 items-center'>
          <div className='min-h-[85%] w-[70%] bg-pink-50 py-4 '>
            <div className='bg-gradient-to-r from-red-500 to-red-600 h-9 flex items-center p-1'>
            <h1 className='capitalize ml-14 text-white font-bold '>sign up and get ₹500 OYO money</h1>
            </div>
            <div className='px-11 py-8'>
              <h2 className='text-4xl text-zinc-700 font-bold '>
              Login / Signup
              </h2>
              <p className='text-zinc-800 text-lg font-semibold mt-8'>Please enter your phone number to continue</p>
              </div>
              <div className='flex flex-col gap-4 w-[100%]  items-center justify-center text-black '>
              {signin ? <input type="text" placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} className='w-[70%] h-12 outline-none rounded-sm border-2 border-slate-300 p-2'/>:null}
              <input type="email" placeholder='Enter your email' onChange={(e)=>setEmail(e.target.value)} className='w-[70%] h-12 outline-none rounded-sm border-2 border-slate-300 p-2'/>
              <input type="password" placeholder='Enter your password' onChange={(e)=>setPassword(e.target.value)} className='w-[70%] h-12 outline-none rounded-sm border-2 border-slate-300 p-2'/>

              <button className='bg-green-500 hover:bg-green-600 text-white text-[1.3rem] font-semibold rounded-md w-[50%] mt-6 px-6 py-2 mr-5' onClick={signin ? handleRegister : handleLogin }>{signin?"SignUp":"Login"}</button>
              <h2 className='text-zinc-800 text-lg'>{signin?"Already have an account":"New User"} ? <span className='text-red-600 cursor-pointer' onClick={handleSignin}>{signin?"SignUp":"LogIn"}</span></h2>
              </div>

          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Log
