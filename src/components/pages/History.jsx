import React, { useEffect } from "react";


export default function History() {

  function getApi() {
    // replace `octocat` with anyone else's GitHub username
    var requestUrl = 'https://api.github.com/users/neft-tk/repos';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data)
        let repoData = data.map(repo => 
        //   {
        //   fetch(`https://api.github.com/users/neft-tk/${repo.name}/commits/`)
        //   .then(function (response) {
        //     return response.json();
        //   })
        //   .then(function(commitData) {
        //     console.log(commitData)
        //   })
        // }
        console.log(repo.name)
        )
        console.log(repoData)
      });
  }

  useEffect(() => {
    getApi()
  },[]);

  return (
    <>
      <div>
        <h1>History</h1>
      </div>
    </>
  );
}
