import React, { useEffect, useState } from "react"
import EventList from "./components/EventList"
import CitySearch from "./components/CitySearch"
import NumberOfEvents from "./components/NumberOfEvents"
import { getEvents, extractLocations } from "./api"
import { InfoAlert, ErrorAlert, WarningAlert} from "./components/Alert"
import CityEventsChart from "./components/CityEventsChart"
import EventGenreChart from "./components/EventGenreChart"
import { toast, ToastContainer } from "react-toastify"

function App() {
  const [events, setEvents] = useState([]);
  const [currentNOE, setCurrentNOE] = useState(32);
  const [allLocations, setAllLocations] = useState([]);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");


   const fetchData = async () => {
   const allEvents = await getEvents();
   const filteredEvents = currentCity === "See all cities" ?
     allEvents :
     allEvents.filter(event => event.location === currentCity)
   setEvents(filteredEvents.slice(0, currentNOE));
   setAllLocations(extractLocations(allEvents));
 }
  useEffect(() => {
    let infoText
    if (navigator.onLine) {
      infoText = ""
    } else {
      infoText = "You are offline. The displayed list has been loaded from the cache"
    }
    setWarningAlert(infoText)
    fetchData();
 }, [currentCity, currentNOE]);

  const notifyUser = (msg, type, toastId) => {
    toast(msg, {
      toastId,
      type
    });
  }

  return (
    <div className="App">
      <ToastContainer 
      position="top-center"
      autoClose={3000}
      hideProgressBar={true}
      newestOnTop={true}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      pauseOnHover
      theme="dark"
      />
      <div className="alerts-container">
       {infoAlert.length ? <InfoAlert text={infoAlert}/> : null}
       {errorAlert.length ? <ErrorAlert text={errorAlert}/> : null}
       {warningAlert.length ? <WarningAlert text={warningAlert}/> : null}
      </div>
      <h1>Meet App</h1>
      <h3>Choose your nearest City</h3>
      <CitySearch 
      allLocations={allLocations} 
      setCurrentCity={setCurrentCity}
      setInfoAlert={setInfoAlert}
      notifyUser={notifyUser}
      />
      <p>Number of events:</p>
      <NumberOfEvents 
      setCurrentNOE={setCurrentNOE}
      setErrorAlert={setErrorAlert}
      notifyUser={notifyUser}
      />
      <div className="charts-container" >
      <EventGenreChart
      events={events} />
      <CityEventsChart 
      allLocations={allLocations}
      events={events}
      />
      </div>
      <EventList events={events}/>
    </div>
  )
}

export default App
