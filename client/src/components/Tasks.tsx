import React from "react";
import tasks from "../assets/tasks.json";

export default function Tasks() {
  const tasksToHTML = () => {
    const rows = tasks.map((result, index) => (
      <div key={index}>
        <img src={`./${result.image}`}></img>
        <div>{result.name}</div>
        <div>Mesos: {result.mesos}</div>
      </div>
    ));

    return rows;
  };

  return (
    <div className="content has-text-centered">
      <div className="block">
        <h4>Dailies</h4>
        {tasksToHTML()}
      </div>
    </div>
  );
}
