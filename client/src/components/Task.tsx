import React, { useState } from "react";

export default function Task(props: {
  info: {
    image: string;
    name: string;
    mesos: string;
    max_runs: number;
  };
  setMesos: any;
  mesos: number;
}) {
  const [runs, setRuns] = useState<number>(0)
  const increment = () => {
    if(runs < props.info.max_runs){
      props.setMesos(props.mesos + Number(props.info.mesos));
      setRuns(runs + 1)
    }
  };

  const decrement = () => {
    if(runs != 0){
      props.setMesos(props.mesos - Number(props.info.mesos));
      setRuns(runs - 1)
    }
  };

  return (
    // <><div className="columns">
    //   <div className="column has-text-centered">
    //     <img src={`./${props.info.image}`} style={{ height: "100px" }}></img>
    //   </div>
    //   <div className="column has-text-centered">
    //     <div>{props.info.name}</div>
    //     <div>{props.info.mesos}</div>
    //     <button onClick={decrement}>-</button>
    //     <div>{runs}</div>
    //     <button onClick={increment}>+</button>
    //   </div>
    <div className="card" style={{width: "350px"}}>
        <header className="card-header" style={{height: "50px"}}>
          <p className="card-header-title" style={{justifyContent: "left", height: "50px", alignItems: "center"}}>
            {props.info.name}
          </p>
          <p className="card-header-title" style={{justifyContent: "right", height: "50px", alignItems: "center"}}>
            {Number(props.info.mesos).toLocaleString()} <img src={`./meso_bag.jpg`} style={{ height: "20px" }}></img>
          </p>
        </header>
        <div className="card-content">
          <div className="content">
            <img src={`./${props.info.image}`} style={{ height: "100px" }}></img>
          </div>
        </div>
        <footer style={{textAlign: "center", justifyContent: "center"}} className="card-footer">
          <button className="card-footer-item" style={{height: "50px", width: "100px"}} onClick={decrement}>-</button>
          <div style={{height: "50px", width: "100px", justifyContent: "center", alignItems: "center"}}>{runs}</div>
          <button className="card-footer-item" style={{height: "50px", width: "100px"}} onClick={increment}>+</button>
        </footer>
    </div>
  );
}
