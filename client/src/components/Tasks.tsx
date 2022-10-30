import React from "react";
import tasks from "../assets/tasks.json";

export default function Tasks() {
  const tasksToHTML = () => {
    const rows = tasks.map((result, index) => (
      <div key={index}>
        <img src={`/client/src/assets/images/${result.image}`}></img>
        {result.name}
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
