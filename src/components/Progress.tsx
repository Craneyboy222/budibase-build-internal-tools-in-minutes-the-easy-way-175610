import React from 'react';
import classNames from 'classnames';

interface ProgressProps {
  value: number;
  max: number;
}

const Progress: React.FC<ProgressProps> = ({ value, max }) => {
  const progressPercentage = (value / max) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className={classNames('h-4 rounded-full', {
          'bg-blue-600': progressPercentage < 100,
          'bg-green-600': progressPercentage === 100,
        })}
        style={{ width: `${progressPercentage}%` }}
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
      />
    </div>
  );
};

export default Progress;