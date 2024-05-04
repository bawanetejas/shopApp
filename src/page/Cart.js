import React from 'react'
import { useSelector } from 'react-redux'
import CartItem from '../component/CartItem'
import { NavLink } from 'react-router-dom';
export default function Cart() {
  const {cart} =useSelector((state)=>state)
  let total=0;
    cart.forEach(element => {
        total=total+element.price;
        
    });
  return (
    <div className='w-11/12 max-w-[1150px] mx-auto flex gap-12 pb-10'>
       <div className='w-[60%]'>
        
          {
          cart.map((citem) =>{
            return <CartItem key={citem.id} 
            cartitem={citem} />
          })
        }
        
       </div>

  <div className='w-[30%] h-[80vh] mt-[5rem]'>
      {
        cart.length > 0 ?(
          <div className='flex flex-col justify-between h-full'>
          <div>
            <p className='font-semibold'>YOUR CART</p>
            <h1 className='text-[3rem] uppercase text-green-500 font-bold'>summary</h1>
            <p className='text-[1.2rem] '>Total Item : {cart.length}</p>
          </div>
          <div>
            <p className='text-[1rem] '>Total Amount : <span className='font-bold'>${total}</span></p>
            <button className='w-full py-2 bg-green-700
            rounded-md text-white font-bold mt-2'>
              Checkout Now
            </button>
          </div>
          </div>
      
        ) :(
             <div>
              <p> No items</p>
              <NavLink to='/'>
                <button>
                  Shop Now
                </button>
              </NavLink>
             </div>
        )
       }

      
    </div>

    </div>
  )
}
