import React from 'react';
import clsx from 'clsx';

interface Step {
  label: string;
  isActive: boolean;
  isCompleted: boolean;
}

interface StepperProps {
  steps: Step[];
  currentStep: number;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep }) => {
  return (
    <div className="w-full flex justify-between">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <div className={clsx(
            'flex items-center justify-center rounded-full h-10 w-10 border-2',
            step.isCompleted ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300',
            step.isActive && 'border-indigo-500'
          )}>
            <span className={clsx(
              'text-sm',
              step.isCompleted ? 'text-white' : 'text-gray-500'
            )}>
              {index + 1}
            </span>
          </div>
          <div className="ml-2">
            <span className={clsx(
              'text-xs',
              step.isActive ? 'text-indigo-500' : 'text-gray-400'
            )}>
              {step.label}
            </span>
          </div>
          {index !== steps.length - 1 && <div className="flex-1 border-t-2 border-gray-300 mx-2" />}
        </div>
      ))}
    </div>
  );
};

export default Stepper;