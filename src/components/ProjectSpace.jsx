import React from "react";
import Project from "./Project";

let firstProjectRepoURL = "https://github.com/neft-tk/fatal-forge";
let firstProjectDeployedURL = "https://gridlocke.net/";

let secondProjectRepoURL = "https://github.com/neft-tk/Code-Conflict";

export default function ProjectSpace() {
  return (
    <>
      <Project
        repoLink={firstProjectRepoURL}
        deployedLink={firstProjectDeployedURL}
      />
      <Project repoLink={secondProjectRepoURL} />
    </>
  );
}
