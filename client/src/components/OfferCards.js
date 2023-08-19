import React from 'react'

const OfferCards = ({ imgsrc, imgalt, cardtitle, cardtext }) => {
    return (
        <div className='bg-white max-w-sm rounded-md items-center flex flex-col overflow-hidden shadow-lg space-y-2'>
            <div className='w-full px-2 shadow-sm bg-blue-100 animate-pulse'>
                <img className='mt-3 icon-color' src={imgsrc} alt={imgalt} />
            </div>
            <div className='px-2 py-1'>
                <div className='text-navyBlue font-semibold text-xl text-start mt-2 mb-2'>{cardtitle}</div>
                <p className='text-blackText text-sm'>{cardtext}</p>
            </div>
        </div>
    )
}

export default OfferCards
