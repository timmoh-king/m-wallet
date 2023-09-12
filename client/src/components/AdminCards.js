import React, { useState } from 'react';
import Button from './Button'
import WalletModal from './WalletModal'

const AdminCards = ({ imgsrc, imgalt, cardtitle, cardtext, goalId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleNewWallet = () => {
    // Open the modal and pass the goalId
    openModal();
  };

  return (
    <div className='bg-gray-100 max-w-sm rounded-md overflow-hidden shadow-lg'>
      <div className='text-navyBlue font-semibold text-base mt-2 px-2'>{cardtitle}</div>
      <div className=''>
        <img className='w-full max-h-[164px] px-2 pt-2 rounded-[12px]' src={imgsrc} alt={imgalt} />
      </div>
      <div className='px-3 mt-[-80px]'>
        <p className='text-white font-medium text-sm hover:animate-bounce'>{cardtext}</p>
      </div>
      <div className='px-2 pt-3 pb-2 mt-8'>
        <Button onClick={handleNewWallet} buttonName='create goal' buttonStyle='text-white font-medium font-sm w-[126px] bg-skyBlue rounded-md'/>
      </div>

      <WalletModal
        isOpen={isModalOpen}
        onClose={closeModal}
        goalId={goalId}
      />
    </div>
  )
}

export default AdminCards
