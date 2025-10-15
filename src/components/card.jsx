import React from 'react'
import Online from '../assets/images/icon-online.svg'
import Budgeting from '../assets/images/icon-budgeting.svg'
import Onboarding from '../assets/images/icon-onboarding.svg'
import Openai from '../assets/images/icon-api.svg'

function card() {
  return (
    <section className='bg-gray-50  py-[5rem] text-gray-500'>
        <div className='mb-6 max-w-[1240px] mx-auto text-center md:text-left'>
            <h1 className="text-5xl md:text-5xl py-5 text-gray-600">Why choose Digitalbank?</h1>
            <p className='mb-6 max-w-md mx-auto md:mx-0'>
                We leverage Open Banking to turn your bank account into your financial hub. Control 
                your finances like never before.
            </p>
        </div>
        <div className=' mb-6 max-w-[1240px] mx-auto grid md:grid-cols-4 text-center md:text-left items-center justify-center gap-6'>
            {/* <div className=""> */}
                <div className="">
                    <img src={Online} alt="" className='mx-auto md:mx-0'/>
                    <h2 className='text-2xl text-gray-600 my-5'>Online Banking</h2>
                    <p>
                        Our modern web and mobile applications allow you to keep track of your finances 
                        wherever you are in the world.
                    </p>
                </div>
                <div className="">
                    <img src={Budgeting} alt="" className='mx-auto md:mx-0'/>
                    <h2 className='text-2xl text-gray-600 my-5'> Simple Budgeting</h2>
                    <p>
                        See exactly where your money goes each month. Receive notifications when you’re 
                        close to hitting your limits.
                    </p>
                </div>
                <div className="">
                    <img src={Onboarding} alt="" className='mx-auto md:mx-0'/>
                    <h2 className='text-2xl text-gray-600 my-5'>Fast Onboarding</h2>
                    <p>
                        We don’t do branches. Open your account in minutes online and start taking control 
                        of your finances right away.
                    </p>
                </div>
                <div className="">
                    <img src={Openai} alt="" className='mx-auto md:mx-0'/>
                    <h2 className='text-2xl text-gray-600 my-5'>Open API</h2>
                    <p>
                        Manage your savings, investments, pension, and much more from one account. Tracking 
                        your money has never been easier.
                    </p>
                </div>
            {/* </div> */}
        </div>    
    </section>
  )
}

export default card