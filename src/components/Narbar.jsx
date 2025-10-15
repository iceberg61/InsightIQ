import React from 'react'
import Logo from '../assets/images/logo-dark.svg'
import Hamburger from '../assets/images/icon-hamburger.svg'


function Narbar() {
  return (
    <div className='bg-white'>
        <div className="flex  text-gray-400 justify-between items-center h-24  max-w-[1240px] mx-auto px-4 relative z-10">
          <a href="/">
            <img src={Logo} alt="/" />
          </a>
            <div className='md:block hidden'>
                <ul className='flex  justify-center content-center gap-6 '>
                    <li className='hover:underline decoration-cyan-400 decoration-2 underline-offset-[2.5rem]'>Home</li>
                    <li className='hover:underline decoration-cyan-400 decoration-2 underline-offset-[2.5rem]'>About</li>
                    <li className='hover:underline decoration-cyan-400 decoration-2 underline-offset-[2.5rem]'>Contact</li> 
                    <li className='hover:underline decoration-cyan-400 decoration-2 underline-offset-[2.5rem]'>Blog</li>
                    <li className='hover:underline decoration-cyan-400 decoration-2 underline-offset-[2.5rem]'>Careers</li>
                </ul>  
            </div>
            <button
               className='md:block hidden bg-linear-to-r from-cyan-400 to-green-500  px-8 py-3  text-white rounded-[50px] hover:opacity-50 hover:scale-105 transition-transform duration-200'>Request Invite
            </button>
            <img src={Hamburger} alt="/" className='block md:hidden'/>
        </div>
    </div>
  )
}

export default Narbar

  
  
  
  
  

   