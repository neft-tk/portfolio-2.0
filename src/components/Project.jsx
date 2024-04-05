import React from "react";

export default function Project({ projectName, repoLink, deployedLink, projectDescription }) {
  return (
    <>
    <div>
      <a
        href={deployedLink}
        target="_blank"
        rel="noreferrer"
        className="project-card"
      >
        <h5 className="mb-4 text-2xl font-bold tracking-tight">
          {projectName}
        </h5>
        <a href={repoLink} target="_blank" rel="noreferrer">
          <span className="border-2 border-gray-500 p-1 rounded ">GitHub Repo</span>
        </a>
        <p className="my-4 font-normal text-gray-700">
            {projectDescription}
        </p>
      </a>
      </div>
    </>
  );
}
