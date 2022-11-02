import React, { useState } from "react";
import Tasks from "./Tasks";
import Level from "./Level";

export default function Dashboard() {
  const [dailies, setDailies] = useState<number>(0);
  const [weeklies, setWeeklies] = useState<number>(0);
  const [newname, setNewname] = useState<string>("");
  const [levelNum, setlevelNum] = useState<number>(0);


  const handleNameChange = (event: { preventDefault: () => void; target: { value: any; }; }) => {
    setNewname(event.target.value)
  }

  const handleLevelChange = (event: { preventDefault: () => void; target: { value: any; }; }) => {
    setlevelNum(event.target.value)
  }

  // i want to render conditionally
  const callTasks = () => {
    if(newname != "" && levelNum > 0){
      return (
        <Tasks
              json="./Daily Bosses.json"
              header="Dailies"
              setMesos={setDailies}
              mesos={dailies}
            ></Tasks>
      )
    }
  }

  return (
    <div className="content">
      <div className="content has-text-left">
        <div className="block">
          Name: <input type="text" name="name" placeholder="enter name here" onChange={handleNameChange}/>
          <div></div>
          Level: <input type="number" name="level" placeholder="enter level here" onChange={handleLevelChange}/>
        </div>
        <Level
          name={newname}
          level={levelNum}
        ></Level>
        {callTasks}
        <div className="columns">
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
      <div>Dailies: {7*dailies}</div>
      <div>Weeklies: {weeklies}</div>
      <div>Weekly Income: {7*dailies + weeklies}</div>
    </div>
  );
}
