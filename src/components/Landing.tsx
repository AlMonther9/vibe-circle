'use client';
import React, { useState } from 'react';
import { MarqueeVertical } from '@/components/magicui/marqueeVertical';
import Button from '@/components/Button';
import { useSignIn } from '@/hooks/useSignIn';
import PopUpSignIn from '@/app/_components/auth/signin';
import AccountCreationPopup from '@/_components/AccountCreationPopup';

const Landing = () => {
  const { isSignInOpen, handleSignIn } = useSignIn();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  return (
    <>
      <div className='relative flex flex-col lg:flex-row items-center justify-center min-h-screen p-4 lg:p-8'>
        {/* from-skyblue-600 to-skyblue-950 text-skyblue-100 */}
        {/* Background */}
        <div className='absolute inset-0 bg-gradient-to-br from-cloudy-950 via-gray-800 to-calma-950 opacity-90 ' />
        {/* Content */}
        <div className='relative flex flex-col justify-center items-center lg:items-start space-y-8 lg:w-1/2 max-w-xl lg:pr-8'>
          <header className='text-center lg:text-left'>
            <h1 className='text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-400 to-calma-500 leading-tight'>
              VIBE-CiRCLE
            </h1>
            <p className='text-xl lg:text-2xl mt-4 text-gray-400'>Your voice. Your freedom.</p>
          </header>

          <div className='flex flex-col space-y-4 w-full sm:w-4/5'>
            <Button  onClick={() => setIsPopupOpen(true)} >Create Account</Button>
            <Button onClick={handleSignIn}>Sign In</Button>
          </div>

          <div className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 w-full sm:w-4/5'>
            <Button className='flex-1 text-sm'>Sign In With Google</Button>
            <Button className='flex-1 text-sm'>Get on Play Store</Button>
          </div>
        </div>
        <div className='hidden lg:block lg:w-1/2 mt-12 lg:mt-0 max-w-xl'>
          <div className='w-full bg-gray-900/20 backdrop-blur-md rounded-3xl p-6 lg:p-8 shadow-2xl'>
            <MarqueeVertical />
          </div>
        </div>
      </div>
      {isSignInOpen && <PopUpSignIn handleSignIn={handleSignIn} />}
      {isPopupOpen && (
        <AccountCreationPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
      )}
    </>
  );
};

export default Landing;
