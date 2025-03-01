import { Link } from 'react-router'

const Footer = () => {
  return (
    <p className='absolute z-20 w-full text-center py-5 font-bold'>Made by <Link to="https://lokeshkummar.vercel.app" className='font-normal hover:underline hover:text-amber-200 hover:text-lg ease-in-out duration-200'>this guy❤️</Link></p>
  )
}

export default Footer