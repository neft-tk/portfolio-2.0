import React from "react";
import ProjectSpace from "./ProjectSpace";
import Image from "../assets/images/60019224.jpg";
import javascript from "../assets/images/tech-logos/javascript-original.svg";
import reactlogo from "../assets/images/tech-logos/reactlogo.png";
import sqllogo from "../assets/images/tech-logos/sqllogo.png";
import htmllogo from "../assets/images/tech-logos/htmllogo.png";
import csslogo from "../assets/images/tech-logos/csslogo.png";
import pythonlogo from "../assets/images/tech-logos/pythonlogo.png";
import nodelogo from "../assets/images/tech-logos/nodelogo.png";
import History from "./History";

export default function About() {
  return (
    <>
      <div className="block">
        <div className="flex flex-col mt-60 justify-evenly items-center md:flex-row lg:mx-12 lg:mt-20">
          <div className="m-4">
            <img src={Image} alt="selfie" className="selfie" />
          </div>
          <div className="bg-gray-200 m-4 about-me">
            <h1 className="text-center">About Me!</h1>
            <p>
              I am a recent Full-Stack Web Development Bootcamp graduate from
              the University of Washington. During my time at bootcamp, I won
              various awards for projects I contributed on. I tackle my problems
              with a growth mindset - my goal is learning-focused, so that
              everyday I can be at least 1% better at anything I put my mind to.{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row lg:justify-around">
          <History/>
          <div className="flex flex-row flex-wrap md:justify-center logo-card">
            <img src={javascript} alt="javascript logo" className="icon" />
            <img src={reactlogo} alt="react.js logo" className="icon" />
            <img src={sqllogo} alt="sql logo" className="icon" />
            <img src={htmllogo} alt="html logo" className="icon" />
            <img src={csslogo} alt="css logo" className="icon" />
            <img src={pythonlogo} alt="python logo" className="icon" />
            <img src={nodelogo} alt="node/express logo" className="icon" />
          </div>
        </div>
      </div>
      <ProjectSpace />
    </>
  );
}
