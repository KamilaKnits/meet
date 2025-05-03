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

// return (
//     <li key={event.id} className="event">
//         <h3 id="summary">{event.summary}</h3>
//         <p id="created">{event.created}</p>
//         <p id="location">{event.location}</p>

//         {showDetails && (
//             <div className="details">
//                 <p>{event.description}</p>
//                 <p>Start: {event.start.dateTime}</p>
//                 <p>End: {event.end.dateTime}</p>

//             </div>
//         )}
//         <button
//             className="show-details"
//             onClick={() => setShowDetails((prev) => !prev)}
//         >
//             {showDetails ? "hide-details" : "show-details"}
//         </button>
//     </li>
// );
// };