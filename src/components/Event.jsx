// src/components/Event.jsx
import React, { useState } from 'react';


const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li className="event">
            <h3>{event && event.summary}</h3>
            <p>{event && event.location}</p>
            <p>{event && (new Date(event.created)).toUTCString()}</p>

            {showDetails ?
            <p className="details">{event && event.description}</p> : 
            null
            }
            <button
                className="show-details details-btn"
                onClick={() => showDetails ? setShowDetails(false): setShowDetails(true)}>
                {showDetails ? "hide-details" : "show-details"}</button>
        </li>
    );
};

export default Event;

