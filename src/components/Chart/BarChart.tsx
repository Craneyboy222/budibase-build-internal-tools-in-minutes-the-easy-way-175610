import React from 'react';
import {
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts';

interface BarChartProps {
  data: Array<{ [key: string]: number | string }>;
  xDataKey: string;
  barDataKey: string;
}

const BarChart: React.FC<BarChartProps> = ({ data, xDataKey, barDataKey }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RechartsBarChart data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={xDataKey} />
        <YAxis />
        <Tooltip />
        <Bar dataKey={barDataKey} fill="#82ca9d" />
      </RechartsBarChart>
    </ResponsiveContainer>
  );
};

export default BarChart;