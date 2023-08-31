import React from 'react';
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserAuthContext } from "../context/UserAuthContextProvider";
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Button from '../components/Button';
import Input from '../components/Input'

const Signup = () => {
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: ""
  })
  const [error, setError] = useState('');

  const { signup } = useContext(UserAuthContext);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: value }))
    console.log(inputs);
  }

  const clearForm = () => {
    setInputs({
      firstname: "",
      lastname: "",
      email: "",
      contact: "",
      password: "",
      confirmPassword: ""
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      await signup(inputs);
      navigate("/home")
      clearForm()
    } catch (error){
      setError(error.response.data.error)
    }
    if (inputs.confirmPassword !== inputs.password) {
      setError("Passwords don't match");
      return;
    }
  }



  return (
    <div className='bg-grayBackground h-[100vh] items-center'>
      <Navbar />
      <div className='container flex flex-row mx-auto bg-white rounded-lg shadow-lg items-center pt-12 pb-12 px-20 mt-8 space-x-20 md:h-[85vh]'>
        <div className='flex flex-col space-y-4 md:w-1/2 '>
          <div className='flex flex-col'>
            <p className='text-navyBlue text-2xl font-bold pb-6'>Looking to start <span className='text-skyBlue'>your savings journey?</span></p>
            <p className='text-sm text-blackText text-start'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          </div>
          <div className='flex flex-row items-center justify-between'>
            <Link className='text-sm text-blackText hover:text-skyBlue' to='/signin'>Already have an account?</Link>
            <div className='justify-end'>
              <Button to="/signin" buttonName="Sign in" buttonStyle='bg-navyBlue w-[130px] text-semibold text-white hover:bg-white hover:text-black hover:font-bold hover:ring-1 hover:ring-navyBlue' />
            </div>
          </div>
        </div>
        <div className='justify-end flex flex-col space-y-0 md:w-1/2'>
          <form onSubmit={handleSubmit}>
            <Input index="user-signup-firstname" onChange={handleChange} inputValue={inputs.firstname} labelName='Firstname' placeHolder='Enter firstname' isRequired={true} inputName='firstname' inputStyle='w-full' inputType='text' />
            <Input index="user-signup-lastname" onChange={handleChange} inputValue={inputs.lastname} labelName='Lastname' placeHolder='Enter lastname' isRequired={true} inputName='lastname' inputStyle='w-full' inputType='text' />
            <Input index="user-signup-contact" onChange={handleChange} inputValue={inputs.contact} labelName='Contact' placeHolder='Enter contact (start with 254)' isRequired={true} inputName='contact' inputStyle='w-full' inputType='number' />
            <Input index="user-signup-email" onChange={handleChange} inputValue={inputs.email} labelName='Email' placeHolder='Enter email' isRequired={true} inputName='email' inputStyle='w-full' />
            <div className='flex flex-row space-x-3 justify-between'>
              <Input index="user-signup-password" onChange={handleChange} inputValue={inputs.password} labelName='New password' placeHolder='Enter new password' isRequired={true} inputName='password' inputStyle='w-full' inputType='password' />
              <Input index="user-signup-confirm" onChange={handleChange} inputValue={inputs.confirmPassword} labelName='Confirm password' placeHolder='Confirm your password' isRequired={true} inputName='confirmPassword' inputStyle='w-full' inputType='password' />
            </div>
            <div className='flex justify-end'>
              <Link className='text-sm text-blackText py-2 hover:text-skyBlue' to='/signin'>Already have an account?</Link>
            </div>
            <p className='text-red py-2 text-sm'>{error}</p>
            <Button to='/home' buttonName="Sign up" buttonStyle='bg-skyBlue w-full text-semibold text-white hover:bg-white hover:text-black hover:ring-1 hover:font-bold hover:ring-skyBlue' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;
