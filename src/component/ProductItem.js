
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {add,remove} from '../redux/slices/CartSlice'
import toast from 'react-hot-toast';
function ProductItem({item}) {
    const {cart} = useSelector((state) => state)
    console.log(cart);
    const dispatch =useDispatch();

    function addToCart(){
      dispatch(add(item));
      toast.success("Add to Cart");
    }
    function removeFromCart(){
      dispatch(remove(item.id));
      toast.error("item removed");
    }
  return (
    <div className='flex   flex-col bg-white gap-4 p-4 mt-10
      items-center border-2 rounded-xl ml-5
      hover:scale-110 transition duration-300 hover:shadow-2xl'>
       <div>
       <h2 className=' w-40 text-[18px] font-semibold truncate
         text-left mt-1'>{item.title}</h2>
       </div>
        <div>
        <p className='w-40 text-[10px] text-[#9ca3af] font-normal text-left '>
        {item.description.split(' ').slice(0,10).join(' ') + "..."}</p>
        </div>
        <div className='h-[180px]'>
        <img src={item.image} className='h-[180px] w-full'/>
        </div>

        <div className='flex justify-between gap-12 items-center w-full mt-6 relative '>
            <div>
            <p className='text-[16px] font-semibold 
            text-[#16a34a]'>${item.price}</p>
            </div>

            {
               cart.some((post) => post.id === item.id ) ?
               (
                <button onClick={removeFromCart}
                className='border-2 border-[black] px-3 py-1 rounded-full text-[13px]
                hover:bg-slate-700 hover:text-white transition duration-300 ease-in'
                >
                    Remove item
                </button>
               ):(
                <button onClick={addToCart}
                className='border-2 border-[black] px-3 py-1 rounded-full text-[13px]
                hover:bg-slate-700 hover:text-white transition duration-300 ease-in'
                >Add to Cart</button>
               )
               
            }
        </div>

    </div>
  )
}

export default ProductItem