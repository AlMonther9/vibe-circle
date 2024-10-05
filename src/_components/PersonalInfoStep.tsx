import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Inputs } from '@/lib/FormDataSchema';
import { FormField } from './FormField';

interface PersonalInfoStepProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const PersonalInfoStep: React.FC<PersonalInfoStepProps> = ({ register, errors }) => (
  <>
    <h2 className='text-base font-semibold leading-7 text-gray-900'>Personal Information</h2>
    <p className='mt-1 text-sm leading-6 text-gray-600'>Provide your personal details.</p>
    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
      <FormField
        label='First name'
        name='firstName'
        type='text'
        placeholder='John'
        register={register}
        error={errors.firstName}
      />
      <FormField
        label='Last name'
        name='lastName'
        type='text'
        placeholder='Doe'
        register={register}
        error={errors.lastName}
      />
      <FormField
        label='Email address'
        name='email'
        type='email'
        placeholder='john.doe@example.com'
        register={register}
        error={errors.email}
      />
      <FormField
        label='Date of Birth'
        name='dob'
        type='date'
        placeholder=''
        register={register}
        error={errors.dob}
      />
      <FormField
        label='Phone Number'
        name='phone'
        type='tel'
        placeholder='+1 1234567890'
        register={register}
        error={errors.phone}
      />
      <FormField
        label='Password'
        name='password'
        type='password'
        placeholder='********'
        register={register}
        error={errors.password}
      />
    </div>
  </>
);
