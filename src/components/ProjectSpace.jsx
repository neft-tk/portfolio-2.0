import React from "react";
import Project from "./Project";

let firstProjectName = "GridLocke";
let firstProjectRepoURL = "https://github.com/neft-tk/fatal-forge";
let firstProjectDeployedURL = "https://gridlocke.net/";

let secondProjectName = "Code-Conflict";
let secondProjectRepoURL = "https://github.com/neft-tk/Code-Conflict";
let secondProjectDeployedURL = "https://code-conflict.herokuapp.com/";

let thirdProjectName = "CCPB Violin Studio";
let thirdProjectRepoURL = "https://github.com/neft-tk/ccpb-violin-studio";
let thirdProjectDeployedURl = "#";

export default function ProjectSpace() {
  return (
    <>
      <div className="flex flex-row justify-evenly">
        <Project
          projectName={firstProjectName}
          repoLink={firstProjectRepoURL}
          deployedLink={firstProjectDeployedURL}
        />
        <Project
          projectName={secondProjectName}
          repoLink={secondProjectRepoURL}
          deployedLink={secondProjectDeployedURL}
        />
        <Project
          projectName={thirdProjectName}
          repoLink={thirdProjectRepoURL}
          deployedLink={thirdProjectDeployedURl}
        />
      </div>
    </>
  );
}
