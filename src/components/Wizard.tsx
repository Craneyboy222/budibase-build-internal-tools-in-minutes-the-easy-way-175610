import React, { useState } from 'react';
import Stepper from './Stepper';

interface WizardProps {
  steps: { label: string; content: React.ReactNode; }[];
}

const Wizard: React.FC<WizardProps> = ({ steps }) => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <Stepper
        steps={steps.map((step, index) => ({
          label: step.label,
          isActive: index === currentStep,
          isCompleted: index < currentStep
        }))}
        currentStep={currentStep}
      />
      <div className="mt-4">
        {steps[currentStep].content}
      </div>
      <div className="mt-4 flex justify-between">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className="px-4 py-2 bg-gray-200 rounded-md"
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Wizard;