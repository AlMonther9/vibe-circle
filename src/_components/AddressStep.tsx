import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Inputs } from '@/lib/FormDataSchema';
import { FormField } from './FormField';

interface AddressStepProps {
  register: UseFormRegister<Inputs>;
  errors: FieldErrors<Inputs>;
}

export const AddressStep: React.FC<AddressStepProps> = ({ register, errors }) => (
  <>
    <h2 className='text-base font-semibold leading-7 text-gray-900'>Address</h2>
    <p className='mt-1 text-sm leading-6 text-gray-600'>Address where you can receive mail.</p>
    <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
      <FormField
        label='Country'
        name='country'
        type='select'
        placeholder=''
        register={register}
        error={errors.country}
        options={['United States', 'Canada', 'Mexico']}
      />
      <FormField
        label='Street address'
        name='street'
        type='text'
        placeholder='123 Main St'
        register={register}
        error={errors.street}
      />
      <FormField
        label='City'
        name='city'
        type='text'
        placeholder='Anytown'
        register={register}
        error={errors.city}
      />
      <FormField
        label='State / Province'
        name='state'
        type='text'
        placeholder='CA'
        register={register}
        error={errors.state}
      />
      <FormField
        label='ZIP / Postal code'
        name='zip'
        type='text'
        placeholder='12345'
        register={register}
        error={errors.zip}
      />
    </div>
  </>
);
