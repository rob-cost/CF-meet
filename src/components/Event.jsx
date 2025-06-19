// src/components/Event.jsx
import React, { useState } from 'react';


const Event = ({event}) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <li>
      <h2>{event.summary}</h2>
      <p>{event.location}</p>
      <p>{event.created}</p>

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