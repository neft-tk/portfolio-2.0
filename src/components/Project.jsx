import React from "react";

export default function Project({ projectName, repoLink, deployedLink, projectDescription }) {
  return (
    <>
    <div>
      <a
        href={deployedLink}
        target="_blank"
        className="project-card"
      >
        <h5 class="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {projectName}
        </h5>
        <a href={repoLink} target="_blank">
          <span className="border-2 border-gray-500 p-1 rounded ">GitHub Repo</span>
        </a>
        <p className="my-4 font-normal text-gray-700 dark:text-gray-400">
            {projectDescription}
        </p>
      </a>
      </div>
    </>
  );
}
