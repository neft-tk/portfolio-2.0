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
  const [dayTime, setDayTime] = useState(moment().format("LT"))

  useEffect(() => {
      console.log(dayTime);    
      setDayTime(moment().format("LT"))
      console.log(dayTime); 
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
