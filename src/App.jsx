import React, { useEffect, useState } from "react"
import EventList from "./components/EventList"
import CitySearch from "./components/CitySearch"
import NumberOfEvents from "./components/NumberOfEvents"
import { getEvents, extractLocations } from "./api"


function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");


   const fetchData = async () => {
   const allEvents = await getEvents();
   const filteredEvents = currentCity === "See all cities" ?
     allEvents :
     allEvents.filter(event => event.location === currentCity)
   setEvents(filteredEvents.slice(0, currentNOE));
   setAllLocations(extractLocations(allEvents));
 }
  useEffect(() => {
   fetchData();
 }, [currentCity, currentNOE]);

 

 

  return (
    <div className="App">
      <h1>Meet App</h1>
      <h3>Choose your nearest City</h3>
      <CitySearch allLocations={allLocations} setCurrentCity={setCurrentCity}/>
      <p>Number of events:</p>
      <NumberOfEvents setCurrentNOE={setCurrentNOE}/>
      <EventList events={events}/>
      
    </div>
  )
}

export default App
