import React from 'react'
import MobileBackground from '../assets/images/bg-intro-mobile.svg'
import Mockup from '../assets/images/image-mockups.png'
import DesktopBackround from '../assets/images/bg-intro-desktop.svg'

function Hero() {
  return (
   <section className='relative overflow-hidden bg-white'>
        <div className='max-w-[1240px] mx-auto flex flex-col-reverse md:flex-row items-center md:justify-between'>
            {/* Text Area */}
            <div className='text-center md:text-left md:w-1/2  z-10'>
                <h1 className='text-5xl md:text-7xl fontlight leading-tight mb-4 text-gray-600'>
                    Next generation digital banking
                </h1>
                <p className='text-gray-500 mb-6 max-w-md mx-auto md:mx-0'>
                    Take your financial life online. Your Digitalbank account will be a
                    one-stop-shop for spending, saving, budgeting, investing, and much
                    more.
                </p>
                <button 
                    className='bg-gradient-to-r from-cyan-400 to-green-500 px-8 py-3 text-white rounded-full hover:opacity-80 transition-opacity'>
                    Request Invite
                </button>
            </div>
            {/* Image Area */}
            <div className='relative md:w-1/2 flex justify-center md:justify-end overflow-hidden'>
                <img 
                    src={MobileBackground} 
                    className='md:hidden absolute top-[-12rem] left-0 w-full object-cover'/>
                <img 
                    src={DesktopBackround} 
                    className='hidden md:block absolute top-[-8rem] right-[-10rem] w-[80%]'/>
                <img 
                    src={Mockup} 
                    className='relative z-10 w-[80%] top-[-13rem] md:w-[60%]  md:absolute md:top-[-5rem] md:right-[-6rem]'/>
            </div>
        </div>
   </section>
  )
}

export default Hero