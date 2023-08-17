import React from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input'

const Signup = ({to}) => {
  return (
    <div className='bg-grayBackground h-[100vh] items-center'>
      <Navbar />
      <div className='container flex flex-row mx-auto bg-white rounded-lg shadow-lg items-center pt-12 pb-12 px-20 mt-8 space-x-20 md:h-[85vh]'>
        <div className='flex flex-col space-y-4 md:w-1/2 '>
            <div className='flex flex-col'>
                <p className='text-navyBlue text-2xl font-bold pb-6'>Looking to start<span className='text-skyBlue'>your savings journey?</span></p>
                <p className='text-sm text-blackText text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </div>
            <div className='flex flex-row items-center justify-between'>
                <Link className='text-sm text-blackText hover:text-skyBlue' to={to}>Don't have an account?</Link>
                <div className='justify-end'>
                    <Button buttonName="Sign in" buttonStyle='bg-navyBlue w-[130px] text-semibold text-white hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-navyBlue' />
                </div>
            </div>
        </div>
        <div className='justify-end flex flex-col space-y-0 md:w-1/2'>
            <form>
              <Input labelName='Firstname' placeHolder='Enter firstname' isRequired={true} name='firstname' inputStyle='w-full' inputType='text' />
              <Input labelName='Lastname' placeHolder='Enter lastname' isRequired={true} name='lastname' inputStyle='w-full' inputType='text' />
              <Input labelName='Contact' placeHolder='Enter phone number' isRequired={true} name='phone-number' inputStyle='w-full' inputType='number' />
              <Input labelName='Email' placeHolder='Enter email' isRequired={true} name='email' inputStyle='w-full' />
              <div className='flex flex-row space-x-3 justify-between'>
                <Input labelName='New password' placeHolder='Enter new password' isRequired={true} name='password' inputStyle='w-full' inputType='password' />
                <Input labelName='Confirm password' placeHolder='Confirm new password' isRequired={true} name='password' inputStyle='w-full' inputType='password' />
              </div>
              <div className='flex justify-end'>
                <Link className='text-sm text-blackText py-2 hover:text-skyBlue' to={to}>Don't have an account?</Link>
            </div>
            <Button buttonName="Save password" buttonStyle='bg-skyBlue w-full text-semibold text-white hover:bg-white hover:text-black hover:ring-1 hover:font-bold hover:ring-skyBlue' />
            </form> 
        </div>
      </div>
    </div>
  )
}

export default Signup
