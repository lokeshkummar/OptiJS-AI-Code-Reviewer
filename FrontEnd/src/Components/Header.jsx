import { Link, NavLink } from 'react-router'
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";

const Header = () => {
  return (
    <nav className='fixed z-50 w-full py-5 px-3 border-b-2 md:border-none border-b-neutral-800 md:px-7 flex justify-between items-center bg-[#00000039] backdrop-blur-2xl '>
      <Link to="/" className='text-3xl font-bold text-yellow-300'>OptiJS</Link>
      <ul className='hidden md:flex items-center gap-7 font-bold text-yellow-300'>
        <NavLink className={({ isActive }) => `hover:scale-105 ease-in-out duration-200 uppercase hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/" >Home</NavLink>
        <NavLink className={({ isActive }) => `hover:scale-105 ease-in-out duration-200 uppercase hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/about" >About</NavLink>
        <NavLink className={({ isActive }) => `hover:scale-105 ease-in-out duration-200 uppercase hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/try-now" >Try it now!</NavLink>
        <NavLink className={({ isActive }) => `hover:scale-105 ease-in-out duration-200 uppercase hover:text-yellow-300 ${isActive ? "text-yellow" : "text-white"}`} to="/contact" >Contact</NavLink>
      </ul>
      <ul className='flex gap-2 md:gap-5'>
        <SignedOut>
          <Link to="/sign-in" className="px-3 hover:scale-105 ease-in-out duration-200 py-1.5 rounded-md bg-yellow-300 font-bold text-sm text-black">Sign In</Link>
          <Link to="/sign-up" className="px-3 hover:scale-105 ease-in-out duration-200 py-1.5 rounded-md bg-neutral-700 font-bold text-sm text-yellow-300">Sign Up</Link>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </ul>

    </nav>
  )
}

export default Header