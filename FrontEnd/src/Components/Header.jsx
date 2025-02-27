import React from 'react'
import { Link, NavLink } from 'react-router'

const Header = () => {
  return (
    <nav className='fixed z-50 w-full py-4 px-10 flex justify-between items-center bg-[#00000039] backdrop-blur-2xl '>
        <Link to="/" className='text-3xl font-bold text-yellow-300'>OptiJS</Link>
        <ul className='flex gap-7 font-bold uppercase text-yellow-300'>
            <NavLink className={({isActive})=>`hover:scale-105 ease-in-out duration-200 hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/" >Home</NavLink>
            <NavLink className={({isActive})=>`hover:scale-105 ease-in-out duration-200 hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/about" >About</NavLink>
            <NavLink className={({isActive})=>`hover:scale-105 ease-in-out duration-200 hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/try-now" >Try Now!</NavLink>
            <NavLink className={({isActive})=>`hover:scale-105 ease-in-out duration-200 hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/contact" >Contact</NavLink>
        </ul>
    </nav>
  )
}

export default Header