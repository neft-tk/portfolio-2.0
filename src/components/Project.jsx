import React from 'react'

export default function Project({ repoLink, deployedLink }) {

    return (
        <>
      <div>Project</div>
      <h1>ProjectName</h1>
      <a href={repoLink} target="_blank">Repo</a>
      <a href={deployedLink} target="_blank">Deployed Site</a>
      </>
    )
}
