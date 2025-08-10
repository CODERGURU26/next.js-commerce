
import React from 'react'
import Image from 'next/image'

const Carts = () => {
  return (
    <div className='bg-gradient-to-r from-blue-400 to-green-400'>
      <div className='space-y-12 w-5/12 mx-auto bg-white'>
      {
        Array(12).fill(0).map((items , index)=>{
          return(
            <div key={index} className='p-3 border-1 border-gray-300 shadow-lg rounded-lg flex gap-2'>
              <Image
                src='/product1.jpeg'
                width={200}
                height={200}
              />
              <div className='flex flex-col gap-2'>
                 <h1 className=' font-serif font-bold'>Gray Shoes</h1>
                 <label className='text-gray-300 font-serif'>A Nike Gray Shaded Shoes </label>
                 <label className=' font-serif font-bold'>$349</label>

                 <button className='bg-green-400 px-3 py-2 rounded-lg text-white font-bold font-serif
                 hover:bg-green-700 transition-all duration-500 hover:cursor-pointer'>Buy Now</button>
              </div>
            </div>
          )
        })
      }
    </div>
    </div>
    
  )
}

export default Carts