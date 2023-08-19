import React from 'react'

const TestimonialCard = ({ imgsrc, imgalt, cardtitle, cardtext }) => {
    return (
        <div className='bg-white max-w-sm min-h-[360px] rounded-md items-center flex flex-col overflow-hidden shadow-lg'>
            <div className='flex flex-row mt-4 items-center justify-between'>
                <img className='w-[75px] h-[75px] px-2 py-2 rounded-full items-center' src={imgsrc} alt={imgalt} />
            </div>
            <div className='px-2 py-4'>
                <div className='text-navyBlue font-semibold text-xl text-center mb-8 mt-6'>{cardtitle}</div>
                <p className='text-blackText text-sm'>{cardtext}</p>
            </div>
        </div>
    )
}

export default TestimonialCard
