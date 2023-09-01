import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Logo from './Logo'
import Button from './Button'

const Navbar =  () => {
  const navigate = useNavigate();

  return (
    <div className='bg-white max-h-[75px] shadow-none md:shadow-lg'>
       <nav className="relative container mx-auto p-6">

        <div className="flex items-center justify-between">

            <div>
                <Logo />
            </div>

            <div className="hidden space-x-6 pt-1 md:flex">
                <Link to='' className="text-blackText text-base hover:text-navyBlue hover:font-semibold">Home</Link>
                <Link to='' className="text-blackText text-base hover:text-navyBlue hover:font-semibold">About us</Link>
                <Link to='' className="text-blackText text-base hover:text-navyBlue hover:font-semibold">Blog</Link>
                <Link to='' className="text-blackText text-base hover:text-navyBlue hover:font-semibold">Partners</Link>
                <Link to='' className="text-blackText text-base hover:text-navyBlue hover:font-semibold">Contact us</Link>
            </div>

            <div className='flex flex-row space-x-3'>
                <Button onClick={() => navigate('/signin')} buttonName="Signin" buttonStyle="hidden w-[130px] p-2 px-6 text-black bg-white font-semibold baseline ring-1 ring-navyBlue hover:text-white hover:bg-navyBlue md:block " />
                <Button onClick={() => navigate('/signup')} buttonName="Register" buttonStyle="hidden w-[130px] p-2 px-6 text-white bg-navyBlue font-semibold baseline hover:ring-1 hover:ring-navyBlue hover:text-black hover:bg-white md:block " />
            </div>
            

            <button id="menu-btn" className="open block hamburger md:hidden focus:outline-none">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
        </div>

        <div className="md:hidden">
            <div id="menu"
                className="absolute hidden flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
                <Link to=''>Home</Link>
                <Link to=''>About us</Link>
                <Link to=''>Blog</Link>
                <Link to=''>Partners</Link>
                <Link to=''>Contact us</Link>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Navbar
