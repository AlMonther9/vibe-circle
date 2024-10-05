'use client';
import React, { useState } from 'react';
import AccountCreationPopup from '@/_components/AccountCreationPopup';

const LandingPage: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className='bg-skyblue-50 min-h-screen flex flex-col justify-center items-center'>
      <h1 className='text-4xl font-bold text-skyblue-800 mb-8'>Welcome to Our Service</h1>
      <button
        onClick={() => setIsPopupOpen(true)}
        className='px-6 py-3 bg-skyblue-600 text-white rounded-lg hover:bg-skyblue-700 transition-colors'
      >
        Create Account
      </button>
      {isPopupOpen && (
        <AccountCreationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      )}
    </div>
  );
};

export default LandingPage;
