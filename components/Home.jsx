
import React from 'react'
import products from '@/json/products'
import Image from 'next/image'
import Link from 'next/link'


const Home = () => {
  return (
    <div>
      <div className='lg:grid grid-cols-4 md:gap-12 gap-8'>
        {
          products.map((items, index) => {
            return (
              <div key={index} className='bg-white shadow-lg rounded-lg p-2 flex flex-col gap-3'>
                <Image
                  src={items.images[0]}
                  width={400}
                  height={300}
                  alt={items.name}
                />
                <Link href={`/products/${items.name}`} className='font-bold font-serif'>{items.name}</Link>
                <label className='text-gray-500'>{items.description}</label>
                <label>${items.price}</label>

                <Link href='/carts' className='bg-amber-300 rounded-lg px-3 py-2 shadow-lg text-white 
                font-bold font-serif hover:cursor-pointer hover:bg-amber-500 transition-all duration-500'>Add To Cart</Link>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export default Home