import React from 'react';
interface IButtonProps {
  children: React.ReactNode;
  primary?: boolean;
  className?: string;
  [key: string]: any;
}

const Button: React.FC<IButtonProps> = ({ children, primary, className, ...props }) => (
  <button
    className={`py-3 px-6 rounded-full text-lg font-semibold transition-all ${
      primary
        ? 'bg-gradient-to-r from-skyblue-500 to-skyblue-700 text-white hover:from-skyblue-600 hover:to-skyblue-800'
        : 'bg-skyblue-800 text-white hover:bg-skyblue-700'
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

export default Button;
