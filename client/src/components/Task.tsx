import React from "react";

export default function Task(props: {
  info: {
    image: string;
    name: string;
    mesos: string;
  };
  setMesos: any;
  mesos: number;
}) {
  const increment = () => {
    props.setMesos(props.mesos + Number(props.info.mesos));
  };

  const decrement = () => {
    props.setMesos(props.mesos - Number(props.info.mesos));
  };

  return (
    <div className="columns">
      <div className="column has-text-centered">
        <img src={`./${props.info.image}`} style={{ height: "100px" }}></img>
      </div>
      <div className="column has-text-centered">
        <div>{props.info.name}</div>
        <div>{props.info.mesos}</div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
    </div>
  );
}
