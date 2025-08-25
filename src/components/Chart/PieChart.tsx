import React from 'react';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { ChartData, ChartOptions } from 'chart.js';
import { cx } from '@emotion/css';
import { useChartData } from '../../hooks/useChartData';
import { Spinner } from '../Spinner';
import { ErrorBoundary } from '../ErrorBoundary';
import PropTypes from 'prop-types';

interface PieChartProps {
  data: ChartData<'pie'>;
  options?: ChartOptions<'pie'>;
  loading: boolean;
  error: Error | null;
  className?: string;
}

const PieChart: React.FC<PieChartProps> = ({ data, options, loading, error, className }) => {
  return (
    <ErrorBoundary error={error}>
      <div className={cx('relative', className)} aria-live="polite">
        {loading ? <Spinner /> : <Pie data={data} options={options} />}
      </div>
    </ErrorBoundary>
  );
};

PieChart.propTypes = {
  data: PropTypes.object.isRequired,
  options: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
  className: PropTypes.string
};

export default PieChart;