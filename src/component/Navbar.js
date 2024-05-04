import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
export default function Navbar() {

  const {cart} =useSelector((state)=> state)
  console.log('this is from nav' ,cart)
  return (
    <div className='bg-slate-900 w-full h-[80px]'>
    <div className='max-w-[1150px] w-11/12 h-full mx-auto flex items-center justify-between'>
        <NavLink to='/'>
        <img src='../logo.png' className='w-[176px] h-[3rem]'/></NavLink>
        <div className='flex gap-x-3 text-white items-center'>
            <NavLink to='/' >
            <p className='font-semibold'> HOME</p>
            </NavLink>
            <NavLink to='/cart' className='relative'>
            <FaShoppingCart className='text-[25px]'/>
           {
            cart.length >0 && (
              <div className='-top-[12px] right-0 w-[20px] h-[20px] rounded-full absolute
             bg-[#00ffbf] flex items-center justify-center animate-bounce'>
             <p className='text-black text-[12px]'>{cart.length}</p>
            </div>
            )
           }
            </NavLink>
            
        </div>
    </div>
    </div>
  )
}
