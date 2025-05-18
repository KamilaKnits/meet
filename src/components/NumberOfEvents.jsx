import React from 'react';
import { useState } from 'react';

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
    
    const [number,setNumber] = useState(32);

    const handleInputChanged = (e) =>{
        const value = e.target.value;
        if (!isNaN(value) && value >= 0) {
            setNumber(value);
            setCurrentNOE(value);
            setErrorAlert("");
        }    
        
        let errorText;
        if (number === "" || isNaN(number) || number <= 0 ) {
            errorText = "Please enter a number greater than zero."
         } else {
            errorText = ""
          }
          setErrorAlert(errorText);
  };
    
    
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