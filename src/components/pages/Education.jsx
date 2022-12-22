import React from "react";
import UWLogo from "../../assets/images/UWLogo.png";
import BCLogo from "../../assets/images/BCLogo.png";
import NEULogo from "../../assets/images/NEULogo.png";
import IBLogo from "../../assets/images/IBLogo.png";

export default function Education() {
  return (
    <>
      <div className="block flex flex-col items-center justify-evenly mx-12 my-32">
          <h1>Education</h1>
        <div className="flex flex-col md:flex-row">
          <div className="education-card">
          <img src={IBLogo} className="school-icon mx-2"/>           
            <a
              href="https://bsd405.org/interlake/about/ib/#:~:text=Interlake%20students%20pursue%20IB%20Diploma,%2C%20and%20Service%20(CAS)."
              target="_blank"
            >
              Interlake High School: International Baccalaureate Program
            </a>
          </div>
          <div className="education-card">
          <img src={NEULogo} className="school-icon mx-2"/>
            <a href="https://www.northeastern.edu/" target="_blank">
              Northeastern University: BA in English, Minor in Japanese
            </a>
          </div>
          <div className="education-card">
          <img src={BCLogo} className="school-icon mx-2"/>
            <a href="https://www.bellevuecollege.edu/" target="_blank">Bellevue College: Technical Writing Certificate</a>
          </div>
          <div className="education-card">
            <img src={UWLogo} className="school-icon mx-2"/>
            <a href="https://bootcamp.uw.edu/" target="_blank">University of Washington Fullstack Web Development Bootcamp
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
