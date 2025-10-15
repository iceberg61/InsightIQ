import React from 'react'
import Currency from '../assets/images/image-currency.jpg'
import Restaurant from '../assets/images/image-restaurant.jpg'
import Plane from '../assets/images/image-plane.jpg'
import Confetti from '../assets/images/image-confetti.jpg'

function Artcles() {
  return (
    <section className="bg-white max-w-[1240px] mx-auto text-center md:text-left">
        <h1 className="mb-8 text-5xl md:text-5xl py-5 text-gray-600">Latest Articles</h1>
        <div className='text-gray-600 grid md:grid-cols-4 text-center md:text-left items-center justify-center gap-6 px-4'>
            <div>
                <div className=''>
                    <img src={Currency} alt="" className='w-[95%] object-contain' />
                </div>
                <div className=''>
                    <p className='py-5'>By Claire Robinson</p>
                    <h2 className='text-2xl text-gray-800 my-5 hover:text-green-500 cursor-pointer'>Receive money in any currency with no fees</h2>
                    <p>
                        The world is getting smaller and we’re becoming more mobile. So why should you be 
                        forced to only receive money in a single …
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src={Restaurant} alt="" />
                </div>
                <div className=''>
                    <p className='py-5'>By Wilson Hutton</p>
                    <h2 className='text-2xl text-gray-800 my-5 hover:text-green-500 cursor-pointer'>Treat yourself without worrying about money</h2>
                    <p>
                        Our simple budgeting feature allows you to separate out your spending and set 
                        realistic limits each month. That means you …
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src={Plane} alt="" />
                </div>
                <div>
                    <p className='py-5'>By Wilson Hutton</p>
                    <h2 className='text-2xl text-gray-800 my-5 hover:text-green-500 cursor-pointer'>Take your Digitalbank card wherever you go</h2>
                    <p>
                        We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
                        while you’re abroad. We’ll even show you …
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img src={Confetti} alt="" />
                </div>
                <div>
                    <p className='py-5'>By Claire Robinson</p>
                    <h2 className='text-2xl text-gray-800 my-5 hover:text-green-500 cursor-pointer'>Our invite-only Beta accounts are now live!</h2>
                    <p>
                        After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
                        It’s easy to request an invite through the site ...
                    </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Artcles