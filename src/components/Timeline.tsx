import React from 'react';

interface TimelineEvent {
  time: string;
  title: string;
  description: string;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className="relative">
      <div className="border-l-2 border-gray-200">
        {events.map((event, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute -left-3 mt-0.5 w-6 h-6 bg-white border-2 border-indigo-600 rounded-full"></div>
            <p className="text-sm text-gray-500">{event.time}</p>
            <h4 className="text-lg font-semibold text-gray-900">{event.title}</h4>
            <p className="text-sm text-gray-600">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;