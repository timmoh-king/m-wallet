import React from 'react';
import Button from './Button';
import Input from './Input';

const WalletModal = ({ isOpen, onClose, title, description, targetamount, duedate, savedamount }) => {

    return isOpen ? (
      <div className="fixed inset-0 flex items-center justify-center z-50 min-w-lg">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="bg-white p-6 rounded-md z-10 w-[586px]">
          <div className="text-right">
            <Button
              buttonStyle='text-white font-medium font-sm w-[86px] bg-red rounded-md mb-2'
              onClick={onClose}
              buttonName="Close"
            />
          </div>
          <h3 className="text-xl font-semibold mb-4">Create a new goal</h3>
          <form>
            <Input index="wallet-title" inputValue={title} labelName='Title' placeHolder='Enter wallet title' isRequired={true} inputName='title' inputType='text' inputStyle='w-full' />
            <Input index="wallet-description" inputValue={description} labelName='Description' placeHolder='Enter description' isRequired={true} inputName='description' inputType='text' inputStyle='w-full' />
            <Input index="wallet-target" inputValue={targetamount} labelName='Target Amount' placeHolder='Target amount' isRequired={true} inputName='targetamount' inputType='number' inputStyle='w-full' />
            <Input index="wallet-date" inputValue={duedate} labelName='Due date' placeHolder='Enter due date' isRequired={true} inputName='duedate' inputType='number' inputStyle='w-full' />
            <Input index="wallet-saved" inputValue={savedamount} labelName='Saved amount' placeHolder='Set it to zero(0)' isRequired={true} inputName='savedamount' inputType='number' inputStyle='w-full' />
            <div className='px-2 pt-3 pb-2 mt-8'>
                <Button buttonName='create goal' buttonStyle='text-white font-medium font-sm w-[126px] bg-skyBlue rounded-md'/>
            </div>
          </form>

        </div>
      </div>
    ) : null;
}

export default WalletModal;
