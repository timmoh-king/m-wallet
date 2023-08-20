import React from 'react'
import Button from './Button'

const AdminCards = ({imgsrc, imgalt, cardtitle, cardtext}) => {
  return (
    <div className='bg-gray-100 max-w-sm rounded-md overflow-hidden shadow-lg'>
      <div className='text-navyBlue font-semibold text-base mt-2 px-2'>{cardtitle}</div>
      <div className=''>
        <img className='w-full max-h-[164px] px-2 pt-2 rounded-[12px]' src={imgsrc} alt={imgalt} />
      </div>
      <div className='px-3 mt-[-80px]'>
        <p className='text-white font-medium text-sm hover:animate-bounce'>{cardtext}</p>
      </div>
      <div className='px-2 pt-3 pb-2'>
        <Button buttonName='create goal' buttonStyle='text-white font-medium font-sm w-[126px] bg-skyBlue rounded-md'/>
      </div>
    </div>
  )
}

export default AdminCards
