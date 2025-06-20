import React, { useEffect, useState } from "react"
import EventList from "./components/EventList"
import CitySearch from "./components/CitySearch"
import NumberOfEvents from "./components/NumberOfEvents"
import { getEvents, extractLocations } from "./api"


function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);


   const fetchData = async () => {
   const allEvents = await getEvents();
   setEvents(allEvents.slice(0, currentNOE));
   setAllLocations(extractLocations(allEvents));
 }
  useEffect(() => {
   fetchData();
 }, []);

 

  return (
    <div className="App">
      <CitySearch allLocations={allLocations}/>
      <EventList events={events}/>
      <NumberOfEvents/>
    </div>
  )
}

export default App
