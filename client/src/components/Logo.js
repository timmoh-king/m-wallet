import React from 'react'
import { Link } from 'react-router-dom'

const Logo = ({ toLink }) => {
  return (
    <Link to={ toLink ? toLink : '/'}>
      <p className='text-navyBlue text-2xl font-bold'>M<span className='text-skyBlue'>-Wallet</span></p>
    </Link>
  )
}

export default Logo
