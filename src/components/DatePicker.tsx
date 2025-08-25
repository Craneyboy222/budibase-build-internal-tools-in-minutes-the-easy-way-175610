import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import PropTypes from 'prop-types';

interface DatePickerProps {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
  className?: string;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({ selectedDate, onChange, className = '' }) => {
  return (
    <div className={`datepicker-container ${className}`} role="application" aria-label="date picker">
      <DatePicker selected={selectedDate} onChange={onChange} className="w-full p-2 rounded" />
    </div>
  );
};

CustomDatePicker.propTypes = {
  selectedDate: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default CustomDatePicker;
