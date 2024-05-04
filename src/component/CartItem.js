
import React from 'react'
import {AiFillDelete} from 'react-icons/ai'
import { remove } from '../redux/slices/CartSlice'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-hot-toast'
function CartItem({cartitem}) {
    const dispatch =useDispatch()
    function removeFromCart(){
        dispatch(remove(cartitem.id));
        toast.error("item removed");
      }
  return (
    
        <div className='w-full flex-col lg:flex-row flex gap-x-[4rem] items-center lg:items-start 
        p-3 border-b-2 border-black mt-5'>
        <div className='w-[200px]'>
            <img src={cartitem.image} className='h-full w-full object-cover'/>
        </div>
        <div className='flex gap-y-[2rem]  flex-col'>
            <h2 className=' text-gray-500 font-semibold text-[18px]'>{cartitem.title}</h2>
            <p className='w-[350px] text-gray-500 font-normal text-[15px]'>{cartitem.description.split(' ').slice(0,15).join(' ') + '...'}</p>
            <div className='w-full flex justify-between'>
                <p className='text-[16px] text-green-600 font-bold'>${cartitem.price}</p>
                <button onClick={removeFromCart} className='w-[30px] h-[30px] rounded-full
                 bg-red-300 flex items-center justify-center'>
                <AiFillDelete/>
                </button>
            </div>
        </div>
    </div>
  
  )
}

export default CartItem