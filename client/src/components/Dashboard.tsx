import React, { useState } from "react";
import Tasks from "./Tasks";

export default function Dashboard() {
  const [dailies, setDailies] = useState<number>(0);
  const [weeklies, setWeeklies] = useState<number>(0);

  return (
    <div className="content">
      <div className="content has-text-left">
        <div className="columns is-variable is-8">
          <div className="column">
            <Tasks
              json="./Daily Bosses.json"
              header="Dailies"
              setMesos={setDailies}
              mesos={dailies}
            ></Tasks>
          </div>
          <div className="column">
            <Tasks
              json="./Weekly Bosses.json"
              header="Weeklies"
              setMesos={setWeeklies}
              mesos={weeklies}
            ></Tasks>
          </div>
        </div>
      </div>
      <div>Dailies: {dailies.toLocaleString()}</div>
      <div>Weeklies: {weeklies.toLocaleString()}</div>
      <div>Weekly Income: {(dailies + weeklies).toLocaleString()}</div>
    </div>
  );
}
