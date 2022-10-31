import React, { useState } from "react";
import Tasks from "./Tasks";

export default function Dashboard() {
  const [dailies, setDailies] = useState<number>(0);
  const [weeklies, setWeeklies] = useState<number>(0);

  return (
    <div className="content">
      <Tasks
        json="./Daily Bosses.json"
        header="Dailies"
        setMesos={setDailies}
        mesos={dailies}
      ></Tasks>
      <Tasks
        json="./Weekly Bosses.json"
        header="Weeklies"
        setMesos={setWeeklies}
        mesos={weeklies}
      ></Tasks>
      <div>Dailies: {7*dailies}</div>
      <div>Weeklies: {weeklies}</div>
      <div>Total: {7*dailies + weeklies}</div>
    </div>
  );
}
