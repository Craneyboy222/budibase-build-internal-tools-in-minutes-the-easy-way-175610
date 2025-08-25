import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

interface RatingProps {
  totalStars: number;
  onRate: (rating: number) => void;
}

const Rating: React.FC<RatingProps> = ({ totalStars, onRate }) => {
  const [rating, setRating] = useState(0);

  const handleClick = (value: number) => {
    setRating(value);
    onRate(value);
  };

  return (
    <div className="flex">
      {Array.from({ length: totalStars }, (_, index) => (
        <FaStar
          key={index}
          onClick={() => handleClick(index + 1)}
          className={`cursor-pointer ${index < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          aria-label={`Rate ${index + 1} out of ${totalStars}`}
        />
      ))}
    </div>
  );
};

export default Rating;