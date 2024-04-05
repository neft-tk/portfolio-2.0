import React from "react";
import Project from "./Project";

let firstProjectName = "GridLocke";
let firstProjectRepoURL = "https://github.com/neft-tk/fatal-forge";
let firstProjectDeployedURL = "https://gridlocke.net/";
let firstProjectDescription = "Multiplayer card game with a custom deckbuilder. Utilizes a deployed back-end server for user and card data."

let secondProjectName = "DJ Divide";
let secondProjectRepoURL = "https://github.com/neft-tk/djdivide";
let secondProjectDeployedURL = "https://djdivide.com/";
let secondProjectDescription = "Client Work: Front end page for local musician. Features an emailJS form that emails the client from the front end."

let thirdProjectName = "CCPB Violin Studio - In Progress Client Work";
let thirdProjectRepoURL = "https://github.com/neft-tk/ccpb-violin-studio";
let thirdProjectDeployedURl = "https://bussviolinstudio.com/";
let thirdProjectDescription = "IN PROGRESS Client Work: Website for hosting violin student notes that are posted by an admin and available for just the student (and admins) to see. Waiting on client feedback for design ideas."

export default function ProjectSpace() {
  return (
    <>
        <h1 className="text-center mt-4">Recent Projects</h1>
      <div className="flex flex-col justify-evenly md:flex-row">
        <Project
          projectName={firstProjectName}
          repoLink={firstProjectRepoURL}
          deployedLink={firstProjectDeployedURL}
          projectDescription={firstProjectDescription}
        />
        <Project
          projectName={secondProjectName}
          repoLink={secondProjectRepoURL}
          deployedLink={secondProjectDeployedURL}
          projectDescription={secondProjectDescription}
        />
        <Project
          projectName={thirdProjectName}
          repoLink={thirdProjectRepoURL}
          deployedLink={thirdProjectDeployedURl}
          projectDescription={thirdProjectDescription}
        />
      </div>
    </>
  );
}
