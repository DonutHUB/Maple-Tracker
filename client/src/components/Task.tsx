import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function Task(props: {
  info: {
    image: string;
    name: string;
    mesos: string;
    max_runs: number;
  };
  setMesos: React.Dispatch<React.SetStateAction<number>>;
  mesos: number;
}) {
  const [runs, setRuns] = useState<number>(0);

  const increment = () => {
    if (runs < props.info.max_runs) {
      props.setMesos(props.mesos + Number(props.info.mesos));
      setRuns(runs + 1);
    }
  };

  const decrement = () => {
    if (runs != 0) {
      props.setMesos(props.mesos - Number(props.info.mesos));
      setRuns(runs - 1);
    }
  };

  return (
    <div className="card mb-5">
      <header className="card-header">
        <p className="card-header-title  is-justify-content-left my-auto">
          {props.info.name}
        </p>
        <p className="card-header-title is-justify-content-right my-auto">
          {Number(props.info.mesos).toLocaleString()}
          <img src={`./meso_bag.jpg`} className="ml-1 image is-24x24"></img>
        </p>
      </header>
      <div className="card-content">
        <div className="content">
          <img
            src={`./${props.info.image}`}
            className="image is-96x96 m-auto"
            // style={{ height: "100px" }}
          ></img>
        </div>
      </div>
      <footer className="card-footer is-justify-content-center py-2">
        <button className="button is-rounded" onClick={decrement}>
          <FontAwesomeIcon icon={faMinus}></FontAwesomeIcon>
        </button>
        <div className="mx-4 my-auto">{runs}</div>
        <button className="button is-rounded" onClick={increment}>
          <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
        </button>
      </footer>
    </div>
  );
}
