import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import 'tailwindcss/tailwind.css';

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border rounded shadow-sm">
      <button
        onClick={toggleAccordion}
        className="flex justify-between items-center w-full px-4 py-2 text-left text-gray-700 bg-gray-100 hover:bg-gray-200"
        aria-expanded={isOpen}
        aria-label={`Toggle ${title}`}
      >
        <span>{title}</span>
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </button>
      {isOpen && <div className="px-4 py-2 bg-white text-gray-600">{content}</div>}
    </div>
  );
};

export default Accordion;