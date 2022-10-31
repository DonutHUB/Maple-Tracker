import React, { useState } from "react";

export default function Tasks() {
  const [info, setInfo] = useState();

  const dailyBossesToHTML = async () => {
    const file = await fetch("./Daily Bosses.json");
    const daily_bosses = await file.json();
    setInfo(daily_bosses);
    const rows = daily_bosses.map((result: { image: any; name: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; mesos: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
        <div key={index}>
          <div className="columns">
            <div className="column has-text-centered">
              <input type={"checkbox"} />
              <img src={`./${result.image}`} style={{height: "100px"}}></img>
            </div>
            <div className="column has-text-centered">
              <div>{result.name}</div>
              <div>Mesos: {result.mesos}</div>
            </div>
          </div>
        </div>
    ));

      return rows;
  };

  return info ? (
    <div className="content has-text-centered">
      <div className="block">
        <h4>Dailies</h4>
        {dailyBossesToHTML()}
      </div>
    </div>
  ) : (
    <div className="content has-text-centered">
      <div className="block">
        <h4>boo</h4>
      </div>
    </div>
  );
}
