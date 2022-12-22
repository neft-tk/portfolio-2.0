import React from "react";
import ProjectSpace from "./ProjectSpace";
import Image from "../assets/images/60019224.jpg";

export default function About() {

    return (
      <>
      <div className="block">
        <div className="flex flex-col justify-evenly items-center md:flex-row mx-12 my-32">
        <div className="m-8">
          <img src={Image} className="selfie"/>
        </div>
        <div>
          <h1 className="text-center">About Me!</h1>
          <p>I am a recent Full-Stack Web Development Bootcamp graduate from the University of Washington. During my time at bootcamp, I won various awards for projects I contributed on. I tackle my problems with a growth mindset - my goal is learning-focused, so that everyday I can be at least 1% better at anything I put my mind to.  </p>
        </div>
        </div>
        </div>
        <ProjectSpace/>
      </>
    );
}
