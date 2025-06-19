import React, { useState } from "react";

const NumberOfEvents = () => {
    const [numberEvents, setNumberEvents] = useState(32);
return (
    <div id="number-events">
        <input
            type="text"
            className="Number-events"
            placeholder="Number of events"
            value={numberEvents}
            onChange={(e)=>setNumberEvents(e.target.value)}
        />
    </div>
)
};

export default NumberOfEvents