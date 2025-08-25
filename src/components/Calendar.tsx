import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import PropTypes from 'prop-types';

interface CalendarProps {
  events: Array<{ title: string; date: string }>;
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ events, className = '' }) => {
  return (
    <div className={`calendar-container ${className}`} role="region" aria-label="calendar">
      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
    </div>
  );
};

Calendar.propTypes = {
  events: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired
    })
  ).isRequired,
  className: PropTypes.string
};

export default Calendar;
