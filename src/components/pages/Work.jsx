import React from "react";
import resume from "../../assets/Erik Buss Resume.docx.pdf";

export default function Work() {
  return (
    <>
      <div className="block">
        <div className="flex flex-row justify-evenly mx-12 my-32">
          <button
            type="button"
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            <a href={resume} download>
              Download My Resume!
            </a>
          </button>
        </div>
      </div>
      <div className="work-list">
        <div className="project-card">
          <a href="https://www.pagliacci.com/" target="_blank" rel="noreferrer">
            <h1 className="text-center m-2 text-xl">Pagliacci Pizza</h1>
            <ul>
              <li className="text-sm">
                Managed workers’ schedules, training, and performance reviews
              </li>
              <li className="text-sm">
                Contributed to long-term performance growth plans company wide
              </li>
              <li className="text-sm">
                One of the fastest promoted workers recorded, multiple
                performance based record holder
              </li>
            </ul>
          </a>
        </div>
        <div className="project-card">
        <a href="https://www.brplusa.com/" target="_blank" rel="noreferrer">
          <h1 className="text-center m-2 text-xl">BR+A Consulting Engineers</h1>
          <ul>
            <li className="text-sm">Worked for architects, engineers, and various clients for processing paperwork</li>
            <li className="text-sm">Edited outgoing emails, reports, and presentations from the company to clients</li>
          </ul>
        </a>
        </div>
        <div className="project-card">
          <a href="https://atc.fas.harvard.edu/" target="_blank" rel="noreferrer">
          <h1 className="text-center m-2 text-xl">Harvard Assistive Technology Center</h1>
          <ul>
            <li className="text-sm">Scanned textbooks into audio files for students with learning difficulties</li>
            <li className="text-sm">Worked independently as well as managed long-term projects</li>
          </ul>
          </a>
        </div>
        <div className="project-card mb-20">
          <a href="https://dignitas.gg/" target="_blank" rel="noreferrer">
            <h1 className="text-center m-2 text-xl">Dignitas</h1>
            <ul>
              <li className="text-sm">Worked on articles of my choosing as well as paid content</li>
              <li className="text-sm">Conduct interviews with esports professionals</li>
            </ul>
          </a>
        </div>
      </div>
    </>
  );
}
