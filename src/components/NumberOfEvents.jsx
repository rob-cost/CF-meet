import React, { useEffect, useState } from "react";
import { getEvents } from "../api";
import { use } from "react";

const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const [numberEvents, setNumberEvents] = useState(32);


  useEffect(() => {
    let errorText;
    if (numberEvents === '' || numberEvents <= 0 || isNaN(numberEvents)){
      errorText = "Only positive number are allowed"
      setCurrentNOE(32)
    } else {
      errorText = ""
      setCurrentNOE(numberEvents)
    }
     setErrorAlert(errorText);
  }, [numberEvents])

  /* let errorText;
  if (numberEvents <= 0 || isNaN(numberEvents) ) {
    errorText = "Only positive number are allowed"
  } else {
    errorText = ""
  }
  setErrorAlert(errorText);
 */
  return (
    <div id="number-events" >
      <input
        type="text"
        className="Number-events"
        placeholder="Number of events"
        value={numberEvents}
        onChange={(e) => setNumberEvents(e.target.value)}
      />
    </div>
  )
};

export default NumberOfEvents