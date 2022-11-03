import React, { useEffect, useState } from "react";
import Task from "./Task";

export default function Tasks(props: {
  json: string;
  header: string;
  setMesos: any;
  mesos: number;
}) {
  const [info, setInfo] =
    useState<{ name: string; mesos: string; image: string; max_runs: number }[]>();

  useEffect(() => {
    const fetchData = async () => {
      const file = await fetch(props.json);
      const json_file = await file.json();
      setInfo(json_file);
    };
    fetchData();
  }, [info]);

  const bosses = () => {
    const rows = info?.map(
      (
        result: {
          image: string;
          name: string;
          mesos: string;
          max_runs: number
        },
        index: React.Key
      ) => (
        <><Task
          info={result}
          setMesos={props.setMesos}
          mesos={props.mesos}
          key={index}
        ></Task><div className="block"></div></>
      )
    );

    return rows;
  };

  return (
    <div className="content has-text-centered">
      <div className="block">
        <h1>{props.header}</h1>
        {bosses()}
      </div>
    </div>
  );
}
