import React from "react";
import resume from "../../assets/Erik Buss Resume.pdf";

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
            <h2 className="underline">Management</h2>
            <ul>
              <li>
                Managed workers’ schedules, training, and performance reviews
              </li>
              <li>
                Contributed to long-term performance growth plans company wide
              </li>
              <li>
                One of the fastest promoted workers recorded, multiple
                performance based record holder
              </li>
            </ul>
          </a>
        </div>
        <div className="project-card">
        <a href="https://www.brplusa.com/" target="_blank" rel="noreferrer">
          <h1 className="text-center m-2 text-xl">BR+A Consulting Engineers</h1>
          <h2 className="underline">Construction Administrator</h2>
          <ul>
            <li>Worked for architects, engineers, and various clients for processing paperwork</li>
            <li>Edited outgoing emails, reports, and presentations from the company to clients</li>
          </ul>
        </a>
        </div>
        <div className="project-card">
          <a href="https://atc.fas.harvard.edu/" target="_blank" rel="noreferrer">
          <h1 className="text-center m-2 text-xl">Harvard Assistive Technology Center</h1>
          <h2 className="underline">Product Editor</h2>
          <ul>
            <li>Scanned textbooks into audio files for clients with learning difficulties</li>
            <li>Worked independently as well as managed long-term projects</li>
            <li>Multiple semesters worth of time, was asked to work longer</li>
          </ul>
          </a>
        </div>
        <div className="project-card">
          <a href="https://dignitas.gg/" target="_blank" rel="noreferrer">
            <h1 className="text-center m-2 text-xl">Dignitas</h1>
            <h2 className="underline">Esports Freelance Writer</h2>
            <ul>
              <li>Worked on articles of my choosing as well as paid content</li>
              <li>Conducted interviews with esports professionals</li>
              <li>Self-managed my own appropriate deadlines</li>
            </ul>
          </a>
        </div>
      </div>
    </>
  );
}
