import React from "react";

export default function Task(props: {
  info: {
    image: string;
    name: string;
    mesos: string;
  };
}) {
  return (
    <div className="columns">
      <div className="column has-text-centered">
        <img src={`./${props.info.image}`} style={{ height: "100px" }}></img>
      </div>
      <div className="column has-text-centered">
        <div>{props.info.name}</div>
        <div>Level: {props.info.mesos}</div>
        <input type={"checkbox"} data-mesos={props.info.mesos} />
      </div>
    </div>
  );
}
