import React from 'react';
import Metric from './Metric';

interface StatsProps {
  data: { label: string; value: number | string; }[];
}

const Stats: React.FC<StatsProps> = ({ data }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {data.map((item, index) => (
        <Metric key={index} label={item.label} value={item.value} />
      ))}
    </div>
  );
};

export default Stats;