import React from "react";
import Github from "../assets/images/GitHub_Logo.png"
import Linkedin from "../assets/images/LI-In-Bug.png"


export default function Footer() {
  return (
    <>
    <div className="flex flex-row justify-center">
    <a href = "mailto: ebussman@gmail.com">Email Me!</a>
      <a href="https://github.com/neft-tk" target="blank">
        <img src={Github} alt="github" className="icon" />
      </a>
      <a href="www.linkedin.com/in/john-erik-buss" target="blank">
        <img src={Linkedin} alt="linkedin" className="icon" />
      </a>
      </div>
    </>
  );
}
