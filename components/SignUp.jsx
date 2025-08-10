import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const SignUp = () => {
  return (
    <div className='bg-gray-700 h-screen flex items-center'>
      <div className='bg-white w-6/12 mx-auto  rounded-lg relative'>
          <div>
            <Image 
              src="/signup.svg"
              width={360}
              height={160}
              className='mx-auto'
              alt='signup'
            />
           
          </div>
          <div className='p-8 bg-gradient-to-r from-amber-400 to-orange-400'>
            <form>
              <div className=' flex flex-col gap-2'>
                <label className='text-xl text-pink-900 font-serif'>Fullname:</label>
                <input type="text" placeholder="Guru" name='fullname' className='p-3 rounded-lg border-2 border-pink-700' />

                <label className='text-xl text-pink-900 font-serif'>Email:</label>
                <input type="email" placeholder="example@gmail.com" name='email' className='p-3 rounded-lg border-2 border-pink-700' />

                <label className='text-xl text-pink-900 font-serif'>Mobile:</label>
                <input type="number" placeholder="999999999" name='mobile' className='p-3 rounded-lg border-2 border-pink-700' />

                <label className='text-xl text-pink-900 font-serif'>Password:</label>
                <input type="password" placeholder="*****" name='password' className='p-3 rounded-lg border-2 border-pink-700' />

                <button className='px-3 py-2 bg-blue-400 text-white hover:cursor-pointer
                rounded-lg  hover:bg-indigo-400 transition-all duration-500 '>Register</button>
              </div>
            </form>

            <div className='mt-5'>
               <label className='p-2 font-serif font-semibold text-pink-800'>Already SignedUp?</label>
            <Link href="/login" className='text-blue-500 font-semibold font-serif'>click here</Link>
            </div>
          </div>


      </div>
    </div>
  )
}

export default SignUp