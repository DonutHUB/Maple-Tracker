import React, { useState } from "react";
import Tasks from "./Tasks";

export default function Dashboard() {
  const [dailies, setDailies] = useState<number>(0);

  return (
    <div className="content">
      <Tasks
        json="./Daily Bosses.json"
        header="Dailies"
        setMesos={setDailies}
        mesos={dailies}
      ></Tasks>
      <div>{dailies}</div>
    </div>
  );
}
