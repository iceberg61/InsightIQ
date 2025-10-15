import React from 'react'
import Logo from '../assets/images/logo-light.svg'
import Facebook from '../assets/images/icon-facebook.svg'
import Youtube from '../assets/images/icon-youtube.svg'
import Twitter from '../assets/images/icon-twitter.svg'
import Pinterest from '../assets/images/icon-pinterest.svg'
import Instagram from '../assets/images/icon-instagram.svg'

function Footer() {
  return (
    <footer className='bg-blue-950 text-gray-300'> 
        <div className="max-w-[1240px] mx-auto mt-[5rem] py-14 grid md:grid-cols-[200px_1fr_auto] md:gap-[7rem] gap-3.5 text-center md:text-left">
            <div className="flex flex-col justify-center items-center">
                <a href="/">
                    <img src={Logo} alt="/" />
                </a>
                <div className='flex items-center justify-between mt-9 gap-6'>
                    <a href="/">
                        <img src={Facebook} alt="/" />
                    </a>
                    <a href="/">
                        <img src={Youtube} alt="/" />
                    </a>
                    <a href="/">
                        <img src={Twitter} alt="/" />
                    </a>
                    <a href="/">
                        <img src={Pinterest} alt="/" />
                    </a>
                    <a href="/">
                        <img src={Instagram} alt="/" />
                    </a>
                </div>
            </div>
            <div className="">
                <div className="grid md:grid-cols-2">
                    <ul>
                        <li className='my-1.5 hover:text-green-500'>About Us</li>
                        <li className='my-1.5 hover:text-green-500'>Contact</li>
                        <li className='my-1.5 hover:text-green-500'>Blog</li>
                    </ul>
                    <ul>
                        <li className='my-1.5 hover:text-green-500'>Careers</li>
                        <li className='my-1.5 hover:text-green-500'>Support</li>
                        <li className='my-1.5 hover:text-green-500'>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="">
                <button 
                    className='bg-gradient-to-r from-cyan-400 to-green-500 px-8 py-3 my-3 text-white rounded-full hover:opacity-80 hover:scale-105 transition-transform duration-200'>
                    Request Invite
                </button>
                <p>© Digitalbank. All Rights Reserved</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer