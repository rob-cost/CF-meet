// src/components/Event.jsx
import React, { useState } from 'react';


const Event = ({event}) => {
  const [showDetails, setShowDetails] = useState(false);
  const date = new Date(event.start.dateTime);
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    timeZoneName: 'short',
    timeZone: event.start.timeZone,
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  
  return (
    <li className='event'>
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>{formattedDate}</p>

      <button className='event-button' onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? 'Hide Details' : 'Show Details'}
      </button>
      {showDetails && (
        <div className="event-details">
          <h3>About event:</h3>
          <a
            href={event.htmlLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            See details on Google Calendar
          </a>
          <p>{event.description}</p>
        </div>
      )}
    </li>
  );
}


export default Event;