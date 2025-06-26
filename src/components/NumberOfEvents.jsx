import React, { useEffect, useState } from "react";
import { getEvents } from "../api";
import { use } from "react";

const NumberOfEvents = ({ setCurrentNOE }) => {
  const [numberEvents, setNumberEvents] = useState(32);

  useEffect(() => {
    if (numberEvents === '')
      setCurrentNOE(32)
    else {
      setCurrentNOE(numberEvents)
    }
  }, [numberEvents])

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