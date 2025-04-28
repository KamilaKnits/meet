// src/components/Event.jsx
import React, { useState } from 'react';
// import PropTypes from 'prop-types';

const Event = ({ event }) => {
    const [showDetails, setShowDetails] = useState(false);
    return (
        <li key={event.id} className="event">
            <h3 id="summary">{event.summary}</h3>
            <p id="created">{event.created}</p>
            <p id="location">{event.location}</p>

            {showDetails && (
                <div className="details">
                    <p>{event.description}</p>
                    <p>Start: {event.start.dateTime}</p>
                    <p>End: {event.end.dateTime}</p>

                </div>
            )}
            <button
                className="show-details"
                onClick={() => setShowDetails((prev) => !prev)}
            >
                {showDetails ? "hide-details" : "show-details"}
            </button>
        </li>
    );
};

export default Event;

// Event.propTypes = {
//     event: PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       summary: PropTypes.string.isRequired,
//       location: PropTypes.string.isRequired,
//       description: PropTypes.string,
//       created: PropTypes.string.isRequired,
//       start: PropTypes.shape({
//         dateTime: PropTypes.string.isRequired,
//       }).isRequired,
//       end: PropTypes.shape({
//         dateTime: PropTypes.string.isRequired,
//       }).isRequired,
//     }).isRequired,
//   };
