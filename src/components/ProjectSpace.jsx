import React from "react";
import Project from "./Project";

let firstProjectName = "GridLocke";
let firstProjectRepoURL = "https://github.com/neft-tk/fatal-forge";
let firstProjectDeployedURL = "https://gridlocke.net/";
let firstProjectDescription = "Multiplayer card game with a custom deckbuilder. Utilizes a deployed back-end server for user and card data."

let secondProjectName = "Code-Conflict";
let secondProjectRepoURL = "https://github.com/neft-tk/Code-Conflict";
let secondProjectDeployedURL = "https://code-conflict.herokuapp.com/";
let secondProjectDescription = "Small single player game utilizing express routes with a small in-site back-end for user and game data."

let thirdProjectName = "CCPB Violin Studio - In Progress Client Work";
let thirdProjectRepoURL = "https://github.com/neft-tk/ccpb-violin-studio";
let thirdProjectDeployedURl = "#";
let thirdProjectDescription = "Client Work: Website for hosting violin student notes that are posted by an admin and available for just the student (and admins) to see."

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
