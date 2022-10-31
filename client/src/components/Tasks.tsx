import React, { useEffect, useState } from "react";

export default function Tasks() {
  const [info, setInfo] =
    useState<{ name: string; mesos: string; image: string }[]>();

  useEffect(() => {
    const fetchData = async () => {
      const file = await fetch("./Daily Bosses.json");
      const daily_bosses = await file.json();
      setInfo(daily_bosses);
    };
    fetchData();
  }, [info]);

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
              <input type={"checkbox"} />
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
        <h4>Dailies</h4>
        {dailyBossesToHTML()}
      </div>
    </div>
  );
}
