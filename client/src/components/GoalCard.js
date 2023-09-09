import React from 'react';
import axios from 'axios';
import Button from './Button';
import Input from './Input';
import { useState } from "react";

const GoalCard = ({ goaltitle, date, targetAmt, savedAmt, walletId }) => {
  const [amount, setAmount] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    // eslint-disable-next-line
    const { name, value } = e.target;
    setAmount(value);
}

  const clearForm = () => {
    setAmount('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userJSONString = localStorage.getItem('user');
      const userObject = JSON.parse(userJSONString);
      const token = userObject.token;
      const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };
      await axios.get("http://localhost:3005/api/stk/", config);
      console.log(walletId)
      const response = await axios.put(`http://localhost:3005/api/get_wallets/${walletId}`, { savedamount: amount }, config);
      setAmount(response.data.savedamount);
      clearForm()
    } catch (error) {
      setError(error.response.data.error)
    }
  }

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
          <form onSubmit={handleSubmit}>
            <Input index="input-amount" labelName='save' onChange={handleChange} placeHolder='Enter amount' inputName='savedamount' inputValue={amount} inputType='number' inputStyle='w-full bg-gray-100' />
            <p className='text-red py-2 text-sm'>{error}</p>
            <div className='py-2 w-full'>
                <Button onClick={(e) => handleSubmit(e, walletId)} buttonName='Save' buttonStyle='text-white font-medium w-full font-sm bg-green rounded-md'/>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default GoalCard
