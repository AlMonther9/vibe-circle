import React from 'react';

interface InputProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, placeholder, value, onChange }) => {
  return (
    <div className='flex flex-col mb-4'>
      <label className='text-sm font-semibold mb-1'>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className='p-2 border bg-inherit border-inherit rounded-lg outline-none
         focus:border-blues-700 focus:border-2'
      />
    </div>
  );
};

export default Input;
