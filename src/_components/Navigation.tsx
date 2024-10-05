import React from 'react';

interface NavigationProps {
  currentStep: number;
  totalSteps: number;
  onPrev: () => void;
  onNext: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentStep,
  totalSteps,
  onPrev,
  onNext
}) => (
  <div className='mt-8 pt-5'>
    <div className='flex justify-between'>
      <button
        type='button'
        onClick={onPrev}
        disabled={currentStep === 0}
        className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
        </svg>
      </button>
      <button
        type='button'
        onClick={onNext}
        className='rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
      </button>
    </div>
  </div>
);
