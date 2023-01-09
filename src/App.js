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
  const [backgroundClass, setBackgroundClass] = useState('background-day')

  const handleBackgroundChange = (dayTime) => {
    let dayTimeSplit = dayTime.split(":")
    
    let hourDayTime = dayTimeSplit[0]
    console.log(hourDayTime);

    if((hourDayTime >= 6) && (hourDayTime < 9)) {
      setBackgroundClass('background-dawn')
      console.log(backgroundClass);
    } else if((hourDayTime >= 9) && (hourDayTime < 18)) {
      setBackgroundClass('background-day')
      console.log(backgroundClass);
    } else if ((hourDayTime >= 18) && (hourDayTime < 21)) {
      setBackgroundClass('background-evening')
      console.log(backgroundClass);
    } else {
      setBackgroundClass('background-night')
      console.log(backgroundClass);
    }

    const htmlId = document.getElementById("html")
    htmlId.setAttribute("class", backgroundClass)
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
