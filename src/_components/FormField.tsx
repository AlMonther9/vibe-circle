import React from 'react';
import { UseFormRegister, FieldError } from 'react-hook-form';
import { Inputs } from '@/lib/FormDataSchema';

interface FormFieldProps {
  label: string;
  name: keyof Inputs;
  type: string;
  placeholder: string;
  register: UseFormRegister<Inputs>;
  error?: FieldError;
  options?: string[];
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type,
  placeholder,
  register,
  error,
  options
}) => (
  <div className='sm:col-span-3'>
    <label htmlFor={name} className='block text-sm font-medium leading-6 text-gray-900'>
      {label}
    </label>
    <div className='mt-2'>
      {type === 'select' ? (
        <select
          id={name}
          {...register(name)}
          className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:max-w-xs sm:text-sm sm:leading-6'
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          id={name}
          placeholder={placeholder}
          {...register(name)}
          className='block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6'
        />
      )}
      {error && <p className='mt-2 text-sm text-red-400'>{error.message}</p>}
    </div>
  </div>
);
