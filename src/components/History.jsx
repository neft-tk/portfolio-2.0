import React, { useEffect, useState } from "react";
import moment from "moment/moment";

export default function History() {
  const [pushes, setPushes] = useState([]);

  const fetchEvents = async () => {
    const res = await fetch(
      "https://api.github.com/users/neft-tk/events/public"
    );
    const data = await res.json();
    let filtered = data.filter((x) => x.type === "PushEvent");
    filtered = filtered.filter(x => x.payload.commits[0].message !== "Updates");
    setPushes(filtered)
  };

  useEffect(() => {fetchEvents()},[])

  return (
    <>
      <div className="activity-widget">
        <h1 className="underline">GitHub Recent Activity</h1>
        <div>
        {pushes.map((push, i) => (
          <div className="activity" key={i}>
            <div>
              <h6 className="underline">Repo: {push.repo.name.split("/")[1]}</h6>
              <h6>Commit Created at: {moment(push.created_at).format("MM-DD-YY")}</h6>
            </div>
            <h5>Commit Message: {push.payload.commits[0].message}</h5>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}
