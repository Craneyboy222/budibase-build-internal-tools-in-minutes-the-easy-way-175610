import React from 'react';
import { Line } from 'react-chartjs-2';
import PropTypes from 'prop-types';

interface ChartProps {
  data: any;
  options?: any;
  className?: string;
}

const Chart: React.FC<ChartProps> = ({ data, options, className = '' }) => {
  return (
    <div className={`chart-container ${className}`} role="img" aria-label="data visualization chart">
      <Line data={data} options={options} />
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  className: PropTypes.string
};

export default Chart;
