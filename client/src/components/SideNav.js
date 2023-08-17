import React from 'react'
import { Link } from 'react-router-dom'

import home from '../assets/house-door-fill.svg';
import wallet from '../assets/wallet-fill.svg';

const SideNav = ({to}) => {
  return (
    <div className='bg-navyBlue'>
      <nav className="absolute left-0 top-0 z-[1035] h-full w-60 -translate-x-full overflow-hidden bg-blueBackground shadow-md data-[te-sidenav-hidden='false']:translate-x-0">
      <ul className='relative m-0 list-none px-[0.2rem]'>
        <li className='relative'>
            <Link className='flex h-12 cursor-pointer items-center truncate rounded-md px-6 py-4 text-sm text-blackText outline-none transition duration-300 ease-linear hover:text-base hover:font-semibold hover:text-navyBlue'>
                <span className='mr-2'>
                    <img className='icon-color' src={home} alt='home' />
                </span>
                <span>Home</span>
            </Link>
        </li>
        <li className='relative'>
            <Link className='flex h-12 cursor-pointer items-center truncate rounded-md px-6 py-4 text-sm text-blackText outline-none transition duration-300 ease-linear hover:text-base hover:font-semibold hover:text-navyBlue'>
                <span className='mr-2'>
                    <img className='icon-color' src={wallet} alt='wallet' />
                </span>
                <span>Home</span>
            </Link>
        </li>
      </ul>
    </nav>
    </div>
  )
}

export default SideNav
