'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';
import { FormDataSchema, Inputs } from '@/lib/FormDataSchema';
import { PersonalInfoStep } from './PersonalInfoStep';
import { AddressStep } from './AddressStep';
import { Navigation } from './Navigation';

const steps = [
  {
    id: 'Step 1',
    name: 'Personal Information',
    fields: ['firstName', 'lastName', 'email', 'dob', 'phone', 'password']
  },
  {
    id: 'Step 2',
    name: 'Address',
    fields: ['country', 'street', 'city', 'state', 'zip']
  },
  { id: 'Step 3', name: 'Complete', fields: [] }
];

interface AccountCreationPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AccountCreationPopup({ isOpen, onClose }: AccountCreationPopupProps) {
  const [previousStep, setPreviousStep] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const delta = currentStep - previousStep;

  const {
    register,
    handleSubmit,
    reset,
    trigger,
    formState: { errors }
  } = useForm<Inputs>({
    resolver: zodResolver(FormDataSchema)
  });

  const processForm: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };

  const next = async () => {
    const fields = steps[currentStep]?.fields as (keyof Inputs)[] | undefined;
    const output = await trigger(fields, { shouldFocus: true });

    if (!output) return;

    if (currentStep < steps.length - 1) {
      if (currentStep === steps.length - 2) {
        await handleSubmit(processForm)();
      }
      setPreviousStep(currentStep);
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setPreviousStep(currentStep);
      setCurrentStep((step) => step - 1);
    }
  };

  if (!isOpen) return null;

  return (
    <section className='absolute inset-0 flex flex-col justify-between p-24'>
      <div className='bg-white rounded-lg shadow-lg p-8 w-1/2 max-h-screen place-self-center'>
        {/* steps */}
        <nav aria-label='Progress'>
          <ol role='list' className='space-y-4 md:flex md:space-x-8 md:space-y-0'>
            {steps.map((step, index) => (
              <li key={step.name} className='md:flex-1'>
                {currentStep > index ? (
                  <div className='group flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                    <span className='text-sm font-medium text-sky-600 transition-colors '>
                      {step.id}
                    </span>
                    <span className='text-sm font-medium'>{step.name}</span>
                  </div>
                ) : currentStep === index ? (
                  <div
                    className='flex w-full flex-col border-l-4 border-sky-600 py-2 pl-4 md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'
                    aria-current='step'
                  >
                    <span className='text-sm font-medium text-sky-600'>{step.id}</span>
                    <span className='text-sm font-medium'>{step.name}</span>
                  </div>
                ) : (
                  <div className='group flex w-full flex-col border-l-4 border-gray-200 py-2 pl-4 transition-colors md:border-l-0 md:border-t-4 md:pb-0 md:pl-0 md:pt-4'>
                    <span className='text-sm font-medium text-gray-500 transition-colors'>
                      {step.id}
                    </span>
                    <span className='text-sm font-medium'>{step.name}</span>
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>

        {/* Form */}
        <form className='max-h-screen' onSubmit={handleSubmit(processForm)}>
          <motion.div
            initial={{ x: delta >= 0 ? '50%' : '-50%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {currentStep === 0 && <PersonalInfoStep register={register} errors={errors} />}
            {currentStep === 1 && <AddressStep register={register} errors={errors} />}
            {currentStep === 2 && (
              <>
                <h2 className='text-base font-semibold leading-7 text-gray-900'>Complete</h2>
                <p className='mt-1 text-sm leading-6 text-gray-600'>
                  Thank you for your submission.
                </p>
              </>
            )}
          </motion.div>
        </form>

        {/* Navigation */}
        <Navigation
          currentStep={currentStep}
          totalSteps={steps.length}
          onPrev={prev}
          onNext={() => {
            if (currentStep === steps.length - 1) {
              onClose();
            } else {
              next();
            }
          }}
        />
      </div>
    </section>
  );
}
