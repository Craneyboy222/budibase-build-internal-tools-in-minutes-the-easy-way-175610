import React from 'react';
import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import PropTypes from 'prop-types';

interface TimePickerProps {
  value: moment.Moment;
  onChange: (value: moment.Moment) => void;
  className?: string;
}

const CustomTimePicker: React.FC<TimePickerProps> = ({ value, onChange, className = '' }) => {
  return (
    <div className={`timepicker-container ${className}`} role="application" aria-label="time picker">
      <TimePicker value={value} onChange={onChange} showSecond={false} className="w-full p-2 rounded" />
    </div>
  );
};

CustomTimePicker.propTypes = {
  value: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string
};

export default CustomTimePicker;
