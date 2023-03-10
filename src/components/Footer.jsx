import React from "react";
import Github from "../assets/images/GitHub_Logo.png";
import Linkedin from "../assets/images/LI-In-Bug.png";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="flex flex-row">
          <a href="mailto: ebussman@gmail.com">Email Me!</a>
          <a href="https://github.com/neft-tk" target="blank">
            <img src={Github} alt="github" className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/john-erik-buss" target="blank">
            <img src={Linkedin} alt="linkedin" className="icon" />
          </a>
        </div>
      </div>
    </>
  );
}
