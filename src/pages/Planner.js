import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Planner = () => {
  const [events, setEvents] = useState([
    {
      title: 'Meeting',
      start: new Date(),
      end: new Date(),
    },
    {
        title:'Assignment Submission',
        start:new Date(),
        end:new Date(),
    }
    // Add more events as needed
  ]);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('New Event name');
    if (title) {
      setEvents([...events, { title, start, end }]);
    }
  };

  return (
    <div>
      <Navbar />
      <div>
        <h2 className='text-center text-xl font-bold p-4'>Planner</h2>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          onSelectSlot={handleSelect}
        />
      </div>
    </div>
  );
};

export default Planner;
