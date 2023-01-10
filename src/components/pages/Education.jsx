import React from "react";
import UWLogo from "../../assets/images/UWLogo.png";
import BCLogo from "../../assets/images/BCLogo.png";
import NEULogo from "../../assets/images/NEULogo.png";
import IBLogo from "../../assets/images/IBLogo.png";

export default function Education() {
  return (
    <>
      <div className="block flex flex-col my-60 items-center justify-evenly lg:mx-12 lg:my-32">
          <h1>Education</h1>
        <div className="flex flex-col md:flex-row">
          <div className="education-card">
          <img src={IBLogo} alt="Interlake High School logo for international baccalaureate program" className="school-icon mx-2"/>           
            <a
              href="https://bsd405.org/interlake/about/ib/#:~:text=Interlake%20students%20pursue%20IB%20Diploma,%2C%20and%20Service%20(CAS)."
              target="_blank" rel="noreferrer"
            >
              Interlake High School: International Baccalaureate Program
            </a>
          </div>
          <div className="education-card">
          <img src={NEULogo} alt="Northeastern University Logo" className="school-icon mx-2"/>
            <a href="https://www.northeastern.edu/" target="_blank" rel="noreferrer">
              Northeastern University: BA in English, Minor in Japanese
            </a>
          </div>
          <div className="education-card">
          <img src={BCLogo} alt="Bellevue College logo" className="school-icon mx-2"/>
            <a href="https://www.bellevuecollege.edu/" target="_blank" rel="noreferrer">Bellevue College: Technical Writing Certificate</a>
          </div>
          <div className="education-card">
            <img src={UWLogo} alt="University of Washington logo" className="school-icon mx-2"/>
            <a href="https://bootcamp.uw.edu/" target="_blank" rel="noreferrer">University of Washington Fullstack Web Development Bootcamp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
