import React, { useEffect, useState } from "react";
import Task from "./Task";

export default function Tasks(props: {
  json: string;
  header: string;
  setMesos: any;
  mesos: number;
}) {
  const [info, setInfo] =
    useState<{ name: string; mesos: string; image: string }[]>();

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
        },
        index: React.Key
      ) => <Task info={result} key={index}></Task>
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
