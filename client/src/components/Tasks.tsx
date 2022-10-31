import React, { useEffect, useState } from "react";

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

  const checkboxClicked = (event: {
    target: {
      getAttribute: any;
      checked: boolean;
      id: any;
    };
  }) => {
    if (event.target.checked) {
      props.setMesos(
        props.mesos + Number(event.target.getAttribute("data-mesos"))
      );
    } else {
      props.setMesos(
        props.mesos - Number(event.target.getAttribute("data-mesos"))
      );
    }
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
              <input
                type={"checkbox"}
                onChange={checkboxClicked}
                data-mesos={result.mesos}
              />
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
