"use client";

import Link from 'next/link'
import React, { useState } from 'react'
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FaWindowClose } from "react-icons/fa";

import { usePathname } from 'next/navigation';
const Layout = ({ children }) => {
    const pathName = usePathname()

    const blackList = [
        '/login',
        '/signup'
    ]

    if(blackList.includes(pathName))
    {
        return(
            <>
                {children}
            </>
        )
    }
    const menus = [
        {
            label: 'Home',
            link: '/'
        },
        {
            label: 'Products',
            link: '/products'
        },
        {
            label: 'Carts',
            link: '/carts'
        },

    ]

    const social = [
        {
            label: 'linkedIn',
            link: 'https://www.linkedin.com/in/gururaj-krishna-sharma-bb0a70322/',
            icon: <FaLinkedin />
        },
        {
            label: 'Instagram',
            link: 'https://www.instagram.com/guru_117d_luffy/',
            icon: <FaInstagramSquare />
        },
        {
            label: 'Twitter',
            link: '/',
            icon: <FaSquareXTwitter />
        },
        {
            label: 'Youtube',
            link: '/',
            icon: <FaYoutube />
        }
    ]

    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            <nav className="bg-indigo-600 p-7 flex justify-between items-center">
                <h1 className="text-white text-2xl font-semibold font-serif">Commerce</h1>

                {/* Desktop Menu */}
                <div className="hidden md:flex flex-row gap-8 items-center">
                    {menus.map((items, index) => (
                        <Link href={items.link} key={index}>
                            <ul>
                                <li className="text-white text-xl font-semibold font-serif">
                                    {items.label}
                                </li>
                            </ul>
                        </Link>
                    ))}
                    <Link
                        href="/login"
                        className="text-white font-semibold text-xl font-serif 
          bg-rose-500 hover:bg-red-400 transition-all duration-300 px-3 py-2 shadow-lg rounded-[10px]"
                    >
                        Login
                    </Link>
                    <Link
                        href="/signup"
                        className="text-white font-semibold text-xl font-serif 
          bg-orange-500 hover:bg-amber-500 transition-all duration-500 px-3 py-2 shadow-lg rounded-[10px]"
                    >
                        SignUp
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden block bg-white text-xl p-1"
                >
                    <MdOutlineMenuOpen />
                </button>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="absolute top-20 left-0 w-full bg-indigo-700 flex flex-col items-center gap-4 py-4 md:hidden">
                        {menus.map((items, index) => (
                            <Link href={items.link} key={index}>
                                <p className="text-white text-xl font-semibold font-serif">
                                    {items.label}
                                </p>
                            </Link>
                        ))}
                        <Link
                            href="/login"
                            className="text-white font-semibold text-xl font-serif 
            bg-rose-500 hover:bg-red-400 transition-all duration-300 px-3 py-2 shadow-lg rounded-[10px]"
                        >
                            Login
                        </Link>
                        <Link
                            href="/signup"
                            className="text-white font-semibold text-xl font-serif 
            bg-orange-500 hover:bg-amber-500 transition-all duration-500 px-3 py-2 shadow-lg rounded-[10px]"
                        >
                            SignUp
                        </Link>
                    </div>
                )}
            </nav>
            <div className='p-16'>{children}</div>

            <footer className='bg-purple-950 p-10 space-x-2 grid md:grid-cols-4 md:gap-0 gap-16'>
                <div className='space-y-3'>
                    <h1 className='text-4xl text-white font-bold font-serif'>Commerce</h1>
                    <p className='text-gray-300'> Perferendis enim dolore deleniti repellendus voluptas laudantium debitis reiciendis facere perspiciatis provident, facilis incidunt delectus dolorem quae voluptatem recusandae natus atque nihil.</p>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-white font-bold text-4xl font-serif'>Usefull Links</h1>
                    <div className='flex flex-col gap-5'>
                        {
                            menus.map((items, index) => {
                                return (
                                    <Link href={items.link} key={index} >
                                        <ul >
                                            <li className='text-gray-300 text-xl'>{items.label}</li>
                                        </ul>
                                    </Link>
                                )
                            })
                        }
                        <Link href='/login' className='text-gray-300 text-xl'>Login</Link>

                        <Link href='/signup' className='text-gray-300 text-xl'>SignUp</Link>

                    </div>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-white text-4xl font-bold font-serif'>Social Media</h1>
                    <div className='flex flex-col gap-5'>
                        {
                            social.map((items, index) => {
                                return (
                                    <Link key={index} href={items.link}>
                                        <div className='flex items-center gap-2'>
                                            <h1 className='text-gray-300 text-xl '>{items.icon}</h1>
                                            <h1 className='text-gray-300 text-xl '>{items.label}</h1>
                                        </div>
                                    </Link>
                                )

                            })
                        }
                    </div>
                </div>

                <div className='space-y-5'>
                    <h1 className='text-4xl text-white font-bold font-serif'>Contact Us</h1>
                    <form className='flex flex-col gap-5'>
                        <input type="text"
                            name='fullname'
                            required
                            placeholder='Enter Your Fullname'
                            className='bg-white p-2 rounded-lg shadow-lg ' />

                        <input type="email"
                            required
                            name='email'
                            placeholder='example@gmail.com'
                            className='bg-white p-2 rounded-lg shadow-lg ' />

                        <textarea name="message" rows={3} placeholder='Enter Your Query' className='bg-white p-2 rounded-lg shadow-lg '></textarea>

                        <button className='px-3 py-2 bg-blue-400 rounded-lg text-white font-semibold font-serif'>Submit</button>
                    </form>
                </div>
            </footer>
        </div>

    )
}

export default Layout