import { Link, NavLink } from 'react-router'
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { RiMenu3Fill } from "react-icons/ri";
import { useState } from 'react';
import { HiOutlineXCircle } from "react-icons/hi2";
import { motion, AnimatePresence } from 'motion/react';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  const togglePopover = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className='fixed z-50 w-full py-5 px-3 border-b-2 md:border-none border-b-neutral-800 md:px-7 flex justify-between items-center bg-[#00000039] backdrop-blur-2xl '>
      <Link to="/" className='text-3xl font-bold text-yellow-300'>OptiJS</Link>
      <ul className='hidden md:flex items-center gap-7 font-bold text-yellow-300'>
        <NavLink className={({ isActive }) => `hover:scale-105 ease-in-out duration-200 uppercase hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/" >Home</NavLink>
        <NavLink className={({ isActive }) => `hover:scale-105 ease-in-out duration-200 uppercase hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/about" >About</NavLink>
        <NavLink className={({ isActive }) => `hover:scale-105 ease-in-out duration-200 uppercase hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/try-now" >Try it now!</NavLink>
        <NavLink className={({ isActive }) => `hover:scale-105 ease-in-out duration-200 uppercase hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/contact" >Contact</NavLink>
      </ul>
      <ul className='flex gap-2 md:gap-5 items-center'>
        <SignedOut>
          <Link to="/sign-in" className="px-3 hover:scale-105 ease-in-out duration-200 py-1.5 rounded-md bg-yellow-300 font-bold text-sm text-black">Sign In</Link>
          <Link to="/sign-up" className="px-3 hover:scale-105 ease-in-out duration-200 py-1.5 rounded-md bg-neutral-700 font-bold text-sm text-yellow-300">Sign Up</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <RiMenu3Fill onClick={togglePopover} className='sm:hidden ml-2 text-neutral-400 active:scale-80 duration-100' size={32} />
      </ul>

      <AnimatePresence>
        {
          isOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className='fixed right-0 top-0 z-50 pb-5 h-screen w-full bg-[#000]  flex flex-col '>
              <HiOutlineXCircle className='absolute right-5 mt-5 text-6xl active:scale-75 ease-linear duration-200' onClick={togglePopover} />
              <div className='h-full uppercase w-full flex flex-col gap-7 justify-center items-center text-2xl font-bold'>
                <NavLink to="/" className={({ isActive }) => ` ${isActive ? "text-white" : "text-neutral-400"}`}>Home</NavLink>
                <NavLink to="/try-now" className={({ isActive }) => ` ${isActive ? "text-white" : "text-neutral-400"}`}>Try it Now 🚀</NavLink>
                <NavLink to="/contact" className={({ isActive }) => ` ${isActive ? "text-white" : "text-neutral-400"}`}>Contact Me</NavLink>
              </div>
            </motion.div>
          )
        }
      </AnimatePresence>
    </nav>
  )
}

export default Header