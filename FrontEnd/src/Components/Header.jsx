import React from 'react'

const Header = () => {
  return (
    <div className='py-4 px-10 flex justify-between items-center'>
        <h2 className='uppercase text-3xl font-bold text-yellow-300'>Codher</h2>
        <ul className='flex gap-7 font-bold uppercase text-yellow-300'>
            <li>Home</li>
            <li>About</li>
            <li>Try Now!</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header