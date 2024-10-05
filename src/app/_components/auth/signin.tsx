'use client';

import React, { useState } from 'react';
import Input from '@components/ui/Input';
import { IoMdClose } from 'react-icons/io';
import { z } from 'zod';
import { Hind } from 'next/font/google';

// Load Google Font
const hind = Hind({
  weight: '400',
  subsets: ['latin'],
  display: 'swap'
});

// Define Zod validation schema
const schema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z.string().min(6, { message: 'Password must be at least 6 characters long' })
});

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Form validation function
  const validate = (data: { email: string; password: string }) => {
    const result = schema.safeParse(data);
    if (!result.success) {
      throw new Error(result.error.errors[0]?.message || 'Validation error');
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      validate({ email, password });
      setError(null);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unknown error occurred');
      }
    }
  };

  return (
    <form className='text-white' onSubmit={handleSubmit} noValidate>
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
      {error && <p className='text-red-500 text-sm'>{error}</p>}
      <button
        type='submit'
        className='bg-cloudy-900 hover:bg-cloudy-950 transition-colors w-full
         text-white px-4 py-2 mt-4 rounded-lg'
      >
        Sign In
      </button>
    </form>
  );
};

// Sign-In popup component
const PopUpSignIn = ({ handleSignIn }: { handleSignIn: () => void }) => {
  return (
    <div
      className={`fixed inset-0 flex items-center justify-center backdrop-filter
         bg-cloudy-200/20 backdrop-blur-sm z-50 ${hind.className}`}
      onClick={handleSignIn}
    >
      <div
        className='bg-cloudy-700 rounded-lg p-6 items-center max-w-md w-10/12'
        onClick={(e) => e.stopPropagation()}
      >
        <div className='flex justify-between items-center mb-4'>
          <h2 className='text-2xl font-semibold text-white text-center flex-grow'>Sign In</h2>
          <button
            className='text-white p-2 hover:text-cloudy-400 hover:bg-white/10 hover:rounded-full 
            items-center transition-colors duration-75'
            onClick={handleSignIn}
          >
            <IoMdClose size={20} />
          </button>
        </div>
        {/* Sign-In form */}
        <SignInForm />
        <h3
          className='mt-4 text-center text-white hover:text-cloudy-200 
          transition-colors duration-100 cursor-pointer'
          onClick={() => alert('Password reset functionality')}
        >
          Forgot Password?
        </h3>
      </div>
    </div>
  );
};

export default PopUpSignIn;
