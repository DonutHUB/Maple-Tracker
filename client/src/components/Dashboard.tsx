import React, { useState } from "react";
import Tasks from "./Tasks";

export default function Dashboard() {
  const [dailies, setDailies] = useState<number>();

  return (
    <div className="content">
      <Tasks
        json="./Daily Bosses.json"
        header="Dailies"
        setMesos={setDailies}
      ></Tasks>
      <div>{dailies}</div>
    </div>
  );
}
