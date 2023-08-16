import React from 'react'
import Input from './components/Input';
import Button from './components/Button';

function App() {
  return (
    <div className='ml-7'>
      Welcome to M-Wallet
      <br />
      <Input labelName="Email" placeHolder="Enter email address" inputStyle="w-[983px]" />
      <Button buttonName="Get started" buttonStyle="text-white bg-navyBlue w-[120px] hover:bg-white" />
    </div>
  );
}

export default App;
