import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';
import { cx } from '@emotion/css';
import { useChartData } from '../../hooks/useChartData';
import { Spinner } from '../Spinner';
import { ErrorBoundary } from '../ErrorBoundary';
import PropTypes from 'prop-types';

interface AreaChartProps {
  data: ChartData<'line'>;
  options?: ChartOptions<'line'>;
  loading: boolean;
  error: Error | null;
  className?: string;
}

const AreaChart: React.FC<AreaChartProps> = ({ data, options, loading, error, className }) => {
  return (
    <ErrorBoundary error={error}>
      <div className={cx('relative', className)} aria-live="polite">
        {loading ? <Spinner /> : <Line data={data} options={options} />}
      </div>
    </ErrorBoundary>
  );
};

AreaChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  className: PropTypes.string
};

export default AreaChart;