import React from 'react'
import Button from './Button'

const AdminCards = ({imgsrc, imgalt, cardtitle, cardtext}) => {
  return (
    <div className='max-w-sm rounded-md overflow-hidden shadow-lg'>
      <img className='w-full px-2 pt-2 rounded-md' src={imgsrc} alt={imgalt} />
      <div className='px-2 py-4'>
        <div className='text-navyBlue font-semibold text-xl mb-2'>{cardtitle}</div>
        <p className='text-blackText text-sm'>{cardtext}</p>
      </div>
      <div className='px-2 pt-1 pb-3'>
        <Button buttonName='create goal' buttonStyle='text-white font-semibold w-[130px] bg-skyBlue rounded-md'/>
      </div>
    </div>
  )
}

export default AdminCards
