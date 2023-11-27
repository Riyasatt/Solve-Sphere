import React from 'react'
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    const navLink=[
        {
            value:'Home'
        },
        {
            value:'About'
        },
        {
            value:'Buy'
        },
        {
            value:'Leaderboard'
        },
        {
            value:'Find People'
        }
    ]


  return (
    <>
        <div className='w-full h-20 flex px-4 md:px-10 justify-between items-center'>
            <div className=''>
                LOGO
            </div>
            <div className=' list-none md:flex gap-x-10 hidden '>
                {navLink.map((link)=>{
                    return (
                        <li className=' cursor-pointer hover:font-semibold'>{link.value}</li>
                    )
                })}
            </div>
            <div id='nav-login' className=' md:flex hidden'>
            <button className='btn border border-accent'>
                    Sign Up
                </button>
                <button className='btn bg-accent text-white '>
                    Login
                </button>
            </div>
            <div className='md:hidden '>
                <div className=' text-lg cursor-pointer'>
                <FaBars/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar