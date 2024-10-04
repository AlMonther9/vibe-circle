'use client';
import { Hind } from 'next/font/google';

const hind = Hind({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});
import React from 'react';
import Input from '@components/ui/Input';
import { useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const PopUpSignIn = ({ handleSignIn }: { handleSignIn: () => void }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-blur-sm
      backdrop-filter backdrop-brightness-50 bg-black/20 z-50 ${hind.className}`}
      onClick={handleSignIn}
    >
      <div className='bg-cloudy-400 rounded-lg p-6 items-center max-w-md w-10/12'>
        <div
          className='flex justify-between items-center mb-4'
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className='text-2xl font-semibold text-white text-center flex-grow'>Sign In</h2>
          <button
            className='text-white p-2 hover:text-sky-400
             hover:bg-white/10 hover:rounded-full items-center transition-colors duration-75'
            onClick={handleSignIn}
          >
            <IoMdClose size={20} />
          </button>
        </div>
        {/* Sign-In form */}
        <div onClick={(e) => e.stopPropagation()}>
          <SignInForm />
          <h3
            className='mt-4 text-center text-white hover:text-cloudy-700 transition-colors 
            duration-100 cursor-pointer'
          >
            Forget Password?
          </h3>
        </div>
      </div>
    </div>
  );
};

export default PopUpSignIn;

// Sign-In form
const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form className='text-white'>
      <Input
        label='Email'
        type='email'
        placeholder='Enter your email'
        value={email}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
      />
      <Input
        label='Password'
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
      />
      <button
        className='bg-cloudy-800 hover:bg-cloudy-950 transition-colors
       w-full text-white px-4 py-2 mt-4 rounded-lg'
      >
        Sign In
      </button>
    </form>
  );
};
