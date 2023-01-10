import React, { useEffect, useState } from 'react';
import "./style.css";
import Nav from "./components/Nav";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import About from "./components/About";
import Footer from "./components/Footer";
import Education from "./components/pages/Education";
import Work from "./components/pages/Work";
import Contact from "./components/pages/Contact";
import moment from 'moment'

function App() {
  const [dayTime, setDayTime] = useState(moment().format("HH:mm:ss"))
  const [backgroundClass, setBackgroundClass] = useState("")

  const handleBackgroundChange = (dayTime) => {
    let dayTimeSplit = dayTime.split(":")
    
    let hourDayTime = dayTimeSplit[0]

    const backgroundDawn = "background-dawn"
    const backgroundDay = "background-day"
    const backgroundEvening = "background-evening"
    const backgroundNight = "background-night"
    const htmlId = document.getElementById("html")

    if((hourDayTime >= 6) && (hourDayTime < 9)) {
      setBackgroundClass(backgroundDawn)
      htmlId.setAttribute("class", backgroundDawn)
    } else if((hourDayTime >= 9) && (hourDayTime < 18)) {
      setBackgroundClass("background-day")
      htmlId.setAttribute("class", backgroundDay)
    } else if ((hourDayTime >= 18) && (hourDayTime < 21)) {
      setBackgroundClass(backgroundEvening)
      htmlId.setAttribute("class", backgroundEvening)
    } else {
      setBackgroundClass(backgroundNight)
      htmlId.setAttribute("class", backgroundNight)
    }

  }

  useEffect(() => {
      handleBackgroundChange(dayTime)
  }, []);

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
      <Route path="/" element={<About/>}/>
      <Route path="/education" element={<Education/>}/>
      <Route path="/work" element={<Work/>}/>
      <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
