import React, { useEffect, useState } from 'react'
import ProductItem from '../component/ProductItem';
function Home() {
    const url = "https://fakestoreapi.com/products";
    
    const [items,setItem] = useState([]);
    const [loading ,setloading]= useState(false)

    async function fetchItem(){
        setloading(true)
        try{
            const res = await fetch(url);
            const data = await res.json();
            setItem(data)
            console.log(data)
        }
        catch(e){
            console.log("error aya item fetch not")
            setItem([])
        }
        setloading(false);
        
    }
    useEffect(() =>{
        fetchItem();
    },[])
    
  return (
    

    <div className='h-[100vh] w-[100vw] '>
    {
        loading ? (
            <div className='text-center mt-[20rem] font-bold text-[2rem]' >
                LOADING DATA...
            </div>
        ):(
            items.length >0 ?
            ( <div  className="grid overflow-x-hidden  xs:grid-cols-1 sm:grid-cols-2
             md:grid-cols-3 w-11/12
            lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
              { items.map( (item) =>{
                    
                return <ProductItem key={item.id} 
                    item={item} />
                    
                })}
             </div>  ):(
                <div className='text-center mt-[20rem] font-bold text-[2rem]'>No data found</div>
            )
        )
    }
    </div>

    
  )
}

export default Home