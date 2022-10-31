import React, { useEffect, useState } from "react";

export default function Tasks(props: {
  json: string;
  header: string;
  setMesos: any;
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

  const checkboxClicked = (event: { target: { checked: any; id: any } }) => {
    console.log(event.target.checked, event.target.id);
    props.setMesos(1);
  };

  const dailyBossesToHTML = () => {
    const rows = info?.map(
      (
        result: {
          image: string;
          name: string;
          mesos: string;
        },
        index: React.Key
      ) => (
        <div key={index}>
          <div className="columns">
            <div className="column has-text-centered">
              <input type={"checkbox"} onChange={checkboxClicked} />
              <img src={`./${result.image}`} style={{ height: "100px" }}></img>
            </div>
            <div className="column has-text-centered">
              <div>{result.name}</div>
              <div>Mesos: {result.mesos}</div>
            </div>
          </div>
        </div>
      )
    );

    return rows;
  };

  return (
    <div className="content has-text-centered">
      <div className="block">
        <h1>{props.header}</h1>
        {dailyBossesToHTML()}
      </div>
    </div>
  );
}
