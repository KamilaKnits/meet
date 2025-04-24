// src/components/Event.jsx
import { useState } from 'react';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li key={event.id} className="event">
            <h3 id="summary">{summary}</h3>
            <p id="created">{new Date(event.created).toUTCString}</p>
            <p id="location">{location}</p>
            <button
                className="show details"
                onClick={() => {
                    showDetails ? setShowDetails(false) : setShowDetails(true)
                }}

            >{showDetails ? "hide details" : "show details"}
            </button>
        </li>

    );
}

export default Event;