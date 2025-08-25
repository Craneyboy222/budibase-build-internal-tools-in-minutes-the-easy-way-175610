import React, { useState } from 'react';
import classNames from 'classnames';

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classNames(
              'px-4 py-2 text-sm font-medium text-gray-700',
              {
                'border-b-2 border-indigo-500': activeIndex === index,
                'hover:text-indigo-700': activeIndex !== index,
              }
            )}
            onClick={() => setActiveIndex(index)}
            role="tab"
            aria-selected={activeIndex === index}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-4">
        {tabs[activeIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
