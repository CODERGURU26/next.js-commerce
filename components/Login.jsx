import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {
  return (
    <div className='bg-gray-700 h-screen flex items-center'>
      <div className='bg-white w-6/12  mx-auto'>
        <div className='p-8 bg-gradient-to-r from-pink-500 to-orange-400'>

          <h1 className='text-4xl text-center font-serif text-white'>Login</h1>
          <div className="w-full mx-auto max-w-md">
            <Image
              src="/login.svg"
              alt="Login illustration"
              width={300}
              height={160}
            />
          </div>

          <form >
            <div className='flex flex-col gap-5 '>


              <label className='text-xl font-serif font-semibold text-white'>Email :</label>
              <input type="email" placeholder='example@gmail.com' className='p-3 border-2 border-white' />

              <label className='text-xl font-serif font-semibold text-white'>Password :</label>
              <input type="password" placeholder='******' className='p-3 border-2 border-white' />

              <button className='bg-blue-400 px-3 py-2 text-white hover:cursor-pointer
              font-semibold font-serif text-lg rounded-lg hover:bg-indigo-400 transition-all duration-500'>Login</button>
            </div>
          </form>

          <div className='mt-8'>
             <label className='text-xl font-semibold text-white font-serif'>Dont Have An Account? </label>
        <Link href='/signup' className="text-blue-400 font-semibold font-serif">click here</Link>
          </div>
        </div>

       
      </div>
    </div>
  )
}

export default Login