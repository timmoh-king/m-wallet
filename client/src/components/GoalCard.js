import React from 'react';
import Button from './Button';
import Input from './Input';

const GoalCard = ({ goaltitle, date, targetAmt, savedAmt }) => {
  return (
    <div className='bg-white max-w-sm rounded-md overflow-hidden shadow-lg'>
      <div className='flex flex-col items-center px-2 space-y-1'>
        <div className='flex flex-col items-center space-y-2 mt-2 mb-2'>
            <div className='w-full text-start'>
                <p className='text-navyBlue font-semibold text-base mt-2 px-2'>{goaltitle}</p>
            </div>
            <p className='text-blackText text-sm px-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        </div>
        <div className='flex flex-row items-center justify-between w-full px-2'>
            <p className='text-black font-semibold text-[13px] mt-2'>Due date:</p>
            <p className='text-black font-semibold text-[13px] mt-2'>{date}</p>
        </div>
        <div className='flex flex-row items-center justify-between w-full px-2'>
            <p className='text-black font-semibold text-[13px] mt-2'>Target amt:</p>
            <p className='text-black font-semibold text-[13px] mt-2'>Ksh.{targetAmt}</p>
        </div>
        <div className='flex flex-row items-center justify-between w-full px-2'>
            <p className='text-black font-semibold text-[13px] mt-2'>Saved amt:</p>
            <p className='text-black font-semibold text-[13px] mt-2'>Ksh.{savedAmt}</p>
        </div>
        <div className='w-full py-2 px-2'>
            <Input labelName='save' placeHolder='Enter amount' inputName='savedamt' inputValue='savedamt' inputType='number' inputStyle='w-full bg-gray-100' />
        </div>
        <div className='py-2 px-2 w-full'>
            <Button buttonName='Save' buttonStyle='text-white font-medium w-full font-sm bg-green rounded-md'/>
        </div>
      </div>
    </div>
  )
}

export default GoalCard
