import React from 'react';
import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE }) => {
    
    const [number,setNumber] = useState(32);

    const handleInputChanged = (e) =>{
        const value = e.target.value;
        setNumber(value);
        setCurrentNOE(value);
    }
    
    return (
        <div id="number-of-events">
            <label htmlFor="number-of-events-input">Number of Events:</label> 
                <input 
                type="text"
                id="number-of-events"
                className="number-of-events-input"
                value={number}
                onChange={handleInputChanged} 
                />
            
        </div>
    );
}

export default NumberOfEvents;