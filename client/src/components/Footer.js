import React from 'react';
import { Link } from 'react-router-dom';

import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import linkedin from "../assets/linkedin.svg";

const Footer = ({to}) => {
  return (
    <footer className='bg-white'>
      <div className='container flex flex-col-reverse justify-between items-center px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0'>
        <div className='flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start'>
          <div>
            <p className='text-navyBlue text-2xl font-bold'>M<span className='text-skyBlue'>-Wallet</span></p>
          </div>
          <div className='flex flex-row justify-between py-2 mx-auto'>
            <img className='icon-color' src={facebook} alt='facebook' />
            <img className='icon-color' src={instagram} alt='instagram' />
            <img className='icon-color' src={twitter} alt='twitter' />
            <img className='icon-color' src={linkedin} alt='linkedin' />
          </div>
        </div>

        <div className='flex flex-col-reverse space-x-24 md:px-4 md:flex-row'>
          <div className='flex flex-col space-y-3 text-blackText'>
            <Link className='text-black text-lg font-semibold'>Credit</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Home</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Pricing</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Products</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">About</Link>
          </div>
          <div className='flex flex-col space-y-3 text-blackText'>
            <Link className='text-black text-lg font-semibold'>Partners</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Safaricom PLC</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Absa Bank</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">KCB Bank</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Mkopa Cash</Link>
          </div>
          <div className='flex flex-col space-y-3 text-blackText'>
            <Link className='text-black text-lg font-semibold'>Invest</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Careers</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Community</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Privacy</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Policy</Link>
          </div>
          <div className='flex flex-col space-y-3 text-blackText'>
            <Link className='text-black text-lg font-semibold'>Location</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">+254 718543357</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">mwallet@info.co.ke</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Ngong, Nairobi</Link>
            <Link to={to} className="text-sm hover:text-skyBlue">Kenya</Link>
          </div>
        </div>

        <div className="flex flex-col justify-between space-y-3">
                <form>
                    <div className="flex space-x-3">
                        <input type="text" className="text-smflex-1 px-1 rounded-md focus:outline-skyBlue"
                            placeholder="Updated in your inbox" />
                        <button
                            className="px-6 py-2 text-white rounded-md bg-navyBlue hover:bg-white hover:ring-1 hover:ring-navyBlue hover:text-black focus:outline-none">
                            Get Started
                        </button>
                    </div>
                </form>
                <div className="hidden text-blackText text-sm md:block">
                    Copyright &copy; 2023, All Rights Reserved
                </div>
            </div>
      </div>
    </footer>
  )
}

export default Footer
