import React from 'react';

interface ReviewProps {
  rating: number; // from 1 to 5
  comment: string;
  author: string;
}

const Review: React.FC<ReviewProps> = ({ rating, comment, author }) => {
  return (
    <div className="p-4 border rounded-md shadow-sm">
      <div className="flex items-center mb-2">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-500' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.46a1 1 0 00-.364 1.118l1.288 3.967c.3.921-.755 1.688-1.54 1.118l-3.385-2.46a1 1 0 00-1.176 0l-3.385 2.46c-.784.57-1.838-.197-1.54-1.118l1.288-3.967a1 1 0 00-.364-1.118L2.05 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
          </svg>
        ))}
      </div>
      <p className="text-sm text-gray-700 mb-2">"{comment}"</p>
      <p className="text-sm text-gray-500">- {author}</p>
    </div>
  );
};

export default Review;